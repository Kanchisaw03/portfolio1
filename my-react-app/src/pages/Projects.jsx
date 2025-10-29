import { useState, useMemo } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  User,
  Play,
  ExternalLink,
  Camera,
  Video,
  Clock,
  Star,
  Quote
} from 'lucide-react';
import OptimizedVideo from '../components/OptimizedVideo.jsx';
import OptimizedImage from '../components/OptimizedImage.jsx';

function Projects() {
  const shouldReduceMotion = useReducedMotion();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = useMemo(() => [
    {
      id: 1,
      title: "Kurukshetra Arti glimpses",
      category: "Videography",
      role: "Director & Cinematographer",
      year: "2024",
      client: "Spiritual Documentary",
      duration: "4:32",
      thumbnail: "https://img.youtube.com/vi/CMYXxja7T4c/hqdefault.jpg",
      heroImage: "https://img.youtube.com/vi/CMYXxja7T4c/hqdefault.jpg",
      overview: {
        goal: "Capture the divine essence of Kurukshetra Aarti with cinematic storytelling that conveys spiritual depth",
        inspiration: "Inspired by the sacred rituals and mystical atmosphere of the Ganges ghats",
        storytelling: "Focused on the spiritual journey and cultural significance of this ancient tradition"
      },
      process: {
        timeline: "2 weeks pre-production, 3-day shoot capturing multiple arti sessions, 2 weeks post-production",
        equipment: "Canon EOS R5, DJI Mavic Pro, Zeiss Loxia lenses for cinematic depth",
        approach: "Respectful documentation respecting the sacred nature while capturing cinematic beauty"
      },
      finalOutput: "https://www.youtube.com/embed/CMYXxja7T4c?si=t6G5GYRNNsESrHkf",
      testimonial: {
        text: "This film beautifully captured the divine essence of Kurukshetra Aarti. The cinematography conveyed the spiritual depth and cultural significance in a way that touched our souls.",
        author: "Priya Sharma",
        rating: 5
      }
    },
    {
      id: 2,
      title: "Delhi Travel Story",
      category: "Videography",
      role: "Creative Director",
      year: "2024",
      client: "Travel Documentary",
      duration: "2:45",
      thumbnail: "https://img.youtube.com/vi/wQODkCMJePs/hqdefault.jpg",
      heroImage: "https://img.youtube.com/vi/wQODkCMJePs/hqdefault.jpg",
      overview: {
        goal: "Create a visual journey through Delhi's bustling streets and vibrant culture",
        inspiration: "Inspired by the chaotic beauty and rich history of India's capital city",
        storytelling: "Capturing the essence of urban life, from ancient monuments to modern street culture"
      },
      process: {
        timeline: "1 month pre-production, 5-day intensive shoot across Delhi, 3 weeks post-production",
        equipment: "Sony A7S III, DJI Ronin-S gimbal, Sigma Art lenses for cinematic quality",
        approach: "Documentary-style exploration balancing wide establishing shots with intimate cultural moments"
      },
      finalOutput: "https://www.youtube.com/embed/wQODkCMJePs",
      testimonial: {
        text: "This Delhi travel story perfectly captured the soul of our city. The cinematography brought alive the vibrant culture and rich heritage in a way that moved our entire team.",
        author: "Rajesh Kumar",
        rating: 5
      }
    },
    {
      id: 3,
      title: "Moments of Kedarnath",
      category: "Videography",
      role: "Director & Editor",
      year: "2024",
      client: "Spiritual Journey Documentary",
      duration: "8:12",
      thumbnail: "https://img.youtube.com/vi/iHWURVLVMiY/hqdefault.jpg",
      heroImage: "https://img.youtube.com/vi/iHWURVLVMiY/hqdefault.jpg",
      overview: {
        goal: "Document sacred moments at Kedarnath temple, one of India's most revered pilgrimage sites",
        inspiration: "Inspired by the spiritual atmosphere and breathtaking Himalayan landscapes",
        storytelling: "Capturing the divine connection between devotees and the sacred mountain temple"
      },
      process: {
        timeline: "3 weeks preparation, 7-day trek and shooting in challenging conditions, 4 weeks editing",
        equipment: "Canon EOS R5, DJI Mavic 3 Pro for aerials, weather-sealed gear for high altitude",
        approach: "Respectful documentation of spiritual rituals combined with stunning landscape cinematography"
      },
      finalOutput: "https://www.youtube.com/embed/iHWURVLVMiY",
      testimonial: {
        text: "The footage of Kedarnath captured the divine essence of this sacred place. Every frame conveyed the spiritual depth and natural majesty that pilgrims experience.",
        author: "Dr. Anita Verma",
        rating: 5
      }
    },
    {
      id: 4,
      title: "Kedarnath : The Dream Destination",
      category: "Videography",
      role: "Director & Cinematographer",
      year: "2024",
      client: "Spiritual Journey Documentary",
      duration: "5:18",
      thumbnail: "https://img.youtube.com/vi/sHJVhOaq2po/hqdefault.jpg",
      heroImage: "https://img.youtube.com/vi/sHJVhOaq2po/hqdefault.jpg",
      overview: {
        goal: "Create an immersive cinematic journey to the sacred Kedarnath, capturing the spiritual beauty and breathtaking landscapes",
        inspiration: "Inspired by the divine connection between ancient spirituality and majestic Himalayan landscapes",
        storytelling: "Combining spiritual depth with cinematic excellence to showcase Kedarnath's sacred significance"
      },
      process: {
        timeline: "2 weeks pre-production planning the sacred journey, 5-day intensive shoot in Kedarnath region, 3 weeks cinematic post-production",
        equipment: "Canon EOS R5 with cinema lenses, DJI Mavic 3 Pro for aerial cinematography, specialized high-altitude camera gear",
        approach: "Respectful and immersive storytelling that honors the sacred nature while delivering cinematic excellence"
      },
      finalOutput: "https://www.youtube.com/embed/sHJVhOaq2po",
      testimonial: {
        text: "This cinematic journey to Kedarnath perfectly captured the spiritual essence and natural majesty of this sacred destination. The storytelling was both reverent and visually stunning.",
        author: "Rajesh Sharma",
        rating: 5
      }
    }
  ], []);

  if (selectedProject) {
    const project = projects.find(p => p.id === selectedProject);
    
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gray-900 text-white"
      >
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 glass">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link to="/" className="font-serif text-2xl font-bold text-glow">
                Portfolio
              </Link>
              <button
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 text-gray-300 hover:text-teal-400 transition-colors"
              >
                <ArrowLeft size={20} />
                Back to Projects
              </button>
            </div>
          </div>
        </nav>

        {/* Project Detail */}
        <div className="pt-20">
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <OptimizedImage
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
                priority
                sizes="100vw"
                useWebP={project.heroImage.startsWith('/')}
              />
              <div className="absolute inset-0 bg-gray-900/60"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/40"></div>
            </div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="inline-block px-4 py-2 bg-teal-500/20 rounded-full border border-teal-500/30 mb-6"
              >
                <span className="text-teal-400 text-sm font-medium">{project.category}</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-5xl md:text-7xl font-serif font-bold mb-6 text-glow"
              >
                {project.title}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-8 text-gray-300 mb-8"
              >
                <div className="flex items-center gap-2">
                  <User size={18} />
                  <span>{project.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} />
                  <span>{project.duration}</span>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Project <span className="text-teal-400">Overview</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mx-auto"></div>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl"
                >
                  <h3 className="text-xl font-serif font-bold mb-4 text-teal-400">Goal</h3>
                  <p className="text-gray-300">{project.overview.goal}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl"
                >
                  <h3 className="text-xl font-serif font-bold mb-4 text-cyan-400">Inspiration</h3>
                  <p className="text-gray-300">{project.overview.inspiration}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="glass p-6 rounded-2xl"
                >
                  <h3 className="text-xl font-serif font-bold mb-4 text-emerald-400">Storytelling</h3>
                  <p className="text-gray-300">{project.overview.storytelling}</p>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 px-6 bg-gray-800/50">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Creative <span className="text-cyan-400">Process</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto"></div>
              </motion.div>

              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                    <Calendar className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Timeline</h3>
                    <p className="text-gray-300">{project.process.timeline}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                    <Camera className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Equipment</h3>
                    <p className="text-gray-300">{project.process.equipment}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-2">
                    <ExternalLink className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Approach</h3>
                    <p className="text-gray-300">{project.process.approach}</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Final Output Section */}
          <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                  Final <span className="text-emerald-400">Output</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative aspect-video bg-gray-800 rounded-2xl overflow-hidden shadow-2xl glow-teal"
              >
                {project.finalOutput.includes('.mp4') ? (
                  <OptimizedVideo
                    src={project.finalOutput}
                    poster={project.heroImage}
                    className="w-full h-full"
                  />
                ) : project.finalOutput.includes('youtube') || project.finalOutput.includes('vimeo') ? (
                  <iframe
                    src={project.finalOutput}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : project.finalOutput === 'gallery' ? (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <Camera className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-serif font-bold mb-2">Photo Gallery</h3>
                      <p className="text-gray-300 mb-6">View the complete collection</p>
                      <button className="btn-primary">
                        View Gallery
                        <ExternalLink className="inline-block ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <Music className="w-16 h-16 text-teal-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-serif font-bold mb-2">Audio Experience</h3>
                      <p className="text-gray-300 mb-6">Listen to the complete soundtrack</p>
                      <button className="btn-primary">
                        <Play className="inline-block mr-2 w-4 h-4" />
                        Play Audio
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </section>

          {/* Client Testimonial */}
          <section className="py-20 px-6 bg-gray-800/30">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <Quote className="w-12 h-12 text-teal-400 mx-auto mb-6" />
                <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-300 mb-8">
                  "{project.testimonial.text}"
                </blockquote>
                <div className="flex justify-center mb-4">
                  {[...Array(project.testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-xl font-semibold text-teal-400">{project.testimonial.author}</p>
                <p className="text-gray-400">{project.client}</p>
              </motion.div>
            </div>
          </section>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900 text-white"
    >
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="font-serif text-2xl font-bold text-glow">
              Portfolio
            </Link>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors">
                Home
              </Link>
              <Link to="/portfolio" className="text-gray-300 hover:text-teal-400 transition-colors">
                Portfolio
              </Link>
              <span className="text-teal-400">Projects</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-radial from-teal-500/20 via-cyan-500/10 to-transparent"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-serif font-bold mb-6 text-glow"
          >
            Featured <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Projects</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
          >
            Dive deep into the creative journey behind each masterpiece
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-800 aspect-[4/3]">
                  <OptimizedImage
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    useWebP={project.thumbnail.startsWith('/')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute inset-0 bg-teal-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center">
                      <Play className="w-16 h-16 text-white mb-4 mx-auto" />
                      <p className="text-white font-semibold">View Project</p>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-block px-3 py-1 bg-teal-500/30 rounded-full border border-teal-500/50 mb-3">
                      <span className="text-teal-300 text-sm font-medium">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm">{project.role} • {project.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Creative Services Section */}
      <section className="relative py-32 px-6 overflow-hidden" id="creative-services">
        {/* Glowing divider above */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-teal-400/50 to-transparent"></div>

        {/* Cinematic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-radial from-teal-500/8 via-transparent to-cyan-500/3"></div>

        {/* Subtle stardust particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-teal-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-32 w-1.5 h-1.5 bg-emerald-400/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Intro */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-glow">
              Our Creative <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Every story deserves the right lens, frame, and sound. Here's how we can help bring yours to life.
            </p>
          </motion.div>

          {/* Service Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-20">
            {[
              {
                icon: Video,
                title: "Video Production",
                summary: "Storyboarding · Filming · Editing · Post-production",
                bullets: ["Storyboarding", "Filming", "Editing", "Post-production"],
                color: "teal"
              },
              {
                icon: Camera,
                title: "Photography",
                summary: "Commercial · Event · Portrait · Artistic Shoots",
                bullets: ["Commercial", "Event", "Portrait", "Artistic Shoots"],
                color: "cyan"
              },
              {
                icon: Star,
                title: "Creative Consulting",
                summary: "Brand Identity · Visual Direction · Campaign Strategy",
                bullets: ["Brand Identity", "Visual Direction", "Campaign Strategy"],
                color: "amber"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative glass p-8 rounded-2xl h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-teal-500/20">
                  {/* Subtle glow ring on hover */}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    service.color === 'teal' ? 'bg-gradient-to-br from-teal-500/5 to-cyan-500/3' :
                    service.color === 'cyan' ? 'bg-gradient-to-br from-cyan-500/5 to-teal-500/3' :
                    service.color === 'emerald' ? 'bg-gradient-to-br from-emerald-500/5 to-teal-500/3' :
                    'bg-gradient-to-br from-amber-500/5 to-teal-500/3'
                  }`}></div>

                  <div className="relative z-10 flex gap-6">
                    {/* Icon Circle */}
                    <motion.div
                      whileHover={{ scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 120, damping: 16 }}
                      className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-lg ${
                        service.color === 'teal' ? 'bg-gradient-to-br from-teal-500/20 to-teal-600/30 text-teal-400 group-hover:shadow-teal-500/30' :
                        service.color === 'cyan' ? 'bg-gradient-to-br from-cyan-500/20 to-cyan-600/30 text-cyan-400 group-hover:shadow-cyan-500/30' :
                        service.color === 'emerald' ? 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/30 text-emerald-400 group-hover:shadow-emerald-500/30' :
                        'bg-gradient-to-br from-amber-500/20 to-amber-600/30 text-amber-400 group-hover:shadow-amber-500/30'
                      }`}
                    >
                      <service.icon size={24} />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-2">{service.title}</h3>
                      <p className={`text-sm md:text-base mb-4 font-medium ${
                        service.color === 'teal' ? 'text-teal-400' :
                        service.color === 'cyan' ? 'text-cyan-400' :
                        service.color === 'emerald' ? 'text-emerald-400' :
                        'text-amber-400'
                      }`}>
                        {service.summary}
                      </p>

                      {/* Micro-bullets */}
                      <div className="flex flex-wrap gap-3">
                        {service.bullets.map((bullet, bulletIndex) => (
                          <div key={bulletIndex} className="flex items-center gap-1.5 text-xs text-gray-400">
                            <div className={`w-1 h-1 rounded-full ${
                              service.color === 'teal' ? 'bg-teal-400' :
                              service.color === 'cyan' ? 'bg-cyan-400' :
                              service.color === 'emerald' ? 'bg-emerald-400' :
                              'bg-amber-400'
                            }`}></div>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/#contact"
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold text-lg rounded-full transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Work With Me - Go to contact section"
            >
              Work With Me
              <ExternalLink size={20} />
            </Link>

            {/* Trust indicators - Real client feedback */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                    <Quote size={14} className="text-teal-300" />
                  </div>
                  <span>"Creativity and precision"</span>
                </div>
                <div className="hidden md:block w-px h-4 bg-white/20"></div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-full flex items-center justify-center">
                    <Star size={14} className="text-amber-400" />
                  </div>
                  <span>"Smooth and inspiring process"</span>
                </div>
              </div>
              <p className="text-xs text-teal-400 mt-4 text-center">Direct quotes from client testimonials</p>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Projects;
