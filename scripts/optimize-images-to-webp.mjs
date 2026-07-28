#!/usr/bin/env node
/**
 * Convert JPG/PNG → WebP using Squoosh codecs (same engine family as https://squoosh.app/).
 *
 * Note: squoosh.app itself is a browser UI and cannot be driven remotely.
 * This script uses the maintained CLI fork `@frostoven/squoosh-cli` which runs
 * the Squoosh WebAssembly codecs locally.
 *
 * Examples:
 *   npm run images:webp:dry
 *   npm run images:webp
 *   npm run images:webp -- --delete-originals
 *   npm run images:webp -- --dir public/assets/blog/best-vpn-for-china
 *   npm run images:webp -- --max-width 2000 --quality 80
 */

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const DEFAULT_DIRS = ["public/assets", "public/brand"];
const SKIP_DIR_NAMES = new Set(["favicon", "node_modules", ".git"]);
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png"]);
const REWRITE_EXT = new Set([".md", ".mdx", ".ts", ".tsx", ".js", ".jsx", ".json", ".css"]);

function parseArgs(argv) {
  const opts = {
    dirs: [],
    quality: 80,
    maxWidth: 0,
    dryRun: false,
    rewrite: true,
    deleteOriginals: false,
    minBytes: 8 * 1024,
    concurrency: 2,
    force: false,
  };

  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--dry-run") opts.dryRun = true;
    else if (a === "--no-rewrite") opts.rewrite = false;
    else if (a === "--delete-originals") opts.deleteOriginals = true;
    else if (a === "--force") opts.force = true;
    else if (a === "--dir" && argv[i + 1]) opts.dirs.push(argv[++i]);
    else if (a === "--quality" && argv[i + 1]) opts.quality = Number(argv[++i]);
    else if (a === "--max-width" && argv[i + 1]) opts.maxWidth = Number(argv[++i]);
    else if (a === "--min-bytes" && argv[i + 1]) opts.minBytes = Number(argv[++i]);
    else if (a === "--concurrency" && argv[i + 1]) opts.concurrency = Number(argv[++i]);
    else if (a === "--help" || a === "-h") opts.help = true;
    else {
      console.error(`Unknown arg: ${a}`);
      process.exit(1);
    }
  }

  if (!opts.dirs.length) opts.dirs = DEFAULT_DIRS;
  return opts;
}

function printHelp() {
  console.log(`Convert JPG/PNG to WebP via Squoosh CLI codecs.

Usage:
  node scripts/optimize-images-to-webp.mjs [options]

Options:
  --dir <path>           Scan directory (repeatable). Default: public/assets, public/brand
  --quality <n>          WebP quality 0–100 (default: 80)
  --max-width <px>       Resize longest side before encode (0 = no resize)
  --min-bytes <n>        Skip files smaller than this (default: 8192)
  --concurrency <n>      Squoosh parallel files (default: 2)
  --dry-run              List actions only
  --no-rewrite           Do not update .md / source references
  --delete-originals     Remove JPG/PNG after a smaller WebP is written
  --force                Re-encode even if .webp already exists
  -h, --help             Show help
`);
}

function walkImages(absDir, out = []) {
  if (!fs.existsSync(absDir)) return out;
  for (const name of fs.readdirSync(absDir)) {
    if (SKIP_DIR_NAMES.has(name)) continue;
    const full = path.join(absDir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walkImages(full, out);
    else if (st.isFile() && IMAGE_EXT.has(path.extname(name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

function walkRewriteFiles(absDir, out = []) {
  if (!fs.existsSync(absDir)) return out;
  for (const name of fs.readdirSync(absDir)) {
    if (SKIP_DIR_NAMES.has(name) || name === "public") continue;
    const full = path.join(absDir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walkRewriteFiles(full, out);
    else if (st.isFile() && REWRITE_EXT.has(path.extname(name).toLowerCase())) {
      out.push(full);
    }
  }
  return out;
}

function toPublicUrl(absPath) {
  const rel = path.relative(path.join(ROOT, "public"), absPath).split(path.sep).join("/");
  return `/${rel}`;
}

function webpPathFor(src) {
  const ext = path.extname(src);
  return src.slice(0, -ext.length) + ".webp";
}

function formatBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

function imageSize(srcAbs) {
  const result = spawnSync(
    "sips",
    ["-g", "pixelWidth", "-g", "pixelHeight", srcAbs],
    { encoding: "utf8" },
  );
  if (result.status !== 0) return null;
  const width = Number(/pixelWidth:\s*(\d+)/.exec(result.stdout || "")?.[1]);
  const height = Number(/pixelHeight:\s*(\d+)/.exec(result.stdout || "")?.[1]);
  if (!width || !height) return null;
  return { width, height };
}

function encodeOne(srcAbs, opts) {
  const outAbs = webpPathFor(srcAbs);
  const outDir = path.dirname(srcAbs);
  const webpConfig = JSON.stringify({ quality: opts.quality });

  const args = [
    "--yes",
    "@frostoven/squoosh-cli",
    `--webp=${webpConfig}`,
    `-d`,
    outDir,
    `-c`,
    String(opts.concurrency),
  ];

  if (opts.maxWidth > 0) {
    const size = imageSize(srcAbs);
    if (size) {
      const longest = Math.max(size.width, size.height);
      if (longest > opts.maxWidth) {
        const scale = opts.maxWidth / longest;
        // Explicit target size keeps aspect ratio. Never pass a square box
        // (width=height=maxWidth) — that previously crushed screenshots to 1:1.
        args.push(
          `--resize=${JSON.stringify({
            enabled: true,
            width: Math.max(1, Math.round(size.width * scale)),
            height: Math.max(1, Math.round(size.height * scale)),
            method: "lanczos3",
            fitMethod: "stretch",
            premultiply: true,
            linearRGB: true,
          })}`,
        );
      }
    } else {
      // Fallback: constrain width only (preserves ratio better than a square box).
      args.push(
        `--resize=${JSON.stringify({
          enabled: true,
          width: opts.maxWidth,
          method: "lanczos3",
          fitMethod: "contain",
          premultiply: true,
          linearRGB: true,
        })}`,
      );
    }
  }

  args.push(srcAbs);

  const result = spawnSync("npx", args, {
    cwd: ROOT,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    env: process.env,
  });

  if (result.status !== 0) {
    return {
      ok: false,
      error: (result.stderr || result.stdout || `exit ${result.status}`).trim(),
    };
  }

  if (!fs.existsSync(outAbs)) {
    return { ok: false, error: `WebP not written: ${outAbs}` };
  }

  return { ok: true, outAbs };
}

function rewriteReferences(replacements) {
  if (!replacements.length) return 0;

  const roots = ["_posts", "content", "src", "scripts"].map((d) => path.join(ROOT, d));
  const files = roots.flatMap((d) => walkRewriteFiles(d));
  let changedFiles = 0;

  for (const file of files) {
    let text = fs.readFileSync(file, "utf8");
    let next = text;
    for (const { from, to } of replacements) {
      if (next.includes(from)) next = next.split(from).join(to);
    }
    if (next !== text) {
      fs.writeFileSync(file, next);
      changedFiles += 1;
    }
  }

  return changedFiles;
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help) {
    printHelp();
    process.exit(0);
  }

  const candidates = opts.dirs
    .map((d) => path.resolve(ROOT, d))
    .flatMap((d) => walkImages(d))
    .sort();

  const jobs = [];
  for (const src of candidates) {
    const size = fs.statSync(src).size;
    if (size < opts.minBytes) continue;

    const out = webpPathFor(src);
    if (!opts.force && fs.existsSync(out)) {
      const outSize = fs.statSync(out).size;
      if (outSize > 0 && outSize <= size) {
        jobs.push({ src, skip: true, reason: "webp exists and is not larger" });
        continue;
      }
    }

    jobs.push({ src, skip: false, size });
  }

  console.log(
    `Found ${candidates.length} JPG/PNG · ${jobs.filter((j) => !j.skip).length} to encode · ${jobs.filter((j) => j.skip).length} skipped`,
  );
  console.log(
    `Codec: Squoosh WebP (quality=${opts.quality}${opts.maxWidth ? `, maxWidth=${opts.maxWidth}` : ""})`,
  );

  const replacements = [];
  let encoded = 0;
  let failed = 0;
  let saved = 0;
  let deleted = 0;

  for (const job of jobs) {
    const rel = path.relative(ROOT, job.src);
    if (job.skip) {
      console.log(`· skip  ${rel} (${job.reason})`);
      // Still rewrite refs if webp already present
      const out = webpPathFor(job.src);
      if (fs.existsSync(out)) {
        replacements.push({
          from: toPublicUrl(job.src),
          to: toPublicUrl(out),
        });
      }
      continue;
    }

    if (opts.dryRun) {
      console.log(`→ would encode ${rel} (${formatBytes(job.size)})`);
      continue;
    }

    process.stdout.write(`→ encode ${rel} (${formatBytes(job.size)}) … `);
    const result = encodeOne(job.src, opts);
    if (!result.ok) {
      failed += 1;
      console.log(`FAIL\n  ${result.error}`);
      continue;
    }

    const outSize = fs.statSync(result.outAbs).size;
    const delta = job.size - outSize;
    saved += Math.max(delta, 0);
    encoded += 1;
    console.log(
      `ok → ${path.basename(result.outAbs)} (${formatBytes(outSize)}, ${delta >= 0 ? "−" : "+"}${formatBytes(Math.abs(delta))})`,
    );

    replacements.push({
      from: toPublicUrl(job.src),
      to: toPublicUrl(result.outAbs),
    });

    if (opts.deleteOriginals && outSize > 0 && outSize < job.size) {
      fs.unlinkSync(job.src);
      deleted += 1;
    } else if (opts.deleteOriginals && outSize >= job.size) {
      console.log(`  keep original (webp not smaller)`);
    }
  }

  let rewritten = 0;
  if (!opts.dryRun && opts.rewrite && replacements.length) {
    // de-dupe
    const map = new Map(replacements.map((r) => [r.from, r.to]));
    rewritten = rewriteReferences([...map.entries()].map(([from, to]) => ({ from, to })));
  }

  console.log("\nDone.");
  if (opts.dryRun) {
    console.log("Dry run only — no files written.");
  } else {
    console.log(`Encoded: ${encoded}`);
    console.log(`Failed:  ${failed}`);
    console.log(`Saved:   ${formatBytes(saved)}`);
    console.log(`Deleted originals: ${deleted}`);
    console.log(`Files with updated refs: ${rewritten}`);
  }
}

main();
