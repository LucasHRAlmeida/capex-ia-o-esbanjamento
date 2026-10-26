import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { renderRobots, renderSitemap } from "../src/lib/sitemap.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pub = join(root, "public");

await mkdir(pub, { recursive: true });
await writeFile(join(pub, "sitemap.xml"), renderSitemap());
await writeFile(join(pub, "robots.txt"), renderRobots());
