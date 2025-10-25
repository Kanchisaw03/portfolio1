import { useState, useMemo, memo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Camera,
  Video,
  Play,
  ExternalLink,
  Eye,
  Heart,
  Share2,
  X,
  ChevronLeft,
  ChevronRight,
  Quote,
  Star
} from 'lucide-react';
import OptimizedVideo from '../components/OptimizedVideo.jsx';
import OptimizedImage from '../components/OptimizedImage.jsx';

function Portfolio() {
  const shouldReduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState('videography');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Sample data - memoized for performance
  const videographyItems = useMemo(() => [
    {
      id: 1,
      title: "Kurukshetra Arti glimpses",
      role: "Director & Cinematographer",
      duration: "4:32",
      thumbnail: "/assets/20240516191907_IMG_9885.jpg",
      embedUrl: "https://www.youtube.com/embed/CMYXxja7T4c?si=t6G5GYRNNsESrHkf",
      views: "12.5K",
      likes: "1.2K"
    },
    {
      id: 2,
      title: "Delhi Travel Story",
      role: "Creative Director",
      duration: "2:45",
      thumbnail: "/assets/20231111003208_IMG_2808.jpg",
      embedUrl: "https://youtube.com/shorts/wQODkCMJePs?si=Os8pnAJ1Iw1cQBeg",
      views: "8.3K",
      likes: "892"
    },
    {
      id: 3,
      title: "Beauty of Madhya Pradesh",
      role: "Director of Photography",
      duration: "3:18",
      thumbnail: "/assets/Screenshot 2025-09-28 194850.jpg",
      embedUrl: "https://youtube.com/shorts/m0v1x7puONU?si=7Qxt11B7cfNxlAuz",
      views: "25.7K",
      likes: "2.1K"
    },
    {
      id: 4,
      title: "Moments of Kedarnath",
      role: "Director & Editor",
      duration: "8:12",
      thumbnail: "/assets/Screenshot 2025-09-28 200051.jpg",
      embedUrl: "https://youtube.com/shorts/iHWURVLVMiY?si=WywTXGEeiEJ0ZVwF",
      views: "15.2K",
      likes: "1.8K"
    },
    {
      id: 5,
      title: "Fashion Commercial",
      role: "Cinematographer",
      duration: "1:30",
      thumbnail: "/assets/20250412_164340.jpg",
      embedUrl: "https://youtube.com/shorts/lyag4Rj82sg?si=_g8d-ndf81LA_ECY",
      views: "9.8K",
      likes: "756"
    },
    {
      id: 6,
      title: "Travel Documentary",
      role: "Solo Filmmaker",
      duration: "6:45",
      thumbnail: "/assets/20250412_164340.jpg",
      embedUrl: "https://www.youtube.com/embed/RRBRKS7Lru0?si=eaVRHwKaGEl42k1U",
      views: "32.1K",
      likes: "3.4K"
    }
  ], []);

  const photographyItems = useMemo(() => [
    {
      id: 1,
      title: "Urban Portrait Series",
      category: "Portrait",
      image: "/assets/20231111003208_IMG_2808.jpg",
      likes: "234",
      shares: "45"
    },
    {
      id: 2,
      title: "Golden Hour Landscape",
      category: "Landscape",
      image: "/assets/20240516191907_IMG_9885.jpg",
      likes: "456",
      shares: "78"
    },
    {
      id: 3,
      title: "Street Photography",
      category: "Street",
      image: "/assets/20250412_164340.jpg",
      likes: "189",
      shares: "23"
    },
    {
      id: 4,
      title: "Fashion Editorial",
      category: "Fashion",
      image: "/assets/IMG_1390.jpg",
      likes: "567",
      shares: "123"
    },
    {
      id: 5,
      title: "Architectural Details",
      category: "Architecture",
      image: "/assets/IMG_3740.jpg",
      likes: "312",
      shares: "67"
    },
    {
      id: 6,
      title: "Nature Close-up",
      category: "Nature",
      image: "/assets/IMG_4571 (1).jpg",
      likes: "445",
      shares: "89"
    },
    {
      id: 7,
      title: "Kurukshetra Arti",
      category: "Event",
      image: "/assets/20240516191907_IMG_9885.jpg",
      likes: "678",
      shares: "145"
    },
    {
      id: 8,
      title: "Minimalist Composition",
      category: "Abstract",
      image: "/assets/IMG20230409161909 (1).jpg",
      likes: "234",
      shares: "56"
    }
  ], []);

  const openLightbox = (index) => {
    setSelectedImage(photographyItems[index]);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % photographyItems.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(photographyItems[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? photographyItems.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(photographyItems[prevIndex]);
  };

  const openVideoModal = (video) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900 text-white"
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-serif text-2xl font-bold text-glow">
              Portfolio
            </Link>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors">
                Home
              </Link>
              <span className="text-teal-400">Portfolio</span>
              <Link to="/projects" className="text-gray-300 hover:text-teal-400 transition-colors">
                Projects
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 animate-float">
            <Video className="w-8 h-8 text-teal-400 opacity-20" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
            <Camera className="w-10 h-10 text-cyan-400 opacity-20" />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-teal-500/20 via-cyan-500/10 to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-serif font-bold mb-6 text-glow"
          >
            Creative <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
          >
            Explore the complete collection of visual storytelling
          </motion.p>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {[
              { id: 'videography', icon: Video, label: 'Videography', count: videographyItems.length },
              { id: 'photography', icon: Camera, label: 'Photography', count: photographyItems.length }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-xl glow-teal'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-teal-400'
                }`}
              >
                <tab.icon size={20} />
                <span className="font-medium">{tab.label}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">{tab.count}</span>
              </button>
            ))}
          </motion.div>

          {/* Content Based on Active Tab */}
          <AnimatePresence mode="wait">
            {activeTab === 'videography' && (
              <motion.div
                key="videography"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {videographyItems.map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="group cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-gray-800 aspect-video">
                        <OptimizedImage
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          useWebP
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                        
                        {/* Play Button */}
                        <div
                          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                          onClick={() => {
                            if (video.embedUrl.includes('youtube.com') || video.embedUrl.includes('youtu.be')) {
                              openVideoModal(video);
                            }
                          }}
                        >
                          {video.embedUrl.includes('.mp4') ? (
                            <OptimizedVideo
                              src={video.embedUrl}
                              className="w-full h-full"
                              controls={false}
                              autoPlay={false}
                              muted={true}
                            />
                          ) : (
                            <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center shadow-xl">
                              <Play className="w-8 h-8 text-white ml-1" />
                            </div>
                          )}
                        </div>

                        {/* Video Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                          <h3 className="text-lg font-serif font-bold text-white mb-1">{video.title}</h3>
                          <p className="text-gray-300 text-sm mb-2">{video.role}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-teal-400 text-sm font-medium">{video.duration}</span>
                            <div className="flex items-center gap-4 text-xs text-gray-400">
                              <span className="flex items-center gap-1">
                                <Eye size={12} />
                                {video.views}
                              </span>
                              <span className="flex items-center gap-1">
                                <Heart size={12} />
                                {video.likes}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'photography' && (
              <motion.div
                key="photography"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                  {photographyItems.map((photo, index) => (
                    <motion.div
                      key={photo.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="break-inside-avoid group cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        <OptimizedImage
                          src={photo.image}
                          alt={photo.title}
                          className="w-full group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          useWebP
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <h3 className="text-white font-semibold mb-1">{photo.title}</h3>
                            <p className="text-gray-300 text-sm mb-2">{photo.category}</p>
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-4 text-xs text-gray-300">
                                <span className="flex items-center gap-1">
                                  <Heart size={12} />
                                  {photo.likes}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Share2 size={12} />
                                  {photo.shares}
                                </span>
                              </div>
                              <ExternalLink className="w-4 h-4 text-teal-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox for Photography */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-6xl max-h-full">
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <ChevronRight size={24} />
              </button>

              <motion.div
                key={selectedImage.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <OptimizedImage
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="max-w-full max-h-full object-contain rounded-xl"
                  priority
                  useWebP
                />
              </motion.div>
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-white text-xl font-serif font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeVideoModal}
          >
            <div className="relative max-w-4xl w-full max-h-full">
              <button
                onClick={closeVideoModal}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative bg-black rounded-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    src={selectedVideo.embedUrl.replace('youtube.com/shorts/', 'youtube.com/embed/').replace('?si=', '?')}
                    title={selectedVideo.title}
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-lg font-serif font-bold text-white mb-1">{selectedVideo.title}</h3>
                  <p className="text-gray-300 text-sm mb-2">{selectedVideo.role}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-teal-400 text-sm font-medium">{selectedVideo.duration}</span>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Eye size={12} />
                        {selectedVideo.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart size={12} />
                        {selectedVideo.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Beyond the Portfolio Section */}
      <section className="relative py-32 px-6 overflow-hidden" id="beyond-portfolio">
        {/* Soft spotlight background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"></div>
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/6 via-transparent to-teal-500/4"></div>

        {/* Subtle stardust background */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400/20 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-40 w-2 h-2 bg-teal-400/25 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-emerald-400/20 rounded-full blur-sm animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-cyan-400/15 rounded-full blur-sm animate-pulse" style={{ animationDelay: '2.2s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-glow">
              Beyond the <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Art isn't just what you see or hear — it's what you feel. This is the philosophy behind every frame, shot, and note.
            </p>
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative mb-20"
          >
            {/* Soft glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/3 via-cyan-500/5 to-teal-500/3 rounded-3xl blur-xl"></div>

            <div className="relative glass p-8 md:p-12 rounded-3xl">
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">Client Testimonials</h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto mb-3"></div>
                <p className="text-sm text-teal-300 font-medium">Real testimonials from Lakshya's portfolio</p>
              </div>

              {/* Testimonials Grid */}
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {[
                  {
                    quote: "Lakshya brought creativity and precision to our product photography and videography. His attention to detail and professional approach added real value to our visual campaigns.",
                    client: "Diorama Designs",
                    role: "Client"
                  },
                  {
                    quote: "Working with Lakshya was a smooth and inspiring process. He has a strong eye for cinematic storytelling and understands how to balance artistry with brand needs.",
                    client: "Itokri",
                    role: "Client"
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-teal-500/10 to-cyan-500/5 backdrop-blur-sm border border-teal-400/20 transition-all duration-300 hover:scale-105 h-full">
                      {/* Authenticity indicator */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-xs font-bold text-white">✓</span>
                      </div>

                      {/* Quote icon */}
                      <Quote className="w-6 h-6 mb-4 text-teal-300" />

                      {/* Quote text */}
                      <blockquote className="italic mb-6 leading-relaxed text-gray-200 text-sm md:text-base">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Client info */}
                      <div className="border-t border-teal-400/30 pt-4">
                        <p className="font-semibold text-white text-sm md:text-base">{testimonial.client}</p>
                        <p className="text-teal-300 text-xs md:text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA Strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 py-8 px-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            {/* Left side quote */}
            <div className="text-center lg:text-left">
              <p className="text-lg md:text-xl font-serif italic text-gray-300">
                "See the world cinematically."
              </p>
            </div>

            {/* Right side CTA */}
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Explore Full Work - View complete portfolio"
            >
              Explore Full Work
              <ExternalLink size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Portfolio;
