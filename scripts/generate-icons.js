const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceImage = path.join(__dirname, '../public/images/logo.png');
const appDir = path.join(__dirname, '../src/app');
const publicDir = path.join(__dirname, '../public');

async function generateIcons() {
  try {
    // Read source image
    const image = sharp(sourceImage);

    // Generate favicon.ico (32x32)
    await image
      .clone()
      .resize(32, 32)
      .toFile(path.join(appDir, 'favicon.ico'));
    console.log('✓ Generated favicon.ico');

    // Generate icon.png (192x192 for Next.js)
    await image
      .clone()
      .resize(192, 192)
      .toFile(path.join(appDir, 'icon.png'));
    console.log('✓ Generated icon.png');

    // Generate apple-icon.png (180x180)
    await image
      .clone()
      .resize(180, 180)
      .toFile(path.join(appDir, 'apple-icon.png'));
    console.log('✓ Generated apple-icon.png');

    // Generate PWA icons in public folder
    await image
      .clone()
      .resize(192, 192)
      .toFile(path.join(publicDir, 'icon-192.png'));
    console.log('✓ Generated icon-192.png');

    await image
      .clone()
      .resize(512, 512)
      .toFile(path.join(publicDir, 'icon-512.png'));
    console.log('✓ Generated icon-512.png');

    console.log('\n✅ All icons generated successfully!');
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
