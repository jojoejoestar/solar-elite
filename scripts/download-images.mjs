import { mkdir, writeFile, access } from "node:fs/promises";
import { join } from "node:path";

/** Distinct, context-appropriate solar imagery — run with --force to refresh */
const images = {
  "hero-solar.jpg": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85",
  "tech-panel-detail.jpg": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=85",
  "tech-installation.jpg": "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&q=85",
  "avatar-ricardo.jpg": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=85",
  "avatar-fernanda.jpg": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=85",
  "avatar-paulo.jpg": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&q=85",
  "project-ricardo.jpg": "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1024&q=85",
  "project-fernanda.jpg": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1024&q=85",
  "project-paulo.jpg": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1024&q=85",
};

const force = process.argv.includes("--force");
const dir = join(process.cwd(), "public", "images");
await mkdir(dir, { recursive: true });

for (const [name, url] of Object.entries(images)) {
  const filePath = join(dir, name);

  if (!force) {
    try {
      await access(filePath);
      console.log(`Skip ${name} (already exists)`);
      continue;
    } catch {
      // download
    }
  }

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${name}: ${res.status}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(filePath, buffer);
  console.log(`${force ? "Updated" : "Saved"} ${name}`);
}

console.log("Images ready.");
