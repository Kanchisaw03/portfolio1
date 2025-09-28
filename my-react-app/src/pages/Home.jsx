import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [activePortfolioTab, setActivePortfolioTab] = useState('video');
  const [currentProject, setCurrentProject] = useState(0);

  // Featured projects data
  const featuredProjects = [
    {
      id: 1,
      title: "Banaras Arti glimpses",
      type: "Videography",
      image: "/assets/20240516191907_IMG_9885.jpg",
      description: "Capturing the divine essence of Banaras Aarti with cinematic storytelling"
    },
    {
      id: 2,
      title: "Delhi Travel Story",
      type: "Videography",
      image: "/assets/20231111003208_IMG_2808.jpg",
      description: "A visual journey through the bustling streets and vibrant culture of Delhi"
    },
    {
      id: 3,
      title: "Moments of Kedarnath",
      type: "Videography",
      image: "/assets/Screenshot 2025-09-28 200051.jpg",
      description: "Sacred moments captured at one of India's most revered pilgrimage sites"
    }
  ];

  // Testimonials data - Real clients from Lakshya's portfolio PDF
  const testimonials = [
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
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
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
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with cinematic gradient */}
        <div className="absolute inset-0 bg-cinematic"></div>
        <div className="absolute inset-0 bg-hero-glow"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Camera className="w-8 h-8 text-accent-blue opacity-30" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <Video className="w-10 h-10 text-accent-purple opacity-30" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-glow"
          >
            See the World Cinematically
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              {' '}Through My Lens
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
          >
             Photographer • Cinematographer • Editor
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/portfolio"
              className="btn-primary group"
            >
              View Portfolio
              <ExternalLink className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-secondary"
            >
              Get in Touch
        </button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative w-80 h-96 group perspective-1000">
                {/* 3D Container */}
                <div className="relative w-full h-full transform-style-preserve-3d transition-transform duration-700 group-hover:rotate-y-12 group-hover:rotate-x-6">
                  {/* Main Image */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transform translate-z-0">
                  <OptimizedImage
                    src="/assets/Chatgpt.jpeg"
                    alt="Lakshya - Cinematographer, Photographer, Editor"
                    className="w-full h-full"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-transparent"></div>
                  </div>
                  
                  {/* 3D Shadow Layer */}
                  <div className="absolute inset-0 rounded-2xl bg-teal-500/20 transform translate-z-[-20px] translate-x-4 translate-y-4 blur-xl opacity-60"></div>
                  
                  {/* Depth Layer */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-teal-600/30 to-cyan-600/30 transform translate-z-[-10px] translate-x-2 translate-y-2"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-emerald-400/20 blur-lg transform translate-z-[5px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Border Highlight */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-teal-400/30 transform translate-z-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
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
              
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400">500+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">50+</div>
                  <div className="text-gray-400">Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">8</div>
                  <div className="text-gray-400">Years</div>
                </div>
              </div>
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
                    { title: "Banaras Arti glimpses", role: "Director & Cinematographer", image: "/assets/20240516191907_IMG_9885.jpg", duration: "4:32" },
                    { title: "Delhi Travel Story", role: "Creative Director", image: "/assets/20231111003208_IMG_2808.jpg", duration: "2:45" },
                    { title: "Moments of Kedarnath", role: "Director & Editor", image: "/assets/Screenshot 2025-09-28 200051.jpg", duration: "8:12" }
                  ].map((video, index) => (
                    <div key={index} className="group cursor-pointer" onClick={() => window.open('/portfolio', '_blank')}>
                      <div className="relative overflow-hidden rounded-xl bg-primary-700 aspect-video">
                        <OptimizedImage
                          src={video.image}
                          alt={`${video.title} - ${video.role}`}
                          className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mt-4">{video.title}</h3>
                      <p className="text-gray-400">{video.role} • {video.duration}</p>
                    </div>
                  ))}
                </div>
              )}

              {activePortfolioTab === 'photo' && (
                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                  {[
                    { title: "Urban Portrait Series", category: "Portrait", image: "/assets/20231111003208_IMG_2808.jpg" },
                    { title: "Golden Hour Landscape", category: "Landscape", image: "/assets/20240516191907_IMG_9885.jpg" },
                    { title: "Street Photography", category: "Street", image: "/assets/20250412_164340.jpg" },
                    { title: "Fashion Editorial", category: "Fashion", image: "/assets/IMG_1390.jpg" },
                    { title: "Architectural Details", category: "Architecture", image: "/assets/IMG_3740.jpg" },
                    { title: "Nature Close-up", category: "Nature", image: "/assets/IMG_4571 (1).jpg" }
                  ].map((photo, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="break-inside-avoid group cursor-pointer"
                      onClick={() => window.open('/portfolio', '_blank')}
                    >
                      <div className="relative overflow-hidden rounded-xl">
                        <OptimizedImage
                          src={photo.image}
                          alt={`${photo.title} - ${photo.category}`}
                          className="w-full group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="font-semibold">{photo.title}</h3>
                            <p className="text-sm text-gray-300">{photo.category}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
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
                          <OptimizedImage
                            src={project.image}
                            alt={`${project.title} - ${project.type}`}
                            className="w-full h-96 rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
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
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-teal-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-teal-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <select className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-teal-400 focus:outline-none transition-colors">
                    <option value="">Select Service</option>
                    <option value="videography">Videography</option>
                    <option value="photography">Photography</option>
                    <option value="all">All Services</option>
                  </select>
                </div>
                <div>
                  <textarea
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:border-teal-400 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-primary">
                  Send Message
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
                  <p className="text-gray-300">+91 79547 96666</p>
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
