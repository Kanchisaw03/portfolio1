import { useEffect } from 'react';

// Performance monitoring component
const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production and if Performance API is available
    if (import.meta.env.PROD && 'performance' in window) {
      // Track page load time
      const trackPageLoad = () => {
        const navigation = performance.getEntriesByType('navigation')[0];
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.fetchStart;
          console.log(`Page load time: ${loadTime.toFixed(2)}ms`);

          // Track Core Web Vitals
          if ('web-vitals' in window) {
            // You can add web-vitals library later for LCP, FID, CLS tracking
          }
        }
      };

      // Track Largest Contentful Paint (LCP)
      const trackLCP = () => {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            console.log(`LCP: ${lastEntry.startTime.toFixed(2)}ms`);
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          console.log('LCP tracking not supported');
        }
      };

      // Track First Input Delay (FID)
      const trackFID = () => {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              console.log(`FID: ${entry.processingStart - entry.startTime}ms`);
            });
          });
          observer.observe({ entryTypes: ['first-input'] });
        } catch (e) {
          console.log('FID tracking not supported');
        }
      };

      // Track Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const trackCLS = () => {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            console.log(`CLS: ${clsValue.toFixed(4)}`);
          });
          observer.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.log('CLS tracking not supported');
        }
      };

      // Initialize tracking
      trackPageLoad();
      trackLCP();
      trackFID();
      trackCLS();

      // Log resource loading times for images and videos
      const trackResourceTiming = () => {
        setTimeout(() => {
          const resources = performance.getEntriesByType('resource');
          const mediaResources = resources.filter(resource =>
            resource.name.includes('.jpg') ||
            resource.name.includes('.png') ||
            resource.name.includes('.webp') ||
            resource.name.includes('.mp4') ||
            resource.name.includes('.webm')
          );

          mediaResources.forEach(resource => {
            const loadTime = resource.responseEnd - resource.requestStart;
            if (loadTime > 1000) { // Log slow resources (>1s)
              console.log(`Slow resource: ${resource.name} - ${loadTime.toFixed(2)}ms`);
            }
          });
        }, 3000); // Wait for resources to load
      };

      trackResourceTiming();
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
