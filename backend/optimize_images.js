import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '../frontend/public');

const images = [
  'A_sleek_darkthemed_2k_202601132246.jpeg',
  'A_sleek_darkthemed_2k_202601132254.jpeg',
  'A_sleek_darkthemed_2k_202601132317.jpeg',
  'A_sleek_darkthemed_2k_202601132319.jpeg',
  'A_sleek_darkthemed_2k_202601132321.jpeg',
  'A_sleek_darkthemed_2k_202601132323.jpeg',
  'Professional_uiux_case_2k_202601132349.jpeg',
  'A_sleek_lightthemed_2k_202601140004.jpeg',
  'A_sleek_lightthemed_2k_202601140008.jpeg',
  'A_sleek_lightthemed_2k_202601140010.jpeg',
  'A_sleek_lightthemed_2k_202601140011.jpeg',
  'A_sleek_lightthemed_2k_202601140015.jpeg',
  'A_professional_headshot_2k_202601140025.jpeg',
  'Premium_uiux_project_2k_202601141102.jpeg',
  'A_premium_hyperrealistic_2k_202601141108.jpeg',
  'IMG_20260115_232743.jpg',
  'IMG_20260115_232801.jpg'
];

async function optimizeImages() {
  console.log('Starting image optimization...');

  for (const img of images) {
    const inputPath = path.join(publicDir, img);
    const filenameNoExt = path.parse(img).name;

    // Check if file exists
    if (!fs.existsSync(inputPath)) {
      console.warn(`File not found: ${img}`);
      continue;
    }

    try {
      // Create 800w version (WebP)
      await sharp(inputPath)
        .resize(800)
        .webp({ quality: 80 })
        .toFile(path.join(publicDir, `${filenameNoExt}-800.webp`));
      
      console.log(`Generated ${filenameNoExt}-800.webp`);

      // Create 400w version (WebP)
      await sharp(inputPath)
        .resize(400)
        .webp({ quality: 80 })
        .toFile(path.join(publicDir, `${filenameNoExt}-400.webp`));

      console.log(`Generated ${filenameNoExt}-400.webp`);

    } catch (err) {
      console.error(`Error processing ${img}:`, err);
    }
  }

  console.log('Optimization complete.');
}

optimizeImages();
