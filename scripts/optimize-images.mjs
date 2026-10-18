#!/usr/bin/env node
/**
 * Build-time image optimizer.
 *
 * Verkleint te grote afbeeldingen in /public zodat de runtime-server géén
 * afbeeldingen hoeft te resizen (geen sharp op runtime → geen geheugenpieken
 * op een kleine 1GB server). Draait vóór `next build`.
 */
import { readdir, stat, writeFile, unlink } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const PUBLIC_DIR = join(process.cwd(), "public");
const MAX_WIDTH = 1600; // maximale breedte in px
const MAX_HEIGHT = 1600; // maximale hoogte in px (voor staande foto's)
const QUALITY = 80; // webp kwaliteit

const IMAGE_EXTENSIONS = new Set([".webp", ".jpg", ".jpeg", ".png"]);

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(fullPath);
    else yield fullPath;
  }
}

let count = 0;
let savedBytes = 0;

for await (const file of walk(PUBLIC_DIR)) {
  const ext = extname(file).toLowerCase();
  if (!IMAGE_EXTENSIONS.has(ext)) continue;

  const relative = file.replace(PUBLIC_DIR + "/", "");

  try {
    const metadata = await sharp(file).metadata();
    if (!metadata || !metadata.width) continue;

    const { width, height } = metadata;
    // Al klein én webp? Niets te doen.
    if (width <= MAX_WIDTH && height <= MAX_HEIGHT && ext === ".webp") continue;

    const before = (await stat(file)).size;

    let pipeline = sharp(file).rotate(); // EXIF-orientatie respecteren
    if (width > MAX_WIDTH || height > MAX_HEIGHT) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, height: MAX_HEIGHT, fit: "inside", withoutEnlargement: true });
    }
    const buffer = await pipeline.webp({ quality: QUALITY }).toBuffer();

    // Alleen overschrijven als het resultaat daadwerkelijk kleiner is.
    if (buffer.length >= before) continue;

    const webpPath = file.replace(ext, ".webp");
    await writeFile(webpPath, buffer);
    if (webpPath !== file) await unlink(file);

    const after = buffer.length;
    count += 1;
    savedBytes += before - after;
    console.log(`  ${relative}  ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`);
  } catch (err) {
    console.warn(`  [skip] ${relative}: ${err.message}`);
  }
}

console.log(`\nOptimized ${count} image(s), saved ${(savedBytes / 1024 / 1024).toFixed(1)} MB total.`);
