import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import GradientButton from '../components/GradientButton';
import FloatingElements from '../components/FloatingElements';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All', 'AI Development', 'Creative Tech', 'Full Stack', 'Blockchain', 'IoT'];

  const filteredProjects = useMemo(() => {
    const projects = [
      {
        id: 1,
        title: "Neural Style Transfer Studio",
        description: "AI-powered creative platform that transforms images using neural networks, allowing artists to blend styles with cutting-edge machine learning algorithms.",
        image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&h=400&fit=crop&auto=format",
        technologies: ["TensorFlow.js", "React", "Python", "GANs", "Canvas API"],
        category: "AI Development",
        type: "Creative AI",
        featured: true,
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        caseStudyUrl: "/projects/neural-style-studio",
        year: "2024",
        status: "Live"
      },
      {
        id: 2,
        title: "Quantum Algorithm Visualizer",
        description: "Interactive 3D platform for visualizing quantum computing algorithms with real-time quantum state representations and educational simulations.",
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop&auto=format",
        technologies: ["Three.js", "WebGL", "Qiskit", "D3.js", "TypeScript"],
        category: "Creative Tech",
        type: "Data Visualization",
        featured: true,
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        caseStudyUrl: "/projects/quantum-viz",
        year: "2024",
        status: "Live"
      },
      {
        id: 3,
        title: "AI-Powered Design System",
        description: "Revolutionary design system with intelligent component generation, automated accessibility checking, and AI-driven design suggestions.",
        image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=600&h=400&fit=crop&auto=format",
        technologies: ["React", "TypeScript", "OpenAI API", "Figma API", "Tailwind"],
        category: "AI Development",
        type: "Design Tools",
        featured: true,
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        caseStudyUrl: "/projects/ai-design-system",
        year: "2024",
        status: "Beta"
      },
      {
        id: 4,
        title: "Immersive Music Synthesizer",
        description: "WebAudio-based synthesizer with 3D spatial audio, AI-generated harmonies, and collaborative real-time music creation capabilities.",
        image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop&auto=format",
        technologies: ["WebAudio API", "Three.js", "Socket.io", "React", "WebRTC"],
        category: "Creative Tech",
        type: "Audio Technology",
        featured: false,
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        caseStudyUrl: "/projects/music-synth",
        year: "2023",
        status: "Live"
      },
      {
        id: 5,
        title: "Blockchain Art Marketplace",
        description: "Decentralized platform for digital art trading with NFT integration, smart contracts, and sustainable blockchain technology.",
        image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=600&h=400&fit=crop&auto=format",
        technologies: ["Solidity", "Web3.js", "React", "IPFS", "Ethereum"],
        category: "Blockchain",
        type: "Web3 Platform",
        featured: false,
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        caseStudyUrl: "/projects/blockchain-art",
        year: "2023",
        status: "Live"
      },
      {
        id: 6,
        title: "AR Interior Design Tool",
        description: "Augmented reality application for interior design with 3D object placement, real-time lighting simulation, and collaborative design features.",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop&auto=format",
        technologies: ["AR.js", "Three.js", "WebXR", "React", "Computer Vision"],
        category: "Creative Tech",
        type: "AR/VR",
        featured: false,
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        caseStudyUrl: "/projects/ar-interior",
        year: "2023",
        status: "Development"
      },
      {
        id: 7,
        title: "Real-time Collaboration Platform",
        description: "Advanced real-time collaboration platform with AI-powered suggestions, integrated video calls, and intelligent workflow optimization.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&auto=format",
        technologies: ["Next.js", "Socket.io", "WebRTC", "OpenAI", "PostgreSQL"],
        category: "Full Stack",
        type: "Productivity",
        featured: false,
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        caseStudyUrl: "/projects/collab-platform",
        year: "2024",
        status: "Live"
      },
      {
        id: 8,
        title: "Voice-Controlled Smart Dashboard",
        description: "IoT dashboard with natural language processing, voice commands, and predictive analytics for smart home automation.",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop&auto=format",
        technologies: ["React", "Node.js", "Speech Recognition", "IoT", "Machine Learning"],
        category: "IoT",
        type: "Smart Home",
        featured: false,
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/example",
        caseStudyUrl: "/projects/smart-dashboard",
        year: "2023",
        status: "Live"
      }
    ];

    let filtered = selectedFilter === 'All' 
      ? projects 
      : projects.filter(project => project.category === selectedFilter);

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query)) ||
        project.type.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-white dark:bg-moon-dark bg-noise">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <FloatingElements />
        <div className="absolute inset-0 bg-gradient-to-br from-moon-accent-blue/5 via-transparent to-moon-accent-purple/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <motion.div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-moon-accent-blue/10 text-moon-accent-blue dark:bg-moon-accent-blue/5 dark:text-moon-accent-cyan border border-moon-accent-blue/20 mb-6">
                🚀 Portfolio
              </span>
              <motion.span 
                className="inline-block text-6xl mb-6"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
              </motion.span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text text-shimmer animate-text-shimmer">Featured</span><br/>
              Work
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-moon-light/80 max-w-4xl mx-auto leading-relaxed">
              Explore a constellation of innovative projects that push the boundaries of 
              technology, creativity, and human experience. From AI-powered art to quantum 
              visualizations—each project represents a unique journey into the future.
            </p>
          </AnimatedSection>
          
          {/* Search and Filter Controls */}
          <AnimatedSection className="mb-16" delay={0.2}>
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search projects, technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 glass-effect rounded-2xl border border-moon-accent-silver/10 dark:border-moon-accent-blue/10 
                           focus:border-moon-accent-blue/30 focus:outline-none focus:ring-2 focus:ring-moon-accent-blue/20
                           text-gray-900 dark:text-moon-light placeholder-gray-500 dark:placeholder-moon-light/50
                           transition-all duration-300"
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400 dark:text-moon-light/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              
              {/* View Toggle */}
              <div className="flex items-center gap-2 glass-effect rounded-xl p-1 border border-moon-accent-silver/10 dark:border-moon-accent-blue/10">
                <motion.button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-moon-accent-blue text-white shadow-glow' 
                      : 'text-gray-500 dark:text-moon-light/60 hover:text-moon-accent-blue'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </motion.button>
                <motion.button
                  onClick={() => setViewMode('list')}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-moon-accent-blue text-white shadow-glow' 
                      : 'text-gray-500 dark:text-moon-light/60 hover:text-moon-accent-blue'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                  </svg>
                </motion.button>
              </div>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedFilter(category)}
                  className={`relative px-6 py-3 rounded-full font-medium transition-all duration-300 group ${
                    selectedFilter === category
                      ? 'text-white bg-gradient-to-r from-moon-accent-blue to-moon-accent-purple shadow-glow-lg'
                      : 'text-gray-700 dark:text-moon-light/80 glass-effect border border-moon-accent-silver/10 dark:border-moon-accent-blue/10 hover:border-moon-accent-blue/30'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{category}</span>
                  {selectedFilter !== category && (
                    <motion.div
                      className="absolute inset-0 rounded-full bg-moon-accent-blue/10 dark:bg-moon-accent-blue/5 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-moon-dark dark:to-moon-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Info */}
          <AnimatedSection className="mb-12">
            <div className="flex items-center justify-between">
              <p className="text-gray-600 dark:text-moon-light/70">
                Showing <span className="font-semibold gradient-text">{filteredProjects.length}</span> projects
                {selectedFilter !== 'All' && <span> in <span className="font-semibold">{selectedFilter}</span></span>}
                {searchQuery && <span> matching "<span className="font-semibold">{searchQuery}</span>"</span>}
              </p>
            </div>
          </AnimatedSection>

          {/* Projects Grid/List */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${viewMode}-${selectedFilter}-${searchQuery}`}
              className={viewMode === 'grid' 
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8" 
                : "space-y-8"
              }
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className={`group relative ${viewMode === 'list' ? 'flex gap-8 items-center' : ''}`}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    type: "spring" as const,
                    stiffness: 100
                  }}
                >
                  <div className={`glass-effect rounded-2xl overflow-hidden border border-moon-accent-silver/10 dark:border-moon-accent-blue/10 
                                 transition-all duration-500 hover:border-moon-accent-blue/30 hover:shadow-glow-lg group-hover:scale-[1.02]
                                 ${viewMode === 'list' ? 'flex-1 flex' : 'h-full'}`}>
                    
                    {/* Project Image */}
                    <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-80 flex-shrink-0' : ''}`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`object-cover group-hover:scale-110 transition-transform duration-700 ${
                          viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
                        }`}
                      />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm border border-white/20 ${
                          project.status === 'Live' 
                            ? 'bg-green-500/20 text-green-100' 
                            : project.status === 'Beta'
                            ? 'bg-yellow-500/20 text-yellow-100'
                            : 'bg-blue-500/20 text-blue-100'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 text-xs font-medium bg-moon-accent-purple/20 text-moon-accent-purple rounded-full backdrop-blur-sm border border-moon-accent-purple/30">
                            ⭐ Featured
                          </span>
                        </div>
                      )}
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-moon-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    
                    {/* Project Content */}
                    <div className={`p-6 flex flex-col ${viewMode === 'list' ? 'flex-1' : ''}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold mb-2 group-hover:gradient-text transition-all duration-300">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-moon-light/60">
                            <span className="px-2 py-1 bg-moon-accent-blue/10 text-moon-accent-blue dark:text-moon-accent-cyan rounded-full">
                              {project.type}
                            </span>
                            <span>•</span>
                            <span>{project.year}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-moon-light/70 mb-6 leading-relaxed flex-1">
                        {project.description}
                      </p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-moon-accent-blue/10 text-moon-accent-blue dark:text-moon-accent-cyan 
                                     rounded-full border border-moon-accent-blue/20 hover:bg-moon-accent-blue/20 transition-colors cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3 mt-auto">
                        <GradientButton 
                          href={project.liveUrl}
                          size="sm"
                          className="flex-1"
                        >
                          <span>View Live</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </GradientButton>
                        
                        <GradientButton
                          href={project.githubUrl}
                          variant="secondary"
                          size="sm"
                          className="flex-1"
                        >
                          <span>GitHub</span>
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                        </GradientButton>
                        
                        <GradientButton
                          href={project.caseStudyUrl}
                          variant="ghost"
                          size="sm"
                        >
                          <span>Case Study</span>
                        </GradientButton>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <AnimatedSection className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-moon-light">No projects found</h3>
              <p className="text-gray-600 dark:text-moon-light/70 mb-8">
                Try adjusting your search criteria or browse different categories.
              </p>
              <GradientButton onClick={() => { setSelectedFilter('All'); setSearchQuery(''); }}>
                <span>Show All Projects</span>
              </GradientButton>
            </AnimatedSection>
          )}

          {/* Call to Action */}
          <AnimatedSection className="text-center mt-20 pt-20 border-t border-moon-accent-silver/10 dark:border-moon-accent-blue/10">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">
                Ready to <span className="gradient-text">Collaborate</span>?
              </h2>
              <p className="text-xl text-gray-600 dark:text-moon-light/80 mb-8">
                I'm always excited to work on innovative projects that push the boundaries 
                of technology and creativity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GradientButton to="/contact" size="lg">
                  <span>Start a Project</span>
                  <span className="text-xl">🚀</span>
                </GradientButton>
                <GradientButton to="/about" variant="secondary" size="lg">
                  <span>Learn About Me</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </GradientButton>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Projects;