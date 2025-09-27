import { useEffect } from 'react';

// Component to add resource hints for better performance
const ResourceHints = () => {
  useEffect(() => {
    // Preload critical fonts
    const fontPreload1 = document.createElement('link');
    fontPreload1.rel = 'preload';
    fontPreload1.href = 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuDyfAZ9hiJ-Ek-_EeA.woff2';
    fontPreload1.as = 'font';
    fontPreload1.type = 'font/woff2';
    fontPreload1.crossOrigin = 'anonymous';

    const fontPreload2 = document.createElement('link');
    fontPreload2.rel = 'preload';
    fontPreload2.href = 'https://fonts.gstatic.com/s/playfairdisplay/v30/nuFvD-vYSZviVYUb_rj3ij__anPXJzDwcbmjWBN2PKdFvXDXbtYKEJP4rh0.woff2';
    fontPreload2.as = 'font';
    fontPreload2.type = 'font/woff2';
    fontPreload2.crossOrigin = 'anonymous';

    // Preconnect to external domains
    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';

    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = 'anonymous';

    // DNS prefetch for performance
    const dnsPrefetch1 = document.createElement('link');
    dnsPrefetch1.rel = 'dns-prefetch';
    dnsPrefetch1.href = '//fonts.googleapis.com';

    const dnsPrefetch2 = document.createElement('link');
    dnsPrefetch2.rel = 'dns-prefetch';
    dnsPrefetch2.href = '//fonts.gstatic.com';

    // Add to head
    document.head.appendChild(fontPreload1);
    document.head.appendChild(fontPreload2);
    document.head.appendChild(preconnect1);
    document.head.appendChild(preconnect2);
    document.head.appendChild(dnsPrefetch1);
    document.head.appendChild(dnsPrefetch2);

    // Cleanup function
    return () => {
      try {
        document.head.removeChild(fontPreload1);
        document.head.removeChild(fontPreload2);
        document.head.removeChild(preconnect1);
        document.head.removeChild(preconnect2);
        document.head.removeChild(dnsPrefetch1);
        document.head.removeChild(dnsPrefetch2);
      } catch (e) {
        // Elements might already be removed
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ResourceHints;
