const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const imagesDir = path.join(__dirname, '../public/images');
  const testimonialsDir = path.join(imagesDir, 'testimonials');

  console.log('🚀 Iniciando optimización de imágenes...\n');

  // Función para optimizar una imagen
  async function optimizeImage(inputPath, outputPath, options = {}) {
    try {
      const info = await sharp(inputPath)
        .resize(options.width, options.height, {
          fit: 'cover',
          position: 'center'
        })
        .jpeg({
          quality: options.quality || 85,
          progressive: true,
          mozjpeg: true
        })
        .toFile(outputPath);

      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = info.size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

      console.log(`✅ ${path.basename(inputPath)}: ${originalSize} → ${optimizedSize} bytes (-${savings}%)`);
      return info;
    } catch (error) {
      console.error(`❌ Error optimizando ${inputPath}:`, error.message);
    }
  }

  // Optimizar imágenes de testimonios
  console.log('📸 Optimizando imágenes de testimonios...');
  const testimonialFiles = fs.readdirSync(testimonialsDir).filter(file => file.endsWith('.jpg'));

  for (const file of testimonialFiles) {
    const inputPath = path.join(testimonialsDir, file);
    const outputPath = path.join(testimonialsDir, `optimized-${file}`);

    await optimizeImage(inputPath, outputPath, {
      width: 400,
      height: 400,
      quality: 90
    });
  }

  // Optimizar logo principal
  console.log('\n🎨 Optimizando logo principal...');
  const logoPath = path.join(__dirname, '../public/monte-aureo-logo.png');
  const optimizedLogoPath = path.join(__dirname, '../public/monte-aureo-logo-optimized.png');

  try {
    const logoInfo = await sharp(logoPath)
      .png({
        quality: 90,
        progressive: true,
        compressionLevel: 9
      })
      .toFile(optimizedLogoPath);

    const originalSize = fs.statSync(logoPath).size;
    const optimizedSize = logoInfo.size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

    console.log(`✅ Logo: ${originalSize} → ${optimizedSize} bytes (-${savings}%)`);
  } catch (error) {
    console.error('❌ Error optimizando logo:', error.message);
  }

  // Crear versiones WebP de imágenes principales
  console.log('\n🌐 Generando versiones WebP...');
  const mainImages = [
    'hero-background.jpg',
    'cta-background.jpg',
    'mapa-sierra-gorda.jpg'
  ];

  for (const image of mainImages) {
    const inputPath = path.join(imagesDir, image);
    const outputPath = path.join(imagesDir, image.replace('.jpg', '.webp'));

    if (fs.existsSync(inputPath)) {
      try {
        await sharp(inputPath)
          .webp({ quality: 85, effort: 6 })
          .toFile(outputPath);

        console.log(`✅ ${image} → ${path.basename(outputPath)}`);
      } catch (error) {
        console.error(`❌ Error creando WebP para ${image}:`, error.message);
      }
    }
  }

  console.log('\n🎉 Optimización completada!');
  console.log('\n📋 Recomendaciones:');
  console.log('   • Reemplaza los archivos originales con las versiones optimizadas');
  console.log('   • Usa las versiones WebP para mejor performance');
  console.log('   • Considera usar LazyImage component para lazy loading');
}

optimizeImages();