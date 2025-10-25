import { useState, useRef, useEffect } from 'react';

// Generate a tiny blur placeholder (LQIP - Low Quality Image Placeholder)
const generateBlurPlaceholder = (width = 40, height = 30) => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <filter id="blur">
        <feGaussianBlur stdDeviation="5"/>
      </filter>
      <rect width="100%" height="100%" fill="#111827" filter="url(#blur)"/>
    </svg>
  `)}`;
};

// Optimized Image Component with advanced loading strategies
const OptimizedImage = ({
  src,
  alt,
  className = '',
  placeholder,
  priority = false, // Skip lazy loading for critical images
  sizes, // Responsive image sizes
  quality = 85, // Image quality hint
  useWebP = false, // Enable WebP after running the conversion script
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority); // Priority images start as "in view"
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Generate WebP source if original is JPG/PNG
  const getWebPSource = (imageSrc) => {
    if (!imageSrc || !useWebP) return null; // Only use WebP if explicitly enabled
    const ext = imageSrc.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png'].includes(ext)) {
      return imageSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    return null;
  };

  // Generate srcset for responsive images
  const generateSrcSet = (imageSrc) => {
    if (!imageSrc) return '';
    const base = imageSrc.replace(/\.[^.]+$/, '');
    const ext = imageSrc.split('.').pop();
    
    // For now, return the same image at different densities
    // In production, you'd have different sized images
    return `${imageSrc} 1x, ${imageSrc} 2x`;
  };

  // Intersection Observer for lazy loading (skip if priority)
  useEffect(() => {
    if (priority) return; // Skip lazy loading for priority images

    // Check if IntersectionObserver is supported
    if (!'IntersectionObserver' in window) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.01, // Load earlier
        rootMargin: '200px' // Preload 200px before visible for smoother scrolling
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer && imgRef.current) {
        observer.disconnect();
      }
    };
  }, [priority]);

  // Preload critical images
  useEffect(() => {
    if (priority && src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      
      const webpSrc = getWebPSource(src);
      if (webpSrc) {
        link.imagesrcset = webpSrc;
        link.type = 'image/webp';
      }
      
      document.head.appendChild(link);

      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, src]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false); // Clear any errors on successful load
    
    // Remove will-change after animation completes to save memory
    if (imgRef.current) {
      setTimeout(() => {
        if (imgRef.current) {
          imgRef.current.style.willChange = 'auto';
        }
      }, 500);
    }
  };

  const handleError = (e) => {
    // Only set error if the main image (not WebP source) fails
    // WebP source failures are handled by picture element fallback
    if (e.target.tagName === 'IMG') {
      console.warn(`Failed to load image: ${src}`);
      setHasError(true);
    }
  };

  const webpSource = getWebPSource(src);
  const defaultPlaceholder = placeholder || generateBlurPlaceholder();

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`} style={{ willChange: isLoaded ? 'auto' : 'contents' }}>
      {/* Blur-up Placeholder */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-gray-800 rounded-lg"
          style={{
            backgroundImage: `url(${defaultPlaceholder})`,
            backgroundSize: 'cover',
            filter: 'blur(10px)',
            transform: 'scale(1.1) translateZ(0)', // Prevent blur edge artifacts & enable GPU
          }}
        />
      )}

      {/* Shimmer Loading Effect - Only for non-priority images */}
      {!isLoaded && !hasError && !priority && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
      )}

      {/* Picture element with WebP support and fallback */}
      {isInView && !hasError && (
        <picture>
          {/* WebP source for modern browsers - will silently fail if not available */}
          {webpSource && (
            <source
              srcSet={webpSource}
              type="image/webp"
              sizes={sizes}
            />
          )}
          
          {/* Fallback to original format */}
          <img
            src={src}
            alt={alt}
            srcSet={generateSrcSet(src)}
            sizes={sizes}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            fetchpriority={priority ? 'high' : 'auto'}
            {...props}
          />
        </picture>
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center rounded-lg">
          <div className="text-center text-gray-400">
            <div className="text-4xl mb-2">📷</div>
            <p className="text-sm">Image not available</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
