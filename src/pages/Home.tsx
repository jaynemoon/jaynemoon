import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import GradientButton from '../components/GradientButton';
import FloatingElements from '../components/FloatingElements';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const featuredProjects = [
    {
      id: 1,
      title: "AI-Powered Design System",
      description: "Revolutionary design system with AI-driven component generation and intelligent style suggestions",
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=400&h=300&fit=crop&auto=format",
      technologies: ["React", "TypeScript", "AI/ML", "Figma API", "Tailwind"],
      category: "AI Development",
      liveUrl: "https://example.com",
      caseStudyUrl: "/projects/ai-design-system",
    },
    {
      id: 2,
      title: "Quantum Computing Visualizer",
      description: "Interactive platform for visualizing quantum algorithms with real-time 3D quantum state representations",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop&auto=format",
      technologies: ["Three.js", "WebGL", "Python", "Qiskit", "D3.js"],
      category: "Creative Tech",
      liveUrl: "https://example.com",
      caseStudyUrl: "/projects/quantum-viz",
    },
    {
      id: 3,
      title: "Neural Art Generator",
      description: "Collaborative platform merging human creativity with neural networks for generative art creation",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop&auto=format",
      technologies: ["TensorFlow.js", "GANs", "WebRTC", "Socket.io", "Canvas API"],
      category: "Creative AI",
      liveUrl: "https://example.com",
      caseStudyUrl: "/projects/neural-art",
    },
  ];

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const projectContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const projectItemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-noise">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingElements />
        
        {/* Animated background gradients */}
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white via-moon-light/5 to-moon-accent-blue/5 dark:from-moon-dark dark:via-moon-darker dark:to-moon-dark" />
          <div className="absolute inset-0 bg-gradient-radial from-moon-accent-blue/10 via-transparent to-transparent" />
        </motion.div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 z-10">
          <motion.div 
            className="text-center"
            style={{ y: textY }}
            variants={heroVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="mb-8"
              variants={heroItemVariants}
            >
              <motion.span 
                className="inline-block text-8xl mb-6"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                🌙
              </motion.span>
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-gray-900 dark:text-moon-light leading-tight"
              variants={heroItemVariants}
            >
              <span className="block text-2xl md:text-3xl font-normal text-gray-600 dark:text-moon-light/60 mb-4 tracking-wider">
                Design Technologist
              </span>
              <span className="gradient-text text-shimmer animate-text-shimmer">
                Jayne Moon
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-16 max-w-4xl mx-auto text-gray-700 dark:text-moon-light/80 leading-relaxed"
              variants={heroItemVariants}
            >
              Crafting cutting-edge digital experiences where{' '}
              <span className="gradient-text font-semibold">creativity meets innovation</span>. 
              Specializing in AI-powered solutions and immersive full-stack development.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              variants={heroItemVariants}
            >
              <GradientButton to="/projects" size="lg">
                <span>Explore My Universe</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </GradientButton>
              
              <GradientButton to="/contact" variant="secondary" size="lg">
                <span>Let's Connect</span>
                <span className="text-xl">✨</span>
              </GradientButton>
            </motion.div>
            
            <motion.div 
              className="mt-20 text-sm text-gray-500 dark:text-moon-light/40"
              variants={heroItemVariants}
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ↓ Discover More
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <AnimatedSection className="py-32 relative bg-gradient-to-b from-white to-gray-50 dark:from-moon-dark dark:to-moon-darker overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-moon-accent-blue/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-moon-accent-purple/5 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20" delay={0.1}>
            <motion.div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-moon-accent-blue/10 text-moon-accent-blue dark:bg-moon-accent-blue/5 dark:text-moon-accent-cyan border border-moon-accent-blue/20">
                ✨ Featured Work
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Creative</span> Portfolio
            </h2>
            <p className="text-xl text-gray-600 dark:text-moon-light/70 max-w-3xl mx-auto leading-relaxed">
              Explore innovative projects that push the boundaries of technology and design, 
              showcasing the intersection of AI, creativity, and cutting-edge development.
            </p>
          </AnimatedSection>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            variants={projectContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectItemVariants}
                className={`group ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
              >
                <div className="relative h-full glass-effect rounded-2xl overflow-hidden border border-moon-accent-silver/10 dark:border-moon-accent-blue/10 transition-all duration-500 hover:border-moon-accent-blue/30">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                        index === 0 ? 'h-64 lg:h-80' : 'h-48'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-moon-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-moon-accent-blue/20 text-white rounded-full backdrop-blur-sm border border-white/20">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                    <h3 className={`font-bold mb-3 group-hover:gradient-text transition-all duration-300 ${
                      index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                    }`}>
                      {project.title}
                    </h3>
                    <p className={`text-gray-600 dark:text-moon-light/70 mb-6 leading-relaxed ${
                      index === 0 ? 'text-lg' : 'text-base'
                    }`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs font-medium bg-moon-accent-blue/10 text-moon-accent-blue dark:text-moon-accent-cyan rounded-full border border-moon-accent-blue/20 hover:bg-moon-accent-blue/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <GradientButton 
                        href={project.liveUrl}
                        size={index === 0 ? 'md' : 'sm'}
                        className="flex-1"
                      >
                        <span>View Live</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </GradientButton>
                      <GradientButton
                        href={project.caseStudyUrl}
                        variant="secondary"
                        size={index === 0 ? 'md' : 'sm'}
                        className="flex-1"
                      >
                        <span>Case Study</span>
                      </GradientButton>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection className="text-center mt-16" delay={0.4}>
            <GradientButton to="/projects" size="lg">
              <span>Explore All Projects</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </GradientButton>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Tech Stack Section */}
      <AnimatedSection className="py-32 bg-white dark:bg-moon-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-moon-accent-blue/5 via-transparent to-moon-accent-purple/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <motion.div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-moon-accent-purple/10 text-moon-accent-purple dark:bg-moon-accent-purple/5 border border-moon-accent-purple/20">
                🚀 Tech Arsenal
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Digital</span> Constellation
            </h2>
            <p className="text-xl text-gray-600 dark:text-moon-light/70 max-w-3xl mx-auto">
              Advanced technologies and frameworks powering innovative solutions across AI, 
              full-stack development, and creative digital experiences.
            </p>
          </AnimatedSection>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.05 }}
            viewport={{ once: true }}
          >
            {[
              { name: "React", icon: "⚛️", category: "Frontend" },
              { name: "TypeScript", icon: "🔷", category: "Language" },
              { name: "Node.js", icon: "🟢", category: "Backend" },
              { name: "Python", icon: "🐍", category: "AI/ML" },
              { name: "TensorFlow", icon: "🧠", category: "AI/ML" },
              { name: "Next.js", icon: "▲", category: "Frontend" },
              { name: "Three.js", icon: "🎭", category: "Creative" },
              { name: "Tailwind", icon: "🎨", category: "Styling" },
              { name: "MongoDB", icon: "🍃", category: "Database" },
              { name: "PostgreSQL", icon: "🐘", category: "Database" },
              { name: "AWS", icon: "☁️", category: "Cloud" },
              { name: "Docker", icon: "🐳", category: "DevOps" }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group relative glass-effect p-6 rounded-2xl border border-moon-accent-silver/10 dark:border-moon-accent-blue/10 text-center transition-all duration-500 hover:border-moon-accent-blue/30 hover:scale-105"
                initial={{ opacity: 0, y: 30, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 animate-float" 
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  {skill.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-moon-light group-hover:gradient-text transition-all duration-300 mb-2">
                  {skill.name}
                </h3>
                <span className="text-xs text-gray-500 dark:text-moon-light/50 group-hover:text-moon-accent-blue transition-colors">
                  {skill.category}
                </span>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-moon-accent-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* About Preview Section */}
      <AnimatedSection className="py-32 bg-gradient-to-br from-gray-50 to-white dark:from-moon-darker dark:to-moon-dark relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 right-20 w-72 h-72 bg-moon-accent-cyan/5 rounded-full blur-3xl"
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" delay={0.1}>
              <div className="space-y-8">
                <motion.div>
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-moon-accent-cyan/10 text-moon-accent-cyan dark:bg-moon-accent-cyan/5 border border-moon-accent-cyan/20 mb-6">
                    👋 About Me
                  </span>
                  <h2 className="text-5xl md:text-6xl font-bold mb-6">
                    <span className="gradient-text">Design</span><br/>
                    Technologist
                  </h2>
                </motion.div>
                
                <p className="text-xl text-gray-600 dark:text-moon-light/80 leading-relaxed">
                  Passionate about bridging the gap between innovative design and cutting-edge technology. 
                  I specialize in creating AI-powered solutions that don't just function beautifully—they 
                  inspire and transform user experiences.
                </p>
                
                <div className="flex items-center space-x-8 text-sm text-gray-500 dark:text-moon-light/60">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span>Available for projects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>📍</span>
                    <span>San Francisco, CA</span>
                  </div>
                </div>

                <GradientButton to="/about" size="lg">
                  <span>Learn More About Me</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </GradientButton>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative">
                <div className="glass-effect rounded-3xl p-8 border border-moon-accent-silver/10 dark:border-moon-accent-blue/10">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-moon-light/60">Experience</span>
                      <span className="text-2xl font-bold gradient-text">5+ Years</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-moon-light/60">Projects Completed</span>
                      <span className="text-2xl font-bold gradient-text">50+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-moon-light/60">Technologies Mastered</span>
                      <span className="text-2xl font-bold gradient-text">25+</span>
                    </div>
                  </div>
                </div>
                
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-moon-accent-blue/10 rounded-full blur-xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Preview Section */}
      <AnimatedSection className="py-32 bg-moon-dark text-moon-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-moon-accent-blue/10 via-moon-dark to-moon-accent-purple/10" />
        <FloatingElements />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.1}>
            <motion.div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-moon-accent-blue/20 text-moon-accent-cyan border border-moon-accent-blue/30 mb-6">
                💬 Let's Collaborate
              </span>
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                Ready to <span className="text-shimmer animate-text-shimmer">Create</span><br/>
                Something Amazing?
              </h2>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-xl text-moon-light/80 leading-relaxed mb-12 max-w-2xl mx-auto">
              I'm always excited to discuss new opportunities, innovative projects, 
              and creative collaborations. Let's turn your vision into reality.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <GradientButton to="/contact" size="lg">
                <span>Start a Conversation</span>
                <span className="text-xl">💫</span>
              </GradientButton>
              
              <GradientButton href="mailto:hello@jaynemoon.dev" variant="secondary" size="lg">
                <span>hello@jaynemoon.dev</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </GradientButton>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <div className="flex justify-center space-x-8">
              {[
                { name: 'LinkedIn', icon: '💼', href: '#' },
                { name: 'GitHub', icon: '⚡', href: '#' },
                { name: 'Twitter', icon: '🐦', href: '#' },
                { name: 'Dribbble', icon: '🎨', href: '#' },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-14 h-14 rounded-full glass-effect flex items-center justify-center text-moon-accent-blue hover:text-moon-accent-cyan group border border-moon-accent-blue/20 hover:border-moon-accent-cyan/30 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;