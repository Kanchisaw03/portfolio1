import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  inputDir: path.join(__dirname, '../public/assets'),
  outputDir: path.join(__dirname, '../public/assets'),
  quality: 85, // WebP quality (1-100)
  supportedFormats: ['.jpg', '.jpeg', '.png'],
  skipExisting: true, // Skip if WebP already exists
};

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m',
};

async function convertImageToWebP(inputPath, outputPath) {
  try {
    const stats = fs.statSync(inputPath);
    const originalSize = stats.size;

    await sharp(inputPath)
      .webp({ quality: CONFIG.quality })
      .toFile(outputPath);

    const webpStats = fs.statSync(outputPath);
    const webpSize = webpStats.size;
    const savings = ((1 - webpSize / originalSize) * 100).toFixed(1);

    return {
      success: true,
      originalSize,
      webpSize,
      savings,
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

async function processDirectory() {
  console.log(`${colors.blue}🖼️  Image to WebP Converter${colors.reset}\n`);
  console.log(`Input Directory: ${CONFIG.inputDir}`);
  console.log(`Output Directory: ${CONFIG.outputDir}`);
  console.log(`Quality: ${CONFIG.quality}%\n`);

  // Check if input directory exists
  if (!fs.existsSync(CONFIG.inputDir)) {
    console.error(`${colors.red}❌ Input directory not found: ${CONFIG.inputDir}${colors.reset}`);
    process.exit(1);
  }

  // Get all files in directory
  const files = fs.readdirSync(CONFIG.inputDir);
  const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return CONFIG.supportedFormats.includes(ext);
  });

  if (imageFiles.length === 0) {
    console.log(`${colors.yellow}⚠️  No images found to convert${colors.reset}`);
    process.exit(0);
  }

  console.log(`Found ${imageFiles.length} image(s) to convert...\n`);

  let totalOriginalSize = 0;
  let totalWebPSize = 0;
  let successCount = 0;
  let skippedCount = 0;
  let errorCount = 0;

  // Process each image
  for (const filename of imageFiles) {
    const inputPath = path.join(CONFIG.inputDir, filename);
    const outputFilename = filename.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(CONFIG.outputDir, outputFilename);

    // Check if WebP version already exists
    if (CONFIG.skipExisting && fs.existsSync(outputPath)) {
      console.log(`${colors.yellow}⏭️  Skipped: ${filename} (WebP already exists)${colors.reset}`);
      skippedCount++;
      continue;
    }

    process.stdout.write(`Converting: ${filename}... `);

    const result = await convertImageToWebP(inputPath, outputPath);

    if (result.success) {
      totalOriginalSize += result.originalSize;
      totalWebPSize += result.webpSize;
      successCount++;
      console.log(
        `${colors.green}✓ ${formatBytes(result.originalSize)} → ${formatBytes(result.webpSize)} (${result.savings}% smaller)${colors.reset}`
      );
    } else {
      errorCount++;
      console.log(`${colors.red}✗ Failed: ${result.error}${colors.reset}`);
    }
  }

  // Summary
  console.log(`\n${'='.repeat(60)}`);
  console.log(`${colors.blue}📊 Conversion Summary${colors.reset}`);
  console.log(`${'='.repeat(60)}`);
  console.log(`✅ Successfully converted: ${successCount}`);
  if (skippedCount > 0) {
    console.log(`⏭️  Skipped (already exists): ${skippedCount}`);
  }
  if (errorCount > 0) {
    console.log(`❌ Errors: ${errorCount}`);
  }
  
  if (successCount > 0) {
    const totalSavings = ((1 - totalWebPSize / totalOriginalSize) * 100).toFixed(1);
    console.log(`\n💾 Total size reduction: ${formatBytes(totalOriginalSize - totalWebPSize)} (${totalSavings}%)`);
    console.log(`📦 Original total: ${formatBytes(totalOriginalSize)}`);
    console.log(`🎯 WebP total: ${formatBytes(totalWebPSize)}`);
  }

  console.log(`\n${colors.green}✨ Done!${colors.reset}`);
  console.log(`\n💡 Tip: Your original images are kept. You can delete them after testing the WebP versions.`);
}

// Run the conversion
processDirectory().catch(error => {
  console.error(`${colors.red}Fatal error: ${error.message}${colors.reset}`);
  process.exit(1);
});

