import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const docsDir = path.join(root, "docs");
const linkPattern = /\[[^\]]+\]\(([^)#]+)(?:#[^)]+)?\)/g;
const errors = [];

function resolveInternalLink(fromFile, href) {
  const clean = href.split("#")[0].trim();
  if (
    !clean ||
    clean.includes("://") ||
    clean.startsWith("mailto:") ||
    clean.startsWith("#")
  ) {
    return true;
  }

  if (clean.startsWith("/")) {
    const publicPath = path.join(docsDir, "public", clean.slice(1));
    if (fs.existsSync(publicPath)) return true;

    const withoutSlash = clean.slice(1);
    const candidates = [
      path.join(docsDir, `${withoutSlash}.md`),
      path.join(docsDir, withoutSlash, "index.md"),
      path.join(docsDir, withoutSlash),
    ];
    return candidates.find((candidate) => fs.existsSync(candidate)) ?? false;
  }

  const relativeCandidates = [
    path.resolve(path.dirname(fromFile), clean),
    `${path.resolve(path.dirname(fromFile), clean)}.md`,
  ];
  return relativeCandidates.some((candidate) => fs.existsSync(candidate));
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name === "public") continue;
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (entry.name.endsWith(".md")) checkFile(fullPath);
  }
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  let match;
  while ((match = linkPattern.exec(content)) !== null) {
    const href = match[1];
    if (!resolveInternalLink(filePath, href)) {
      errors.push(`${path.relative(root, filePath)} → ${href}`);
    }
  }
}

walk(docsDir);

if (errors.length > 0) {
  console.error("Broken internal links found:\n");
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`Link check passed (${docsDir})`);
