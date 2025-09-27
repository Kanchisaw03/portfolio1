import { useState, useRef, useEffect } from 'react';

// Optimized Video Component with lazy loading and performance features
const OptimizedVideo = ({
  src,
  poster,
  className = '',
  controls = true,
  autoPlay = false,
  muted = true,
  loop = false,
  ...props
}) => {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`relative ${className}`}>
      {/* Loading Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center rounded-lg">
          <div className="text-center text-gray-400">
            <div className="w-12 h-12 border-4 border-teal-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-sm">Loading video...</p>
          </div>
        </div>
      )}

      {/* Video Element */}
      {isInView && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls={controls}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          className={`w-full h-full object-cover rounded-lg transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-50'
          }`}
          onLoadedData={handleLoadedData}
          preload="metadata"
          playsInline
          {...props}
        >
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default OptimizedVideo;
