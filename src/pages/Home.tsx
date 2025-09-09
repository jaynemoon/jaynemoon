import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import GradientButton from '../components/GradientButton';
import FloatingElements from '../components/FloatingElements';
import profileHero from '../assets/hero-profile.png';

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
        type: "spring" as const,
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
        
        <div className="relative max-w-7xl mx-auto px-2 sm:px-2 lg:px-2 py-2 z-8">
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
              </motion.span>
            </motion.div>
            
            {/* Profile Image */}
            <motion.div 
              className="mb-8"
              variants={heroItemVariants}
            >
              <motion.div 
                className="relative w-32 h-32 md:w-36 md:h-36 mx-auto mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  y: [0, -8, 0]
                }}
                transition={{ 
                  scale: { duration: 1, ease: "easeInOut", delay: 0.5 },
                  opacity: { duration: 1, delay: 0.5 },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                }}
              >
                <motion.img
                  src={profileHero}
                  alt="Jayne Moon"
                  className="w-full h-full rounded-full object-cover filter opacity-90"
                  whileHover={{ 
                    scale: 1.1,
                    filter: "green(20%)",
                    opacity: 1,
                    rotateY: 5
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  initial={{ opacity: 0.3, scale: 0.5 }}
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                  whileHover={{ opacity: 0.8, scale: 1 }}
                />
              </motion.div>
            </motion.div>

            <motion.h1 
              className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-gray-900 dark:text-moon-light leading-tight"
              variants={heroItemVariants}
            >
              <span className="block text-2xl md:text-2xl font-mono text-gray-600 dark:text-moon-light/60 mb-4 tracking-wider">
                Design Technologist
              </span>
              <span className="gradient-text text-shimmer animate-text-shimmer tracking-wider mb-4">
                Jayne Moon
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-1xl mb-6 max-w-3xl mx-auto text-gray-700 dark:text-moon-light/80 leading-relaxed"
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
              <GradientButton to="/projects" size="md">
                <span className="font-mono">Explore My Projects</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </GradientButton>
              
              {/* <GradientButton to="/contact" variant="secondary" size="lg">
                <span className="font-mono">Let's Connect</span>
              </GradientButton> */}
            </motion.div>
            
            <motion.div 
              className="m-12 text-sm text-gray-500 dark:text-moon-light/40 z-10"
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
      <AnimatedSection className="py-48 relative bg-gradient-to-b from-white to-gray-50 dark:from-moon-dark dark:to-moon-darker overflow-hidden">
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
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-mono font-medium bg-moon-accent-blue/10 text-moon-accent-blue dark:bg-moon-accent-blue/5 dark:text-moon-accent-cyan border border-moon-accent-blue/20">
                Featured Work
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Creative</span>
              <span className="text-gray-900 dark:text-moon-light transition-all duration-300">Works</span>
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
                <div className={`relative h-full glass-effect rounded-2xl overflow-hidden border border-moon-accent-silver/10 dark:border-moon-accent-blue/10 text-gray-900 dark:text-moon-light transition-all duration-500 hover:border-moon-accent-blue/30 ${
                  index === 0 ? 'flex flex-col' : ''
                }`}>
                  <div className={`relative overflow-hidden ${index === 0 ? 'flex-1' : ''}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                        index === 0 ? 'h-full min-h-[300px] lg:min-h-[400px]' : 'h-48'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-moon-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium bg-moon-accent-blue/20 text-white rounded-full backdrop-blur-sm border border-white/20">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className={`p-6 ${index === 0 ? 'lg:p-8 flex flex-col justify-between' : ''}`}>
                    <div>
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
                    </div>
                    
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono font-medium bg-moon-accent-blue/10 text-moon-accent-blue dark:text-moon-accent-cyan rounded-full border border-moon-accent-blue/20 hover:bg-moon-accent-blue/20 transition-colors"
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
                </div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection className="text-center mt-16" delay={0.4}>
            <GradientButton to="/projects" variant="primary" size="lg">
              <span>View Featured Work</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </GradientButton>
          </AnimatedSection>
        </div>
      </AnimatedSection>

      {/* Tech Stack Section */}
      <AnimatedSection className="py-48 bg-white dark:bg-moon-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-moon-accent-blue/5 via-transparent to-moon-accent-purple/5" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-20">
            <motion.div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-mono font-medium bg-moon-accent-purple/10 text-moon-accent-purple dark:bg-moon-accent-purple/5 border border-moon-accent-purple/20">
                📚 My Tech Stack
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Digital</span> 
              <span className="text-gray-900 dark:text-moon-light transition-all duration-300"> Constellation</span>
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
                  type: "spring" as const,
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
      <AnimatedSection className="py-48 bg-gradient-to-br from-gray-50 to-white dark:from-moon-darker dark:to-moon-dark relative overflow-hidden">
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
                  <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-mono font-medium bg-moon-accent-cyan/10 text-moon-accent-cyan dark:bg-moon-accent-cyan/5 border border-moon-accent-cyan/20 mb-6">
                    👋 About Me
                  </span>
                  <h2 className="text-5xl md:text-6xl font-bold mb-6">
                    <span className="gradient-text">Design</span><br/>
                    <span className="text-gray-900 dark:text-moon-light transition-all duration-300"> Technologist</span>
                  </h2>
                </motion.div>
                
                <p className="text-xl text-gray-600 dark:text-moon-light/80 leading-relaxed">
                  Passionate about bridging the gap between innovative design and cutting-edge technology. 
                  I specialize in creating AI-powered solutions that don't just function beautifully—they 
                  inspire and transform user experiences.
                </p>
                
                <div className="flex items-center space-x-8 text-sm font-mono text-gray-500 dark:text-moon-light/60">
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
      <AnimatedSection className="py-48 bg-moon-dark text-moon-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-moon-accent-blue/10 via-moon-dark to-moon-accent-purple/10" />
        <FloatingElements />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection delay={0.1}>
            <motion.div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-mono font-medium bg-moon-accent-blue/20 text-moon-accent-cyan border border-moon-accent-blue/30 mb-6">
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
              
              <GradientButton href="mailto:jaynemoondev@gmail.com" variant="secondary" size="lg">
                <span>hello@jaynemoon.dev</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </GradientButton>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
              <div className="flex justify-center space-x-8">
                <motion.a
                  href="https://www.linkedin.com/in/jayne-moon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://github.com/jaynemoon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-900 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://x.com/zenjayneer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </motion.a>
              </div>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Home;