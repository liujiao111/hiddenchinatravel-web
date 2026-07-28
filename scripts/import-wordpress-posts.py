#!/usr/bin/env python3
"""
Import WordPress posts into this Next.js blog as Markdown + local media.

Usage:
  python3 scripts/import-wordpress-posts.py
  python3 scripts/import-wordpress-posts.py --urls scripts/wp-urls.txt
  python3 scripts/import-wordpress-posts.py https://hiddenchinatravel.com/wechat-pay-for-foreigners-china/
  python3 scripts/import-wordpress-posts.py --dry-run --limit 1

Writes:
  _posts/{slug}.md
  public/assets/blog/{slug}/cover.*
  public/assets/blog/{slug}/{inline-images}
  public/assets/blog/authors/{author-slug}.*  (shared author avatar)
"""

from __future__ import annotations

import argparse
import html as html_lib
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path
from typing import Any

from bs4 import BeautifulSoup, Tag
import html2text

ROOT = Path(__file__).resolve().parents[1]
POSTS_DIR = ROOT / "_posts"
MEDIA_ROOT = ROOT / "public" / "assets" / "blog"
AUTHORS_DIR = MEDIA_ROOT / "authors"
DEFAULT_URLS_FILE = Path(__file__).resolve().parent / "wp-urls.txt"
SITE_HOSTS = {"hiddenchinatravel.com", "www.hiddenchinatravel.com"}

USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)


def log(msg: str) -> None:
    print(msg, flush=True)


def fetch(url: str, timeout: int = 45) -> bytes:
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": USER_AGENT,
            "Accept": "text/html,application/xhtml+xml,image/*,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
        },
    )
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def slug_from_url(url: str) -> str:
    path = urllib.parse.urlparse(url).path.strip("/")
    if not path:
        raise ValueError(f"Cannot derive slug from URL: {url}")
    return path.split("/")[-1]


def decode_entities(text: str) -> str:
    return html_lib.unescape(text or "").strip()


def meta_content(soup: BeautifulSoup, *, prop: str | None = None, name: str | None = None) -> str:
    if prop:
        tag = soup.find("meta", attrs={"property": prop})
    else:
        tag = soup.find("meta", attrs={"name": name})
    if not tag:
        return ""
    return decode_entities(tag.get("content") or "")


def parse_json_ld(soup: BeautifulSoup) -> list[dict[str, Any]]:
    nodes: list[dict[str, Any]] = []
    for script in soup.find_all("script", attrs={"type": "application/ld+json"}):
        raw = script.string or script.get_text() or ""
        raw = raw.strip()
        if not raw:
            continue
        try:
            data = json.loads(raw)
        except json.JSONDecodeError:
            continue
        if isinstance(data, dict) and "@graph" in data:
            nodes.extend([n for n in data["@graph"] if isinstance(n, dict)])
        elif isinstance(data, list):
            nodes.extend([n for n in data if isinstance(n, dict)])
        elif isinstance(data, dict):
            nodes.append(data)
    return nodes


def first_of_type(nodes: list[dict[str, Any]], type_name: str) -> dict[str, Any] | None:
    for node in nodes:
        t = node.get("@type")
        if t == type_name or (isinstance(t, list) and type_name in t):
            return node
    return None


def original_media_url(url: str) -> str:
    """Prefer origin uploads over Jetpack/Photon resized URLs."""
    if not url:
        return url
    parsed = urllib.parse.urlparse(url)
    host = parsed.netloc.lower()
    path = parsed.path

    # https://iN.wp.com/hiddenchinatravel.com/wp-content/uploads/...
    m = re.match(r"^i\d+\.wp\.com$", host)
    if m and "/wp-content/uploads/" in path:
        # path like /hiddenchinatravel.com/wp-content/uploads/...
        parts = path.lstrip("/").split("/", 1)
        if len(parts) == 2:
            return f"https://{parts[0]}/{parts[1]}"

    # Strip size query params; keep clean file URL
    clean = urllib.parse.urlunparse((parsed.scheme, parsed.netloc, path, "", "", ""))
    # Prefer non-scaled WP filenames: image-1024x768.jpg -> image.jpg when exists later via fallback
    return clean


def filename_from_url(url: str, fallback: str) -> str:
    path = urllib.parse.urlparse(url).path
    name = Path(path).name
    if not name or "." not in name:
        return fallback
    # Drop WP size suffixes: foo-1024x768.jpg -> keep as-is for uniqueness;
    # still sanitize
    name = re.sub(r"[^A-Za-z0-9._-]+", "-", name)
    return name.lower()


def yaml_escape(value: str) -> str:
    return value.replace("\\", "\\\\").replace('"', '\\"')


def ensure_dir(path: Path) -> None:
    path.mkdir(parents=True, exist_ok=True)


def download_file(url: str, dest: Path, dry_run: bool = False) -> bool:
    if dry_run:
        log(f"    [dry-run] download {url} -> {dest.relative_to(ROOT)}")
        return True
    ensure_dir(dest.parent)
    if dest.exists() and dest.stat().st_size > 0:
        return True
    candidates = [original_media_url(url), url]
    # Also try without -NNNxNNN size suffix
    orig = original_media_url(url)
    m = re.search(r"(.+)-\d+x\d+(\.[A-Za-z0-9]+)$", urllib.parse.urlparse(orig).path)
    if m:
        parsed = urllib.parse.urlparse(orig)
        full = f"{parsed.scheme}://{parsed.netloc}{m.group(1)}{m.group(2)}"
        candidates.insert(0, full)

    last_err: Exception | None = None
    seen: set[str] = set()
    for candidate in candidates:
        if not candidate or candidate in seen:
            continue
        seen.add(candidate)
        try:
            data = fetch(candidate)
            dest.write_bytes(data)
            return True
        except Exception as exc:  # noqa: BLE001
            last_err = exc
    log(f"    ! failed to download {url}: {last_err}")
    return False


def extract_entry_content(soup: BeautifulSoup) -> Tag | None:
    for selector in [
        "div.entry-content",
        "div.post-content",
        "article .entry-content",
        "div[itemprop='text']",
    ]:
        node = soup.select_one(selector)
        if node:
            return node
    article = soup.find("article")
    return article if isinstance(article, Tag) else None


def clean_content(content: Tag) -> None:
    """Remove non-article chrome inside the content node."""
    for sel in [
        "script",
        "style",
        "noscript",
        ".sharedaddy",
        ".jp-relatedposts",
        ".yarpp-related",
        ".adsbygoogle",
        ".ez-toc-container",
        "#toc_container",
    ]:
        for node in content.select(sel):
            node.decompose()

    # Drop empty paragraphs that are only whitespace / &nbsp;
    for p in list(content.find_all("p")):
        text = p.get_text(strip=True).replace("\xa0", "")
        if not text and not p.find("img"):
            p.decompose()


def rewrite_internal_href(href: str) -> str:
    if not href:
        return href
    parsed = urllib.parse.urlparse(href)
    if parsed.netloc and parsed.netloc.lower() not in SITE_HOSTS:
        return href
    path = parsed.path or "/"
    # Strip legacy /posts/ prefix — articles live at root paths in production.
    parts = [p for p in path.strip("/").split("/") if p]
    if parts and parts[0] == "posts":
        parts = parts[1:]
        path = "/" + "/".join(parts) if parts else "/"
    # Single-segment paths stay at root (match live site URLs).
    if len(parts) == 1:
        return f"/{parts[0]}" + (("?" + parsed.query) if parsed.query else "")
    if not parts:
        return "/"
    return path + (("?" + parsed.query) if parsed.query else "")


def localize_images(
    content: Tag,
    *,
    slug: str,
    media_dir: Path,
    dry_run: bool,
) -> dict[str, str]:
    """Download content images and rewrite src to local public paths. Returns url->local map."""
    mapping: dict[str, str] = {}
    used_names: set[str] = set()

    for img in content.find_all("img"):
        src = img.get("src") or img.get("data-src") or img.get("data-lazy-src") or ""
        if not src or src.startswith("data:"):
            continue
        src = decode_entities(src)
        full = urllib.parse.urljoin("https://hiddenchinatravel.com/", src)
        clean = original_media_url(full)
        base = filename_from_url(clean, f"image-{len(mapping)+1}.jpg")
        if base in used_names:
            stem = Path(base).stem
            suffix = Path(base).suffix or ".jpg"
            i = 2
            while f"{stem}-{i}{suffix}" in used_names:
                i += 1
            base = f"{stem}-{i}{suffix}"
        used_names.add(base)

        dest = media_dir / base
        ok = download_file(clean, dest, dry_run=dry_run)
        local = f"/assets/blog/{slug}/{base}"
        if ok:
            mapping[full] = local
            mapping[src] = local
            mapping[clean] = local
            img["src"] = local
            for attr in ("srcset", "data-src", "data-srcset", "data-lazy-src", "sizes"):
                if img.has_attr(attr):
                    del img[attr]
            # Prefer alt text
            if not img.get("alt"):
                img["alt"] = Path(base).stem.replace("-", " ")
        else:
            img["src"] = clean

    # Also rewrite <a href="...uploads..."> wrapping images
    for a in content.find_all("a", href=True):
        href = decode_entities(a["href"])
        if "/wp-content/uploads/" in href or "i0.wp.com" in href or "i1.wp.com" in href:
            # If points at an image we downloaded, point to local file
            clean = original_media_url(urllib.parse.urljoin("https://hiddenchinatravel.com/", href))
            for remote, local in mapping.items():
                if original_media_url(remote) == clean or remote == href:
                    a["href"] = local
                    break
        else:
            a["href"] = rewrite_internal_href(href)

    return mapping


def html_to_markdown(content_html: str) -> str:
    converter = html2text.HTML2Text()
    converter.ignore_links = False
    converter.ignore_images = False
    converter.ignore_emphasis = False
    converter.body_width = 0
    converter.unicode_snob = True
    converter.protect_links = False
    converter.mark_code = True
    converter.single_line_break = False
    md = converter.handle(content_html)
    # html2text sometimes emits [text](<url>) — normalize for remark
    md = re.sub(r"\]\(<([^>]+)>\)", r"](\1)", md)
    # Tidy excessive blank lines
    md = re.sub(r"\n{3,}", "\n\n", md).strip() + "\n"
    return md


def author_slug(name: str) -> str:
    s = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
    return s or "author"


def build_frontmatter(meta: dict[str, Any]) -> str:
    lines = ["---"]
    for key in [
        "title",
        "excerpt",
        "coverImage",
        "date",
        "dateModified",
        "author",
        "ogImage",
        "canonical",
        "keywords",
        "section",
        "sourceUrl",
    ]:
        if key not in meta or meta[key] in (None, "", []):
            continue
        val = meta[key]
        if key == "author" and isinstance(val, dict):
            lines.append("author:")
            lines.append(f'  name: "{yaml_escape(val["name"])}"')
            lines.append(f'  picture: "{yaml_escape(val["picture"])}"')
        elif key == "ogImage" and isinstance(val, dict):
            lines.append("ogImage:")
            lines.append(f'  url: "{yaml_escape(val["url"])}"')
        elif key == "keywords" and isinstance(val, list):
            lines.append("keywords:")
            for item in val:
                lines.append(f'  - "{yaml_escape(str(item))}"')
        else:
            lines.append(f'{key}: "{yaml_escape(str(val))}"')
    lines.append("---")
    lines.append("")
    return "\n".join(lines)


def import_post(url: str, *, dry_run: bool = False, force: bool = False) -> dict[str, Any]:
    url = url.rstrip("/") + "/"
    slug = slug_from_url(url)
    out_md = POSTS_DIR / f"{slug}.md"
    media_dir = MEDIA_ROOT / slug

    if out_md.exists() and not force and not dry_run:
        log(f"· skip existing {slug} (use --force to overwrite)")
        return {"slug": slug, "status": "skipped"}

    log(f"→ fetching {url}")
    html = fetch(url).decode("utf-8", errors="replace")
    soup = BeautifulSoup(html, "lxml")
    nodes = parse_json_ld(soup)
    article = first_of_type(nodes, "Article") or {}
    webpage = first_of_type(nodes, "WebPage") or {}
    person = first_of_type(nodes, "Person") or {}

    title = (
        meta_content(soup, prop="og:title")
        or decode_entities((webpage.get("name") or ""))
        or decode_entities((article.get("headline") or ""))
        or decode_entities(soup.title.get_text() if soup.title else "")
        or slug
    )
    # Prefer H1 if more specific than og:title chrome
    h1 = soup.select_one("h1.entry-title, h1.ast-single-post-title, article h1, h1")
    if h1:
        h1_text = decode_entities(h1.get_text(" ", strip=True))
        if h1_text:
            title = h1_text

    description = (
        meta_content(soup, name="description")
        or meta_content(soup, prop="og:description")
        or decode_entities(webpage.get("description") or "")
    )
    canonical_tag = soup.find("link", rel="canonical")
    canonical = canonical_tag.get("href") if canonical_tag else url
    if isinstance(canonical, list):
        canonical = canonical[0]
    canonical = decode_entities(canonical or url)

    date_published = (
        meta_content(soup, prop="article:published_time")
        or article.get("datePublished")
        or webpage.get("datePublished")
        or ""
    )
    date_modified = (
        meta_content(soup, prop="article:modified_time")
        or article.get("dateModified")
        or webpage.get("dateModified")
        or date_published
    )

    author_name = (
        meta_content(soup, name="twitter:data1")
        if meta_content(soup, name="twitter:label1").lower().startswith("written")
        else ""
    )
    if not author_name and isinstance(article.get("author"), dict):
        author_name = article["author"].get("name") or ""
    if not author_name:
        author_name = person.get("name") or "Hidden China Travel"
    author_name = decode_entities(author_name)

    keywords: list[str] = []
    raw_kw = article.get("keywords")
    if isinstance(raw_kw, list):
        keywords = [decode_entities(str(k)) for k in raw_kw]
    elif isinstance(raw_kw, str) and raw_kw.strip():
        keywords = [decode_entities(k.strip()) for k in raw_kw.split(",")]

    section = ""
    raw_section = article.get("articleSection")
    if isinstance(raw_section, list) and raw_section:
        section = decode_entities(str(raw_section[0]))
    elif isinstance(raw_section, str):
        section = decode_entities(raw_section)

    og_image = meta_content(soup, prop="og:image") or article.get("thumbnailUrl") or ""
    og_image = decode_entities(str(og_image))

    ensure_dir(media_dir)
    ensure_dir(AUTHORS_DIR)

    cover_local = ""
    if og_image:
        cover_name = filename_from_url(original_media_url(og_image), "cover.jpg")
        # Normalize cover filename
        ext = Path(cover_name).suffix or ".jpg"
        cover_name = f"cover{ext}"
        cover_path = media_dir / cover_name
        if download_file(og_image, cover_path, dry_run=dry_run):
            cover_local = f"/assets/blog/{slug}/{cover_name}"

    # Author avatar (shared)
    author_picture = "/assets/blog/authors/placeholder.png"
    avatar_url = ""
    img = person.get("image")
    if isinstance(img, dict):
        avatar_url = img.get("contentUrl") or img.get("url") or ""
    elif isinstance(img, str):
        avatar_url = img
    if avatar_url:
        # Prefer larger gravatar
        avatar_url = re.sub(r"([?&])s=\d+", r"\1s=256", avatar_url)
        if "s=" not in avatar_url and "gravatar.com" in avatar_url:
            avatar_url += ("&" if "?" in avatar_url else "?") + "s=256"
        a_name = f"{author_slug(author_name)}.jpg"
        a_path = AUTHORS_DIR / a_name
        if download_file(avatar_url, a_path, dry_run=dry_run):
            author_picture = f"/assets/blog/authors/{a_name}"

    content = extract_entry_content(soup)
    if not content:
        raise RuntimeError(f"No entry-content found for {url}")

    # Re-parse so cleanup stays scoped to this post's content tree
    parsed = BeautifulSoup(str(content), "lxml")
    content = parsed.select_one("div.entry-content, div.post-content, div[itemprop='text']")
    if content is None:
        content = parsed.body if parsed.body else parsed
    if content is None:
        raise RuntimeError(f"Failed to re-parse content for {url}")

    clean_content(content)
    localize_images(content, slug=slug, media_dir=media_dir, dry_run=dry_run)

    inner_html = content.decode_contents()
    markdown_body = html_to_markdown(inner_html)

    cover_fallback = "/assets/blog/authors/placeholder.png"
    cover_path_value = cover_local or cover_fallback
    fm = build_frontmatter(
        {
            "title": title,
            "excerpt": description,
            "coverImage": cover_path_value,
            "date": date_published,
            "dateModified": date_modified,
            "author": {"name": author_name, "picture": author_picture},
            "ogImage": {"url": cover_path_value},
            "canonical": canonical,
            "keywords": keywords,
            "section": section,
            "sourceUrl": url,
        }
    )

    document = fm + markdown_body
    if dry_run:
        log(f"  [dry-run] would write {out_md.relative_to(ROOT)} ({len(document)} chars)")
    else:
        ensure_dir(POSTS_DIR)
        out_md.write_text(document, encoding="utf-8")
        log(f"  ✓ wrote {out_md.relative_to(ROOT)}")

    return {
        "slug": slug,
        "status": "imported",
        "title": title,
        "images": len(list(media_dir.glob("*"))) if media_dir.exists() else 0,
    }


def read_urls(args: argparse.Namespace) -> list[str]:
    urls: list[str] = []
    if args.urls_file:
        text = Path(args.urls_file).read_text(encoding="utf-8")
        for line in text.splitlines():
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            urls.append(line)
    urls.extend(args.urls)
    # de-dupe preserve order
    seen: set[str] = set()
    out: list[str] = []
    for u in urls:
        key = u.rstrip("/")
        if key not in seen:
            seen.add(key)
            out.append(u)
    return out


def main() -> int:
    parser = argparse.ArgumentParser(description="Import WordPress posts to _posts Markdown")
    parser.add_argument("urls", nargs="*", help="Post URLs")
    parser.add_argument(
        "--urls",
        dest="urls_file",
        default=str(DEFAULT_URLS_FILE),
        help=f"URL list file (default: {DEFAULT_URLS_FILE.name})",
    )
    parser.add_argument("--dry-run", action="store_true", help="Fetch & parse only; do not write")
    parser.add_argument("--force", action="store_true", help="Overwrite existing markdown/media")
    parser.add_argument("--limit", type=int, default=0, help="Only import first N URLs")
    parser.add_argument("--delay", type=float, default=0.8, help="Delay between requests (seconds)")
    args = parser.parse_args()

    # If user passes CLI URLs only, don't also force-read default file unless --urls given explicitly
    if args.urls and args.urls_file == str(DEFAULT_URLS_FILE):
        # Still allow both; prefer combining. To use CLI-only: pass --urls /dev/null
        pass

    urls = read_urls(args)
    if not urls:
        log("No URLs provided. Edit scripts/wp-urls.txt or pass URLs as arguments.")
        return 1
    if args.limit and args.limit > 0:
        urls = urls[: args.limit]

    log(f"Importing {len(urls)} post(s) → {POSTS_DIR.relative_to(ROOT)} / {MEDIA_ROOT.relative_to(ROOT)}")
    results = []
    failures = 0
    for i, url in enumerate(urls):
        try:
            results.append(import_post(url, dry_run=args.dry_run, force=args.force))
        except Exception as exc:  # noqa: BLE001
            failures += 1
            log(f"  ✗ {url}: {exc}")
            results.append({"slug": slug_from_url(url), "status": "error", "error": str(exc)})
        if i < len(urls) - 1 and args.delay > 0:
            time.sleep(args.delay)

    imported = sum(1 for r in results if r.get("status") == "imported")
    skipped = sum(1 for r in results if r.get("status") == "skipped")
    log(f"\nDone. imported={imported} skipped={skipped} failed={failures}")
    return 1 if failures else 0


if __name__ == "__main__":
    sys.exit(main())
