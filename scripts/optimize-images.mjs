// One-off image optimizer: converts the heavy hero/flower PNGs to WebP and
// generates a small favicon. Run with `node scripts/optimize-images.mjs`.
//
// - hero.png (2 MB, full-bleed background) -> hero.webp at native resolution
// - flowerN.PNG (1080x1350, shown at <=200px) -> flowerN.webp resized to 400px
//   wide (2x the largest on-screen size), alpha preserved
// - flower1.PNG -> favicon.png (64x64) so the favicon stops pulling a 285 KB file
//
// WebP q80 is visually identical for these soft photos/decor; the decorative
// flowers are downscaled because they never render larger than 200px.
import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const FLOWERS_DIR = path.resolve("public/flowers");
const PUBLIC_DIR = path.resolve("public");

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

async function fileSize(p) {
  return (await stat(p)).size;
}

async function run() {
  // 1) hero background -> webp (keep native 1536x1024)
  const heroIn = path.join(FLOWERS_DIR, "hero.png");
  const heroOut = path.join(FLOWERS_DIR, "hero.webp");
  await sharp(heroIn).webp({ quality: 80 }).toFile(heroOut);
  console.log(`hero.png ${kb(await fileSize(heroIn))} -> hero.webp ${kb(await fileSize(heroOut))}`);

  // 2) decorative flowers -> resized webp (alpha kept)
  const files = (await readdir(FLOWERS_DIR)).filter((f) => /^flower\d+\.png$/i.test(f));
  for (const f of files) {
    const inPath = path.join(FLOWERS_DIR, f);
    const outName = f.replace(/\.png$/i, ".webp");
    const outPath = path.join(FLOWERS_DIR, outName);
    await sharp(inPath)
      .resize({ width: 400, withoutEnlargement: true })
      .webp({ quality: 80, alphaQuality: 90 })
      .toFile(outPath);
    console.log(`${f} ${kb(await fileSize(inPath))} -> ${outName} ${kb(await fileSize(outPath))}`);
  }

  // 3) small favicon from flower1
  const favIn = path.join(FLOWERS_DIR, "flower1.PNG");
  const favOut = path.join(PUBLIC_DIR, "favicon.png");
  await sharp(favIn).resize(64, 64, { fit: "cover" }).png({ compressionLevel: 9 }).toFile(favOut);
  console.log(`favicon.png ${kb(await fileSize(favOut))}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
