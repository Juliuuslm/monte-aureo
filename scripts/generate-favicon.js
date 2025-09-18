const sharp = require('sharp');
const path = require('path');

async function generateFavicons() {
  const logoPath = path.join(__dirname, '../public/monte-aureo-logo.png');
  const publicPath = path.join(__dirname, '../public');

  try {
    // Genera favicon.ico (32x32)
    await sharp(logoPath)
      .resize(32, 32)
      .png()
      .toFile(path.join(publicPath, 'favicon.ico'));

    // Genera apple-touch-icon (180x180)
    await sharp(logoPath)
      .resize(180, 180)
      .png()
      .toFile(path.join(publicPath, 'apple-touch-icon.png'));

    // Genera icon-192 para PWA
    await sharp(logoPath)
      .resize(192, 192)
      .png()
      .toFile(path.join(publicPath, 'icon-192.png'));

    // Genera icon-512 para PWA
    await sharp(logoPath)
      .resize(512, 512)
      .png()
      .toFile(path.join(publicPath, 'icon-512.png'));

    console.log('✅ Favicons generados exitosamente:');
    console.log('  - favicon.ico (32x32)');
    console.log('  - apple-touch-icon.png (180x180)');
    console.log('  - icon-192.png (192x192)');
    console.log('  - icon-512.png (512x512)');

  } catch (error) {
    console.error('❌ Error generando favicons:', error);
  }
}

generateFavicons();