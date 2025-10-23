# Image Optimization Scripts

## convertToWebP.js

Automatically converts JPG, JPEG, and PNG images to WebP format for faster loading.

### Prerequisites

```bash
npm install sharp --save-dev
```

### Usage

```bash
npm run optimize:images
```

Or directly:

```bash
node scripts/convertToWebP.js
```

### What It Does

1. Scans `/public/assets/` for JPG, JPEG, and PNG files
2. Converts each to WebP format at 85% quality
3. Saves WebP versions alongside originals
4. Shows size savings for each conversion
5. Provides summary statistics

### Configuration

Edit the `CONFIG` object in `convertToWebP.js`:

```javascript
const CONFIG = {
  inputDir: path.join(__dirname, "../public/assets"),
  outputDir: path.join(__dirname, "../public/assets"),
  quality: 85, // Adjust quality (1-100)
  supportedFormats: [".jpg", ".jpeg", ".png"],
  skipExisting: true, // Skip if WebP already exists
};
```

### Example Output

```
🖼️  Image to WebP Converter

Found 15 image(s) to convert...

Converting: photo.jpg... ✓ 2.5 MB → 850 KB (66% smaller)
Converting: IMG_3740.jpg... ✓ 3.1 MB → 920 KB (70% smaller)
Converting: hero-shot.png... ✓ 1.8 MB → 640 KB (64% smaller)
...

============================================================
📊 Conversion Summary
============================================================
✅ Successfully converted: 15
💾 Total size reduction: 18.5 MB (65%)
📦 Original total: 28.5 MB
🎯 WebP total: 10.0 MB

✨ Done!
```

### Quality Settings Guide

| Type        | Recommended Quality | Use Case                |
| ----------- | ------------------- | ----------------------- |
| Photos      | 80-85               | General photography     |
| Graphics    | 85-90               | Screenshots, text       |
| Thumbnails  | 75-80               | Small preview images    |
| Hero Images | 85-90               | Large, prominent images |

### Troubleshooting

**Error: Cannot find module 'sharp'**

```bash
npm install sharp --save-dev
```

**Error: Input directory not found**

- Check that `/public/assets/` exists
- Verify the path in CONFIG.inputDir

**Images look blurry**

- Increase quality setting (85-95)
- Check original image quality

**Large file sizes**

- Decrease quality setting (70-80)
- Verify original images aren't unnecessarily large

### Advanced Usage

#### Convert Specific Directory

Edit the script:

```javascript
const CONFIG = {
  inputDir: path.join(__dirname, "../public/images/gallery"),
  // ...
};
```

#### Create Multiple Sizes

Add to the conversion function:

```javascript
// Generate thumbnail (400px width)
await sharp(inputPath)
  .resize(400)
  .webp({ quality: 80 })
  .toFile(outputPath.replace(".webp", "-thumb.webp"));

// Generate medium (800px width)
await sharp(inputPath)
  .resize(800)
  .webp({ quality: 85 })
  .toFile(outputPath.replace(".webp", "-medium.webp"));
```

### WebP Browser Support

WebP is supported by:

- ✅ Chrome 23+
- ✅ Firefox 65+
- ✅ Edge 18+
- ✅ Opera 12.1+
- ✅ Safari 14+
- ✅ iOS Safari 14+
- ✅ Android Browser 53+

Coverage: **97%+ of all browsers**

The `OptimizedImage` component automatically falls back to original formats for older browsers.

### File Size Expectations

| Format                  | Typical Size | WebP Size  | Savings |
| ----------------------- | ------------ | ---------- | ------- |
| JPEG (high quality)     | 2-5 MB       | 0.7-1.5 MB | 60-70%  |
| JPEG (medium quality)   | 0.5-2 MB     | 0.2-0.7 MB | 60-65%  |
| PNG                     | 3-10 MB      | 0.8-3 MB   | 70-80%  |
| PNG (with transparency) | 2-6 MB       | 0.5-2 MB   | 65-75%  |

### Next Steps

After conversion:

1. Keep original files as backup
2. Test WebP images in your app
3. Check image quality at different screen sizes
4. Run Lighthouse to measure improvements
5. Consider deleting originals after successful testing

---

For more information, see the main `IMAGE_OPTIMIZATION_GUIDE.md`
