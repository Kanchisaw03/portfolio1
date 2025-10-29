import { useState, useEffect, useMemo, memo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Camera,
  Video,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Play,
  ExternalLink,
  Star,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import OptimizedImage from '../components/OptimizedImage.jsx';

function App() {
  const shouldReduceMotion = useReducedMotion();
  const [activePortfolioTab, setActivePortfolioTab] = useState('video');
  const [currentProject, setCurrentProject] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Track mobile/desktop view for responsive layout
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'

  // Featured projects data - memoized to prevent recreation
  const featuredProjects = useMemo(() => [
    {
      id: 1,
      title: "Kurukshetra Arti glimpses",
      type: "Videography",
      image: "https://img.youtube.com/vi/CMYXxja7T4c/hqdefault.jpg",
      description: "Capturing the divine essence of Kurukshetra Aarti with cinematic storytelling"
    },
    {
      id: 2,
      title: "Delhi Travel Story",
      type: "Videography",
      image: "https://img.youtube.com/vi/wQODkCMJePs/hqdefault.jpg",
      description: "A visual journey through the bustling streets and vibrant culture of Delhi"
    },
    {
      id: 3,
      title: "Kedarnath : The Dream Destination",
      type: "Videography",
      image: "https://img.youtube.com/vi/sHJVhOaq2po/hqdefault.jpg",
      description: "An immersive cinematic journey to the sacred Kedarnath, capturing the spiritual beauty and breathtaking landscapes"
    },
    
    {
      id: 4,
      title: "Moments of Kedarnath",
      type: "Videography",
      image: "https://img.youtube.com/vi/iHWURVLVMiY/hqdefault.jpg",
      description: "Sacred moments captured at one of India's most revered pilgrimage sites"
    }
  ], []);

  // Testimonials data - Real clients from Lakshya's portfolio PDF - memoized
  const testimonials = useMemo(() => [
    {
      name: "Diorama Designs",
      role: "Client",
      text: "Lakshya brought creativity and precision to our product photography and videography. His attention to detail and professional approach added real value to our visual campaigns.",
      rating: 5
    },
    {
      name: "Itokri",
      role: "Client",
      text: "Working with Lakshya was a smooth and inspiring process. He has a strong eye for cinematic storytelling and understands how to balance artistry with brand needs.",
      rating: 5
    }
  ], []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Form handling functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // For now, we'll use a simple mailto approach
      // In production, you'd want to use EmailJS or a backend service
      const subject = encodeURIComponent(`Portfolio Contact - ${formData.service || 'General Inquiry'}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service || 'Not specified'}\n\nMessage:\n${formData.message}`
      );

      // Create mailto link
      const mailtoLink = `mailto:lakshyasinghtomargwl@gmail.com?subject=${subject}&body=${body}`;

      // Open default email client
      window.open(mailtoLink, '_blank');

      // Show success message
      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-primary-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-serif text-2xl font-bold text-glow"
            >
              Portfolio
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
              >
                About
              </button>
              <Link
                to="/portfolio"
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
              >
                Portfolio
              </Link>
              <Link
                to="/projects"
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
              >
                Projects
              </Link>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
              >
                Testimonials
              </button>
                <button
                onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                Contact
                </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4 py-4 space-y-4 border-t border-white/10"
              >
                <button
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  About
                </button>
                <Link
                  to="/portfolio"
                  className="block w-full text-left text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  Portfolio
                </Link>
                <Link
                  to="/projects"
                  className="block w-full text-left text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  Projects
                </Link>
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="block w-full text-left text-gray-300 hover:text-teal-400 transition-colors duration-300"
                >
                  Testimonials
                </button>
                  <button
                  onClick={() => scrollToSection('contact')}
                    className="block w-full text-left text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  >
                  Contact
                  </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        {/* Portfolio Title - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute left-8 md:left-16 top-1/4 z-20"
        >
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-mono tracking-wider leading-tight">
            PORTFOLIO
          </h1>
          <div className="mt-4 text-white">
            <p className="text-sm md:text-base font-mono tracking-wider mb-1">LAKSHYA SINGH TOMAR</p>
            <p className="text-xs md:text-sm text-gray-400">+91 9179547966</p>
            <p className="text-xs md:text-sm text-gray-400">lakshyasinghtomargwl@gmail.com</p>
            
          </div>
        </motion.div>


        {/* Animated Photo Strip - Diagonal Band - Pure CSS Animation for Performance */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute left-0 w-full h-full flex items-end justify-center"
            style={{ 
              transform: 'rotate(-15deg) translateZ(0)',
              transformOrigin: 'bottom center'
            }}
          >
            {/* Pure CSS animation - No JavaScript re-renders! */}
            <div
              className={`flex gap-2 items-center whitespace-nowrap ${shouldReduceMotion ? '' : 'animate-photo-carousel'}`}
              style={{
                marginBottom: isMobile ? '10%' : '20%', // 10% on mobile, 20% on desktop
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden'
              }}
            >
              {/* Optimized: Reduced from 26 to 8 images for better performance */}
              {[
                'https://res.cloudinary.com/dpgiisvsx/image/upload/v1761749986/InShot_20251015_183927319_rbuzph.jpg',
                'https://res.cloudinary.com/dpgiisvsx/image/upload/v1761749986/InShot_20251015_185418258_bkqzjj.jpg',
                'https://res.cloudinary.com/dpgiisvsx/image/upload/v1761749984/InShot_20251015_181058909_mbq33i.jpg',
                'https://res.cloudinary.com/dpgiisvsx/image/upload/v1761749982/InShot_20251015_170812440_j9t6ei.jpg',
                // Duplicate for seamless loop (only 4 images duplicated)
                'https://res.cloudinary.com/dpgiisvsx/image/upload/v1761749967/InShot_20250718_003915652_tvjro3.jpg',
                'https://res.cloudinary.com/dpgiisvsx/image/upload/v1761749967/InShot_20250527_131156334_ypanjw.jpg',
                'https://res.cloudinary.com/dpgiisvsx/image/upload/v1761749964/InShot_20250603_150634673_swy7io.jpg',
                'https://res.cloudinary.com/dpgiisvsx/image/upload/v1761749962/InShot_20250502_104237033_f4omt6.jpg'
              ].map((img, index) => {
                const rotations = [-2, 1, -1, 2];
                const rotation = shouldReduceMotion ? 0 : rotations[index % rotations.length];
                
                return (
                  <div 
                    key={index} 
                    className="w-44 h-60 md:w-52 md:h-72 lg:w-60 lg:h-80 flex-shrink-0 relative pointer-events-auto"
                    style={{ 
                      transform: `rotate(${rotation}deg) translateZ(0)`,
                      backfaceVisibility: 'hidden',
                      WebkitBackfaceVisibility: 'hidden',
                      willChange: 'auto'
                    }}
                  >
                    <div className="w-full h-full relative overflow-hidden shadow-xl" style={{ transform: 'translateZ(0)' }}>
                      <OptimizedImage
                        src={img}
                        alt={`Portfolio ${Math.floor(index / 2) + 1}`}
                        className="w-full h-full object-cover"
                        sizes="(max-width: 768px) 176px, (max-width: 1024px) 208px, 240px"
                        useWebP
                        priority={index < 2}
                      />
        </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Info - Bottom Left */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute bottom-8 left-8 md:left-16 z-20 text-white hidden md:block"
        >
          <p className="text-sm md:text-base font-mono tracking-wider mb-1">LAKSHYA SINGH TOMAR</p>
          <p className="text-xs md:text-sm text-gray-400">+91 9179547966</p>
          <p className="text-xs md:text-sm text-gray-400">lakshyasinghtomargwl@gmail.com</p>
          <p className="text-xs md:text-sm text-gray-400 mt-2">MANTE</p>
        </motion.div>

        {/* Photo Collage - Bottom Right - Creative Grid Layout */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-4 right-8 md:right-16 z-20 hidden lg:flex items-end gap-6"
        >
          {/* Vertical Text - Left Side of Collage */}
          <div 
            className="text-white font-bold text-5xl opacity-70 mb-20"
            style={{ 
              writingMode: 'vertical-rl',
              fontFamily: 'serif',
              fontStyle: 'italic',
              textShadow: '2px 2px 6px rgba(0,0,0,0.9)',
              letterSpacing: '0.2em'
            }}
          >
            LAKSHYA
          </div>

          {/* Photo Grid */}
          <div className="relative flex flex-col gap-1" style={{ width: '280px', height: '65vh' }}>
            {/* Row 1: Large tall rectangle - Main focus */}
            <div className="w-full h-48 overflow-hidden">
              <OptimizedImage
                src="https://res.cloudinary.com/dpgiisvsx/image/upload/v1761749967/InShot_20250718_003915652_tvjro3.jpg"
                alt="Portfolio 1"
                className="w-full h-full object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 280px"
                useWebP
              />
            </div>
            
            {/* Row 3: Two squares side by side */}
            <div className="w-full h-24 flex gap-1">
              <div className="w-1/2 h-full overflow-hidden">
                <OptimizedImage
                  src="https://res.cloudinary.com/dpgiisvsx/image/upload/v1761749966/InShot_20250630_003930620_scmy0g.jpg"
                  alt="Portfolio 3"
                  className="w-full h-full object-cover"
                  useWebP
                />
              </div>
              <div className="w-1/2 h-full overflow-hidden">
                <OptimizedImage
                  src="https://res.cloudinary.com/dpgiisvsx/image/upload/v1761749964/InShot_20250603_150634673_swy7io.jpg"
                  alt="Portfolio 4"
                  className="w-full h-full object-cover"
                  useWebP
                />
              </div>
            </div>
            
            {/* Row 4: Thin rectangle */}
            <div className="w-full h-18 overflow-hidden">
              <OptimizedImage
                src="https://res.cloudinary.com/dpgiisvsx/image/upload/v1761749973/InShot_20251004_123707382_u84jcw.jpg"
                alt="Portfolio 5"
                className="w-full h-full object-cover"
                useWebP
              />
            </div>
            
            {/* Row 5: Two squares side by side */}
            <div className="w-full h-24 flex gap-1">
              <div className="w-1/2 h-full overflow-hidden">
                <OptimizedImage
                  src="https://res.cloudinary.com/dpgiisvsx/image/upload/v1761749968/InShot_20250814_173153453_qeiawr.jpg"
                  alt="Portfolio 6"
                  className="w-full h-full object-cover"
                  useWebP
                />
              </div>
              <div className="w-1/2 h-full overflow-hidden">
                <OptimizedImage
                  src="https://res.cloudinary.com/dpgiisvsx/image/upload/v1761749967/InShot_20250718_003403088_vh2lyb.jpg"
                  alt="Portfolio 7"
                  className="w-full h-full object-cover"
                  useWebP
                />
              </div>
            </div>
            
            {/* Bottom Text Block - Overlaid on collage */}
            <div className="absolute bottom-3 left-0 right-0 text-center text-white z-10 bg-black/40 py-2">
              <p 
                className="text-2xl font-bold tracking-wider mb-1"
                style={{ 
                  fontFamily: 'sans-serif',
                  textShadow: '2px 2px 6px rgba(0,0,0,0.9)'
                }}
              >
                ALLOUT
              </p>
              <div className="flex justify-center items-center gap-2 mb-1">
                <div className="w-3 h-3 border border-white transform rotate-45"></div>
                <div className="w-3 h-3 border border-white transform rotate-45"></div>
                <div className="w-3 h-3 border border-white transform rotate-45"></div>
                <div className="w-3 h-3 border border-white transform rotate-45"></div>
              </div>
              <p 
                className="text-xs tracking-widest opacity-90"
                style={{ 
                  fontFamily: 'monospace',
                  textShadow: '1px 1px 3px rgba(0,0,0,0.9)'
                }}
              >
                LAKSHYA.SINGH.TOMAR
              </p>
            </div>
          </div>

          {/* Cursive Signature Watermark - Right Side */}
          <div className="text-white mb-20">
            <p 
              className="text-2xl opacity-70"
              style={{ 
                fontFamily: 'cursive',
                fontStyle: 'italic',
                textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
              }}
            >
              Lakshay Singh Tomar
            </p>
          </div>
        </motion.div>

        {/* Vertical Text - Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
          <p className="text-white text-xs md:text-sm tracking-widest font-mono">CINEMATOGRAPHER • PHOTOGRAPHER • EDITOR</p>
        </motion.div>

        {/* CTA Buttons - Center Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-8 right-8 md:right-16 z-20 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/portfolio"
            className="px-6 py-3 bg-white text-black font-mono text-sm hover:bg-gray-200 transition-colors rounded"
            >
            VIEW WORK
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
            className="px-6 py-3 border border-white text-white font-mono text-sm hover:bg-white hover:text-black transition-colors rounded"
            >
            CONTACT
        </button>
          </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.8 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative w-80 h-96 group">
                {/* Simple Image Container */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105">
                  <OptimizedImage
                    src="/assets/photo.jpg"
                    alt="Lakshya - Cinematographer, Photographer, Editor"
                    className="w-full h-full"
                    priority
                    sizes="(max-width: 768px) 100vw, 320px"
                    useWebP
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent"></div>

                  {/* Subtle Shadow */}
                  <div className="absolute inset-0 rounded-2xl bg-teal-500/10 transform translate-x-2 translate-y-2 blur-md opacity-50"></div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/10 via-cyan-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.8 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              className="space-y-6"
            >
              <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"></div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                About 
                <span className="text-teal-400"> Me</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                 I’m Lakshya, a Cinematographer, Photographer and Editor. My journey began with travel
                  photography, capturing landscapes, cultures and people across India. Over time I
                  discovered my passion for filmmaking, where I could shape stories through framing,
                  movement and light. Today my work combines technical skill with artistic vision, and I also take on commercial projects for brands and campaigns. I focus on creating visuals that are not only visually striking but also emotionally engaging. From photography and videography to editing, I approach every project with the same goal: to deliver cinematic stories that stay with the viewer.
              </p>
              
              
              
            </motion.div>
          </div>
      </div>
      </section>

      {/* Featured Work Showcase */}
      <section id="portfolio" className="py-20 px-6 bg-primary-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Featured <span className="text-cyan-400">Work</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Discover highlights from my creative portfolio
            </p>
          </motion.div>

          {/* Portfolio Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'video', icon: Video, label: 'Videography' },
              { id: 'photo', icon: Camera, label: 'Photography' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePortfolioTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 ${
                  activePortfolioTab === tab.id
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Portfolio Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePortfolioTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {activePortfolioTab === 'video' && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { title: "Kurukshetra Arti glimpses", role: "Director & Cinematographer", image: "https://img.youtube.com/vi/CMYXxja7T4c/hqdefault.jpg", duration: "4:32" },
                    { title: "Delhi Travel Story", role: "Creative Director", image: "https://img.youtube.com/vi/wQODkCMJePs/hqdefault.jpg", duration: "2:45" },
                    { title: "Kedarnath : The Dream Destination", role: "Director & Cinematographer", image: "https://img.youtube.com/vi/sHJVhOaq2po/hqdefault.jpg", duration: "5:18" },
                    { title: "Do everything that scares you...", role: "Director & Cinematographer", image: "https://img.youtube.com/vi/YVqNt2TlpLo/hqdefault.jpg", duration: "4:22" },
                    { title: "Moments of Kedarnath", role: "Director & Editor", image: "https://img.youtube.com/vi/iHWURVLVMiY/hqdefault.jpg", duration: "8:12" }
                  ].map((video, index) => (
                    <div key={index} className="group cursor-pointer" onClick={() => window.open('/portfolio', '_blank')}>
                      <div className="relative overflow-hidden rounded-xl bg-primary-700 aspect-video">
                        <img
                          src={video.image}
                          alt={`${video.title} - ${video.role}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Play className="w-12 h-12 text-white cursor-pointer" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mt-4">{video.title}</h3>
                     
                    </div>
                  ))}
                </div>
              )}

              {activePortfolioTab === 'photo' && (
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                  {[
                    { title: "Urban Portrait Series", category: "Portrait", image: "/assets/20231111003208_IMG_2808.webp" },
                    { title: "Golden Hour Landscape", category: "Landscape", image: "/assets/20240516191907_IMG_9885.webp" },
                    { title: "Street Photography", category: "Street", image: "/assets/20250412_164340.webp" },
                    { title: "Fashion Editorial", category: "Fashion", image: "/assets/IMG_1390.webp" },
                    { title: "Architectural Details", category: "Architecture", image: "/assets/IMG_3740.webp" },
                    { title: "Nature Close-up", category: "Nature", image: "/assets/IMG_4571 (1).webp" }
                  ].map((photo, index) => (
                    <div
                      key={index}
                      className="break-inside-avoid group cursor-pointer"
                      onClick={() => window.open('/portfolio', '_blank')}
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        <OptimizedImage
                          src={photo.image}
                          alt={`${photo.title} - ${photo.category}`}
                          className="w-full group-hover:scale-110 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          useWebP
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="font-semibold">{photo.title}</h3>
                            <p className="text-sm text-gray-300">{photo.category}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* CTA to Full Portfolio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 hover:scale-105 glow-cyan"
            >
              View Full Portfolio
              <ExternalLink size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Featured <span className="text-emerald-400">Projects</span>
            </h2>
            <p className="text-gray-300 text-lg">Signature works that define my creative journey</p>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                animate={{ x: -currentProject * 100 + '%' }}
                transition={{ type: 'spring', damping: 20 }}
                className="flex"
              >
                {featuredProjects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      <div className={`order-2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <div className="relative group">
                          <img
                            src={project.image}
                            alt={`${project.title} - ${project.type}`}
                            className="w-full h-96 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/30 to-cyan-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </div>
                      <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''} space-y-6`}>
                        <div className="text-teal-400 font-semibold">{project.type}</div>
                        <h3 className="text-3xl md:text-4xl font-serif font-bold">{project.title}</h3>
                        <p className="text-gray-300 text-lg">{project.description}</p>
                        <Link to="/projects" className="btn-primary inline-flex items-center gap-2">
                          View Project
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Project Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentProject(Math.max(0, currentProject - 1))}
                disabled={currentProject === 0}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => setCurrentProject(Math.min(featuredProjects.length - 1, currentProject + 1))}
                disabled={currentProject === featuredProjects.length - 1}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentProject === index ? 'bg-teal-500' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-6 bg-primary-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              What Clients <span className="text-cyan-400">Say</span>
            </h2>
            <p className="text-gray-300 text-lg">Real testimonials from Lakshya's client collaborations</p>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mx-auto mt-4"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl glow-teal hover:glow-cyan bg-gradient-to-br from-teal-500/10 to-cyan-500/5 transition-all duration-300 hover:scale-105 relative"
              >
                {/* Authenticity badge for real clients */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full flex items-center justify-center shadow-lg border-2 border-gray-900">
                  <span className="text-sm font-bold text-white">✓</span>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>

                <p className="mb-6 italic leading-relaxed text-gray-200">
                  "{testimonial.text}"
                </p>

                <div>
                  <div className="font-semibold text-white text-lg">{testimonial.name}</div>
                  <div className="text-sm mt-1 text-teal-300">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Let's Create <span className="text-teal-400">Something Together</span>
            </h2>
            <p className="text-gray-300 text-lg">Ready to bring your vision to life? Get in touch!</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-teal-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-teal-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-teal-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select Service</option>
                    <option value="videography">Videography</option>
                    <option value="photography">Photography</option>
                    <option value="editing">Video Editing</option>
                    <option value="consulting">Creative Consulting</option>
                    <option value="all">All Services</option>
                  </select>
                </div>
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    placeholder="Tell me about your project..."
                    required
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-teal-400 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5" />
                      Message sent successfully! I'll get back to you soon.
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300">
                    <div className="flex items-center gap-2">
                      <X className="w-5 h-5" />
                      Please fill in all required fields correctly.
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-teal-500/20 rounded-lg">
                  <Mail className="w-6 h-6 text-teal-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-gray-300">lakshyasinghtomargwl@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-cyan-500/20 rounded-lg">
                  <Phone className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-gray-300">+91 9179547966</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-gray-300">India</p>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="font-semibold mb-4">Follow My Work</h3>
                <div className="flex gap-4">
                  {[
                    { icon: Instagram, href: 'https://www.instagram.com/ur_traveller_dude?igsh=OHN6dDRsZWN0OTZ2', color: 'hover:text-pink-500' },
                    { icon: Youtube, href: 'http://www.youtube.com/@yehmoments', color: 'hover:text-red-500' },
                    { icon: Mail, href: 'mailto:lakshyasinghtomargwl@gmail.com', color: 'hover:text-teal-400' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 bg-white/5 rounded-lg transition-colors ${social.color}`}
                    >
                      <social.icon className="w-6 h-6" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-serif text-2xl font-bold text-glow">Portfolio</div>
            <div className="text-gray-400 text-center md:text-left">
              © 2024 Portfolio. All rights reserved. Crafted with passion for visual storytelling.
            </div>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: 'https://www.instagram.com/ur_traveller_dude?igsh=OHN6dDRsZWN0OTZ2' },
                { icon: Youtube, href: 'http://www.youtube.com/@yehmoments' },
                { icon: Mail, href: 'mailto:lakshyasinghtomargwl@gmail.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
