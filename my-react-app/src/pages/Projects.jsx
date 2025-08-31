import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  User, 
  Play, 
  ExternalLink, 
  Camera, 
  Video, 
  Music,
  Clock,
  Star,
  Quote
} from 'lucide-react';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Cinematic Wedding Story",
      category: "Videography",
      role: "Director & Cinematographer",
      year: "2024",
      client: "Sarah & Michael",
      duration: "4:32",
      thumbnail: "/assets/20240516191907_IMG_9885.jpg",
      heroImage: "/assets/20240516191907_IMG_9885.jpg",
      overview: {
        goal: "Create an emotionally compelling wedding film that captures the authentic love story of Sarah and Michael",
        inspiration: "Inspired by classic cinema and the golden hour lighting of their vineyard venue",
        storytelling: "Focused on intimate moments and genuine emotions rather than traditional wedding videography"
      },
      process: {
        timeline: "6 months pre-production, 2-day shoot, 4 weeks post-production",
        equipment: "RED Dragon 6K, DJI Inspire 2, Zeiss Master Primes",
        approach: "Documentary-style shooting with cinematic framing and natural lighting"
      },
      finalOutput: "/assets/VID_20250531_093006_176.mp4",
      testimonial: {
        text: "The final wedding film exceeded every expectation. It perfectly captured the essence of our special day with cinematic beauty that brings tears to our eyes every time we watch it.",
        author: "Sarah Johnson",
        rating: 5
      }
    },
    {
      id: 2,
      title: "Urban Portrait Series",
      category: "Photography",
      role: "Photographer & Creative Director",
      year: "2024",
      client: "Fashion Brand X",
      duration: "Campaign",
      thumbnail: "/assets/IMG_1390.jpg",
      heroImage: "/assets/IMG_1390.jpg",
      overview: {
        goal: "Create a modern urban portrait series that showcases street fashion with architectural elements",
        inspiration: "Blade Runner aesthetics mixed with contemporary street culture",
        storytelling: "Each portrait tells a story of urban life and personal expression"
      },
      process: {
        timeline: "3 months concept to delivery",
        equipment: "Canon R5, 85mm f/1.4, Urban lighting setups",
        approach: "Golden hour and blue hour shooting in iconic city locations"
      },
      finalOutput: "gallery",
      testimonial: {
        text: "These portraits redefined our brand image. The urban aesthetic perfectly captured our target demographic.",
        author: "Marcus Chen",
        rating: 5
      }
    },
    {
      id: 3,
      title: "Ambient Soundscapes",
      category: "Music",
      role: "Composer & Sound Designer",
      year: "2024",
      client: "Film Production Co.",
      duration: "45:00",
      thumbnail: "/assets/20250412_164340.jpg",
      heroImage: "/assets/20250412_164340.jpg",
      overview: {
        goal: "Compose atmospheric music that enhances the emotional narrative of indie films",
        inspiration: "Hans Zimmer meets Ólafur Arnalds - orchestral meets electronic",
        storytelling: "Music as invisible storytelling that guides audience emotions"
      },
      process: {
        timeline: "4 months composition and production",
        equipment: "Logic Pro X, Kontakt Libraries, Live Orchestra Recording",
        approach: "Iterative composition with director feedback at each milestone"
      },
      finalOutput: "audio",
      testimonial: {
        text: "The soundtrack elevated our film to another level. It's impossible to imagine the movie without this music.",
        author: "Elena Rodriguez",
        rating: 5
      }
    }
  ];

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
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
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
                  <video
                    src={project.finalOutput}
                    controls
                    className="w-full h-full object-cover"
                    poster={project.heroImage}
                  >
                    Your browser does not support the video tag.
                  </video>
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-800 aspect-[4/3]">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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

      {/* Premium Services Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-gradient-radial from-teal-500/10 via-transparent to-cyan-500/5"></div>
        
        {/* Floating Glow Orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-serif font-bold mb-8 text-glow">
              Our Creative <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Every story deserves the right lens, frame, and sound. Here's how we can help bring yours to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                icon: Video,
                title: "Video Production",
                description: "Storyboarding, Filming, Editing, Post-production",
                details: "From concept to completion, we craft cinematic stories that captivate and inspire.",
                color: "teal"
              },
              {
                icon: Camera,
                title: "Photography",
                description: "Commercial, Event, Portrait, Artistic Shoots",
                details: "Capturing moments that matter with artistic precision and emotional depth.",
                color: "cyan"
              },
              {
                icon: Music,
                title: "Music & Sound Design",
                description: "Original Scoring, Tracks, Audio Mixing",
                details: "Creating sonic landscapes that elevate your visual narrative to new heights.",
                color: "emerald"
              },
              {
                icon: Star,
                title: "Creative Consulting",
                description: "Helping brands define their visual & sonic identity",
                details: "Strategic creative direction to ensure your brand's story resonates authentically.",
                color: "amber"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative glass p-8 rounded-3xl h-full transition-all duration-500 hover:bg-white/10 hover:scale-105">
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    service.color === 'teal' ? 'bg-gradient-to-br from-teal-500/10 to-cyan-500/5' :
                    service.color === 'cyan' ? 'bg-gradient-to-br from-cyan-500/10 to-teal-500/5' :
                    service.color === 'emerald' ? 'bg-gradient-to-br from-emerald-500/10 to-teal-500/5' :
                    'bg-gradient-to-br from-amber-500/10 to-teal-500/5'
                  }`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
                      service.color === 'teal' ? 'bg-teal-500/20 text-teal-400' :
                      service.color === 'cyan' ? 'bg-cyan-500/20 text-cyan-400' :
                      service.color === 'emerald' ? 'bg-emerald-500/20 text-emerald-400' :
                      'bg-amber-500/20 text-amber-400'
                    }`}>
                      <service.icon size={28} />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-serif font-bold text-white mb-3">{service.title}</h3>
                    <p className={`font-medium mb-4 ${
                      service.color === 'teal' ? 'text-teal-400' :
                      service.color === 'cyan' ? 'text-cyan-400' :
                      service.color === 'emerald' ? 'text-emerald-400' :
                      'text-amber-400'
                    }`}>
                      {service.description}
                    </p>
                    <p className="text-gray-300 leading-relaxed">{service.details}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link 
              to="/#contact"
              className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-semibold text-lg rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/30 hover:scale-105 glow-teal"
            >
              Work With Me
              <ExternalLink size={20} />
            </Link>
            <p className="text-gray-400 mt-6 text-lg">Ready to bring your vision to life?</p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Projects;
