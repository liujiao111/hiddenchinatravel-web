#!/usr/bin/env python3
"""
Scrape a live WordPress hub page into a draft content/hubs/{slug}.md skeleton.

Usage:
  python3 scripts/import-wordpress-hub.py https://hiddenchinatravel.com/payments-in-china/
  python3 scripts/import-wordpress-hub.py --force https://hiddenchinatravel.com/internet-in-china/

The draft captures SEO meta + rough section text. Reshape into the Hub frontmatter
schema (subtopics, faqs, decisionGuide, etc.) before shipping.
"""

from __future__ import annotations

import argparse
import html as html_lib
import json
import re
import sys
import urllib.request
from pathlib import Path

from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[1]
HUBS_DIR = ROOT / "content" / "hubs"
USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
)


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(req, timeout=45) as resp:
        return resp.read().decode("utf-8", errors="replace")


def decode(text: str) -> str:
    return html_lib.unescape(text or "").strip()


def meta(soup: BeautifulSoup, *, prop: str | None = None, name: str | None = None) -> str:
    tag = soup.find("meta", attrs={"property": prop} if prop else {"name": name})
    return decode(tag.get("content") or "") if tag else ""


def yaml_escape(value: str) -> str:
    return value.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n")


def slug_from_url(url: str) -> str:
    return url.rstrip("/").split("/")[-1]


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("url")
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()

    url = args.url.rstrip("/") + "/"
    slug = slug_from_url(url)
    out = HUBS_DIR / f"{slug}.md"
    if out.exists() and not args.force:
        print(f"exists: {out} (use --force)")
        return 1

    html = fetch(url)
    soup = BeautifulSoup(html, "lxml")

    title = meta(soup, prop="og:title") or decode(soup.title.get_text() if soup.title else "")
    h1 = soup.select_one("h1")
    h1_text = decode(h1.get_text(" ", strip=True)) if h1 else title
    description = meta(soup, name="description") or meta(soup, prop="og:description")
    canonical_tag = soup.find("link", rel="canonical")
    canonical = decode(canonical_tag.get("href") if canonical_tag else f"/{slug}")
    if canonical.startswith("http"):
        from urllib.parse import urlparse

        canonical = urlparse(canonical).path.rstrip("/") or f"/{slug}"

    # Collect FAQ-ish dt/dd or heading+p pairs loosely for draft notes
    faqs_draft = []
    for details in soup.select("details"):
        q = details.find(["summary", "h3", "h4"])
        a = details.find("p")
        if q and a:
            faqs_draft.append((decode(q.get_text()), decode(a.get_text())))

    links = []
    for a in soup.select("a[href]"):
        href = a.get("href") or ""
        if "hiddenchinatravel.com" in href or href.startswith("/"):
            text = decode(a.get_text(" ", strip=True))
            if text and len(text) > 8:
                links.append((text[:120], href))

    body_notes = [
        "# Draft notes from scrape — reshape into Hub frontmatter schema.",
        "",
        f"Source: {url}",
        f"H1: {h1_text}",
        "",
        "## Candidate internal links",
    ]
    seen = set()
    for text, href in links[:40]:
        key = (text, href)
        if key in seen:
            continue
        seen.add(key)
        body_notes.append(f"- [{text}]({href})")

    if faqs_draft:
        body_notes.append("")
        body_notes.append("## FAQ candidates")
        for q, a in faqs_draft[:12]:
            body_notes.append(f"- Q: {q}")
            body_notes.append(f"  A: {a[:240]}")

    fm = f'''---
type: hub
title: "{yaml_escape(h1_text)}"
slug: {slug}
metaDescription: "{yaml_escape(description)}"
canonical: {canonical}
eyebrow: ""
heroAnswer: ""
description: "{yaml_escape(description)}"
dateModified: ""
keywords: []
subtopics: []
toolCTA: []
faqs: []
relatedHubs: []
---

{chr(10).join(body_notes)}
'''

    HUBS_DIR.mkdir(parents=True, exist_ok=True)
    out.write_text(fm, encoding="utf-8")
    print(f"wrote {out.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
