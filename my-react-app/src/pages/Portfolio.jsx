import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Camera, 
  Video, 
  Music, 
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

function Portfolio() {
  const [activeTab, setActiveTab] = useState('videography');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Sample data - replace with real content
  const videographyItems = [
    {
      id: 1,
      title: "Cinematic Wedding Film",
      role: "Director & Cinematographer",
      duration: "4:32",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "12.5K",
      likes: "1.2K"
    },
    {
      id: 2,
      title: "Corporate Brand Story",
      role: "Creative Director",
      duration: "2:45",
      thumbnail: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "8.3K",
      likes: "892"
    },
    {
      id: 3,
      title: "Music Video Production",
      role: "Director of Photography",
      duration: "3:18",
      thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "25.7K",
      likes: "2.1K"
    },
    {
      id: 4,
      title: "Documentary Short",
      role: "Director & Editor",
      duration: "8:12",
      thumbnail: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "15.2K",
      likes: "1.8K"
    },
    {
      id: 5,
      title: "Fashion Commercial",
      role: "Cinematographer",
      duration: "1:30",
      thumbnail: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "9.8K",
      likes: "756"
    },
    {
      id: 6,
      title: "Travel Documentary",
      role: "Solo Filmmaker",
      duration: "6:45",
      thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      views: "32.1K",
      likes: "3.4K"
    }
  ];

  const photographyItems = [
    {
      id: 1,
      title: "Urban Portrait Series",
      category: "Portrait",
      image: "https://images.unsplash.com/photo-1494790108755-2616c4e0b8e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: "234",
      shares: "45"
    },
    {
      id: 2,
      title: "Golden Hour Landscape",
      category: "Landscape",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: "456",
      shares: "78"
    },
    {
      id: 3,
      title: "Street Photography",
      category: "Street",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: "189",
      shares: "23"
    },
    {
      id: 4,
      title: "Fashion Editorial",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: "567",
      shares: "123"
    },
    {
      id: 5,
      title: "Architectural Details",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: "312",
      shares: "67"
    },
    {
      id: 6,
      title: "Nature Close-up",
      category: "Nature",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: "445",
      shares: "89"
    },
    {
      id: 7,
      title: "Concert Photography",
      category: "Event",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: "678",
      shares: "145"
    },
    {
      id: 8,
      title: "Minimalist Composition",
      category: "Abstract",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      likes: "234",
      shares: "56"
    }
  ];

  const musicItems = [
    {
      id: 1,
      title: "Cinematic Overture",
      genre: "Orchestral",
      duration: "4:32",
      plays: "15.2K",
      waveform: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Urban Nights",
      genre: "Electronic",
      duration: "3:18",
      plays: "22.7K",
      waveform: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Acoustic Dreams",
      genre: "Acoustic",
      duration: "5:45",
      plays: "8.9K",
      waveform: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Epic Journey",
      genre: "Cinematic",
      duration: "6:12",
      plays: "31.5K",
      waveform: "https://images.unsplash.com/photo-1571974599782-87624638275f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

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
          <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
            <Music className="w-6 h-6 text-emerald-400 opacity-20" />
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
              { id: 'photography', icon: Camera, label: 'Photography', count: photographyItems.length },
              { id: 'music', icon: Music, label: 'Music', count: musicItems.length }
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
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="group cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-2xl bg-gray-800 aspect-video">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                        
                        {/* Play Button */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center shadow-xl">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
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
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="break-inside-avoid group cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={photo.image}
                          alt={photo.title}
                          className="w-full group-hover:scale-110 transition-transform duration-500"
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

            {activeTab === 'music' && (
              <motion.div
                key="music"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {musicItems.map((track, index) => (
                    <motion.div
                      key={track.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      className="glass p-6 rounded-2xl group cursor-pointer hover:bg-white/10 transition-all duration-300 glow-cyan"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-16 h-16">
                          <div className="w-full h-full bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 text-white" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-br from-teal-400/50 to-cyan-400/50 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-serif font-bold text-white mb-1">{track.title}</h3>
                          <p className="text-gray-400 text-sm">{track.genre}</p>
                        </div>
                        <div className="text-right text-sm text-gray-400">
                          <div>{track.duration}</div>
                          <div className="flex items-center gap-1 mt-1">
                            <Play size={12} />
                            {track.plays}
                          </div>
                        </div>
                      </div>
                      
                      {/* Waveform Visualization */}
                      <div className="relative h-16 bg-gray-800 rounded-lg overflow-hidden mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-cyan-500/20"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-teal-500/40 to-transparent"></div>
                        <div className="flex items-end justify-center h-full px-2 gap-1">
                          {[...Array(20)].map((_, i) => (
                            <div
                              key={i}
                              className="bg-gradient-to-t from-teal-400 to-cyan-400 rounded-sm transition-all duration-300 group-hover:from-teal-300 group-hover:to-cyan-300"
                              style={{
                                width: '3px',
                                height: `${Math.random() * 60 + 10}%`,
                                animationDelay: `${i * 0.1}s`
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-between items-center">
                        <button className="text-teal-400 hover:text-teal-300 transition-colors">
                          <Play size={20} />
                        </button>
                        <div className="text-xs text-gray-500">
                          0:00 / {track.duration}
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

              <motion.img
                key={selectedImage.id}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain rounded-xl"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <h3 className="text-white text-xl font-serif font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.category}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Philosophy & Testimonials Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-teal-500/5"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-32 left-20 w-2 h-2 bg-teal-400 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-glow">
              Beyond the <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Art isn't just what you see or hear — it's what you feel. This is the philosophy behind every frame, shot, and note.
            </p>
          </motion.div>

          {/* Philosophy Blocks */}
          <div className="grid md:grid-cols-3 gap-8 mb-24">
            {[
              {
                title: "Impact",
                icon: "🌍",
                description: "How creativity connects across cultures & audiences",
                details: "Every piece we create serves as a bridge, connecting hearts and minds across different worlds, cultures, and experiences."
              },
              {
                title: "Craft",
                icon: "🎨",
                description: "The balance of technical mastery and raw emotion",
                details: "Technical precision meets unbridled creativity. We blend cutting-edge techniques with genuine human emotion to create art that resonates."
              },
              {
                title: "Collaboration",
                icon: "🤝",
                description: "Working closely with clients to bring visions to life",
                details: "Your vision becomes our mission. Through deep collaboration and understanding, we transform ideas into compelling visual narratives."
              }
            ].map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative glass p-8 rounded-3xl h-full transition-all duration-500 hover:bg-white/5 hover:scale-105">
                  {/* Gradient Line */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mb-8"></div>
                  
                  {/* Icon */}
                  <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {block.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-serif font-bold text-white mb-4">{block.title}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{block.description}</p>
                  <p className="text-gray-300 leading-relaxed">{block.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 via-cyan-500/10 to-teal-500/5 rounded-3xl blur-xl"></div>
            
            <div className="relative glass p-12 rounded-3xl">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-serif font-bold text-white mb-4">What Clients Say</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mx-auto"></div>
              </div>

              {/* Testimonials Grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    text: "Working with this team was cinematic perfection. Every frame told our story with breathtaking beauty and emotional depth.",
                    author: "Sarah Chen",
                    role: "Creative Director, Luxe Brands",
                    rating: 5
                  },
                  {
                    text: "The attention to detail and artistic vision exceeded every expectation. Truly masters of their craft in every sense.",
                    author: "Michael Rodriguez",
                    role: "Founder, Artisan Studios",
                    rating: 5
                  },
                  {
                    text: "They didn't just capture our event—they created a visual symphony that brings tears to our eyes every time we watch it.",
                    author: "Elena Kowalski",
                    role: "Event Coordinator",
                    rating: 5
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center group"
                  >
                    <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 group-hover:bg-white/10 group-hover:scale-105">
                      {/* Quote Icon */}
                      <Quote className="w-8 h-8 text-teal-400 mx-auto mb-4 opacity-60" />
                      
                      {/* Stars */}
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <blockquote className="text-gray-300 italic mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                      
                      {/* Author */}
                      <div className="border-t border-white/10 pt-4">
                        <p className="font-semibold text-white">{testimonial.author}</p>
                        <p className="text-sm text-teal-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <p className="text-2xl font-serif italic text-gray-300 mb-8">
              "Your story deserves to be told beautifully."
            </p>
            <Link 
              to="/#contact"
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold text-lg rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 glow-cyan"
            >
              Start Your Story
              <ExternalLink size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Portfolio;
