import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import GradientButton from './GradientButton';
import FloatingElements from './FloatingElements';

interface CaseStudyProps {
  project: {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    gallery: string[];
    technologies: string[];
    category: string;
    type: string;
    featured: boolean;
    liveUrl: string;
    githubUrl: string;
    year: string;
    status: string;
    challenge: string;
    solution: string;
    results: string;
    role: string;
    duration: string;
    team?: string[];
  };
  nextProject?: {
    id: number;
    title: string;
    caseStudyUrl: string;
    image: string;
  };
}

const CaseStudy = ({ project, nextProject }: CaseStudyProps) => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const imageReveal = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" as const }
    }
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-white dark:bg-moon-dark bg-noise">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <FloatingElements />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-moon-accent-blue/5 via-transparent to-moon-accent-purple/5"
          style={{ y: backgroundY }}
        />
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            style={{ y: headerY }}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Breadcrumb Navigation */}
            <motion.div variants={fadeInUp} className="mb-8">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-moon-light/60">
                <Link 
                  to="/projects" 
                  className="hover:text-moon-accent-blue transition-colors"
                >
                  Projects
                </Link>
                <span>•</span>
                <span className="text-moon-accent-blue dark:text-moon-accent-cyan">
                  {project.title}
                </span>
              </div>
            </motion.div>

            {/* Project Badge */}
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-moon-accent-blue/10 text-moon-accent-blue dark:bg-moon-accent-blue/5 dark:text-moon-accent-cyan border border-moon-accent-blue/20">
                {project.featured ? '⭐ Featured Project' : `📁 ${project.category}`}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
            >
              <span className="gradient-text text-shimmer animate-text-shimmer">
                {project.title.split(' ').slice(0, -1).join(' ')}
              </span>
              <br />
              <span className="text-gray-900 dark:text-moon-light">
                {project.title.split(' ').slice(-1)[0]}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 dark:text-moon-light/80 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              {project.description}
            </motion.p>

            {/* Project Meta */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-wrap justify-center gap-6 md:gap-12 mb-16 text-sm"
            >
              <div className="text-center">
                <div className="text-gray-500 dark:text-moon-light/60 mb-1">Year</div>
                <div className="font-semibold text-gray-900 dark:text-moon-light">{project.year}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 dark:text-moon-light/60 mb-1">Role</div>
                <div className="font-semibold text-gray-900 dark:text-moon-light">{project.role}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 dark:text-moon-light/60 mb-1">Duration</div>
                <div className="font-semibold text-gray-900 dark:text-moon-light">{project.duration}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 dark:text-moon-light/60 mb-1">Status</div>
                <div className={`font-semibold ${
                  project.status === 'Live' 
                    ? 'text-green-600 dark:text-green-400'
                    : project.status === 'Beta'
                    ? 'text-yellow-600 dark:text-yellow-400'
                    : 'text-blue-600 dark:text-blue-400'
                }`}>
                  {project.status}
                </div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <GradientButton href={project.liveUrl} size="lg">
                <span>View Live Project</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </GradientButton>
              <GradientButton href={project.githubUrl} variant="secondary" size="lg">
                <span>View Source</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </GradientButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-moon-accent-blue/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-moon-accent-blue rounded-full mt-2 animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Hero Image */}
      <AnimatedSection className="py-0">
        <motion.div 
          variants={imageReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[70vh] object-cover"
            />
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Content Sections */}
      <div className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-moon-dark dark:to-moon-darker">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Overview */}
          <AnimatedSection className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-moon-light mb-4">
                Project <span className="gradient-text">Overview</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-moon-accent-blue to-moon-accent-purple rounded-full mx-auto" />
            </div>
            <p className="text-lg text-gray-700 dark:text-moon-light/80 leading-relaxed text-center">
              {project.longDescription}
            </p>
          </AnimatedSection>

          {/* Technologies */}
          <AnimatedSection className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-moon-light mb-4">
                <span className="gradient-text">Technologies</span> Used
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  className="px-6 py-3 bg-moon-accent-blue/10 text-moon-accent-blue dark:text-moon-accent-cyan 
                           rounded-full border border-moon-accent-blue/20 hover:bg-moon-accent-blue/20 
                           transition-all duration-300 font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  viewport={{ once: true }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </AnimatedSection>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <AnimatedSection>
              <div className="glass-effect rounded-2xl p-8 h-full border border-moon-accent-silver/10 dark:border-moon-accent-blue/10">
                <div className="text-3xl mb-4">🎯</div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-moon-light mb-4">
                  The Challenge
                </h4>
                <p className="text-gray-700 dark:text-moon-light/80 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="glass-effect rounded-2xl p-8 h-full border border-moon-accent-silver/10 dark:border-moon-accent-blue/10">
                <div className="text-3xl mb-4">💡</div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-moon-light mb-4">
                  The Solution
                </h4>
                <p className="text-gray-700 dark:text-moon-light/80 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <AnimatedSection className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-moon-light mb-4">
                  Project <span className="gradient-text">Gallery</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {project.gallery.map((image, index) => (
                  <motion.div
                    key={index}
                    className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                    viewport={{ once: true }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Results */}
          <AnimatedSection className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-moon-light mb-4">
                <span className="gradient-text">Results</span> & Impact
              </h3>
            </div>
            <div className="glass-effect rounded-2xl p-8 border border-moon-accent-silver/10 dark:border-moon-accent-blue/10">
              <div className="text-3xl text-center mb-6">🚀</div>
              <p className="text-lg text-gray-700 dark:text-moon-light/80 leading-relaxed text-center">
                {project.results}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Next Project */}
      {nextProject && (
        <section className="py-20 bg-white dark:bg-moon-dark border-t border-moon-accent-silver/10 dark:border-moon-accent-blue/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-moon-light mb-4">
                Next <span className="gradient-text">Project</span>
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-moon-accent-blue to-moon-accent-purple rounded-full mx-auto" />
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <Link to={nextProject.caseStudyUrl} className="group block">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={nextProject.image}
                    alt={nextProject.title}
                    className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-moon-dark/80 via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:gradient-text transition-all duration-300">
                      {nextProject.title}
                    </h4>
                    <div className="flex items-center text-white/80 group-hover:text-white transition-colors">
                      <span>View Case Study</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="py-12 bg-gray-50 dark:bg-moon-darker">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <GradientButton onClick={() => navigate(-1)} variant="secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back</span>
            </GradientButton>
            
            <GradientButton to="/projects">
              <span>All Projects</span>
            </GradientButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudy;