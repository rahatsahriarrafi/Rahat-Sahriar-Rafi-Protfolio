import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const FORBIDDEN = ["241-35-517"];
const REQUIRED_SNIPPETS = [
  "Rahat Sahriar Rafi",
  "rahatsahriarrafi@gmail.com",
  "https://github.com/rahatsahriarrafi",
  "Team NullX",
  "Team Forensic Framework",
];

const SCAN_ROOTS = ["src", "public", "README.md"];

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".next" || name === ".git") continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...walk(p));
    else if (/\.(ts|tsx|js|mjs|md|css|json|html)$/.test(name)) out.push(p);
  }
  return out;
}

const files = SCAN_ROOTS.flatMap((rel) => {
  const p = join(ROOT, rel);
  try {
    return statSync(p).isDirectory() ? walk(p) : [p];
  } catch {
    return [];
  }
});

let blob = "";
for (const f of files) blob += readFileSync(f, "utf8") + "\n";

for (const bad of FORBIDDEN) {
  if (blob.includes(bad)) {
    console.error(`FAIL: forbidden string present: ${bad}`);
    process.exit(1);
  }
}

for (const snip of REQUIRED_SNIPPETS) {
  if (!blob.includes(snip)) {
    console.error(`FAIL: missing required content: ${snip}`);
    process.exit(1);
  }
}

console.log("OK: content check passed");
