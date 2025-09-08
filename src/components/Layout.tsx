import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Layout = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path || 
           (path === '/' && location.pathname === '/') ||
           (path !== '/' && location.pathname.startsWith(path));
  };

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring" as const, 
        stiffness: 100, 
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring" as const, 
        stiffness: 300, 
        damping: 30 
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring" as const, 
        stiffness: 200, 
        damping: 20 
      }
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-moon-dark transition-colors duration-500 bg-noise">
      <motion.nav 
        className={`glass-effect sticky top-0 z-50 border-b transition-all duration-300 ${
          isScrolled 
            ? 'border-moon-accent-silver/20 dark:border-moon-accent-blue/10 backdrop-blur-xl' 
            : 'border-transparent backdrop-blur-md'
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              className="flex items-center"
              variants={logoVariants}
              whileHover={{ scale: 1.05 }}
            >
              <Link 
                to="/" 
                className="group flex items-center space-x-3 text-2xl font-bold text-gray-900 dark:text-moon-light transition-all duration-300"
              >
                <motion.span
                  className="text-3xl"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                </motion.span>
                <span className="group-hover:text-shimmer group-hover:animate-text-shimmer">
                  Jayne Moon
                </span>
                <motion.div
                  className="w-1 h-1 bg-moon-accent-blue rounded-full opacity-0 group-hover:opacity-100"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </Link>
            </motion.div>
            
            <motion.div 
              className="hidden md:flex items-center space-x-1"
              variants={navVariants}
            >
              {[
                { path: '/projects', label: 'Projects' },
                { path: '/about', label: 'About' },
                { path: '/contact', label: 'Contact' }
              ].map((item) => (
                <motion.div key={item.path} variants={navItemVariants}>
                  <Link
                    to={item.path}
                    className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 group ${
                      isActive(item.path) 
                        ? 'text-white bg-gradient-to-r from-moon-accent-blue to-moon-accent-purple shadow-glow-lg' 
                        : 'text-gray-700 dark:text-moon-light/80 hover:text-moon-accent-blue dark:hover:text-moon-accent-cyan'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {!isActive(item.path) && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-moon-accent-blue/10 dark:bg-moon-accent-blue/5 opacity-0 group-hover:opacity-100"
                        layoutId="navHover"
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    {isActive(item.path) && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-moon-accent-blue to-moon-accent-purple"
                        layoutId="navActive"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={navItemVariants} className="ml-4">
                <ThemeToggle />
              </motion.div>
            </motion.div>

            {/* Mobile menu button */}
            <motion.div 
              variants={navItemVariants}
              className="md:hidden flex items-center space-x-4"
            >
              <ThemeToggle />
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative w-10 h-10 flex items-center justify-center rounded-lg glass-effect border border-moon-accent-silver/10 dark:border-moon-accent-blue/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col justify-center items-center w-6 h-6">
                  <motion.span
                    className="block w-6 h-0.5 bg-gray-900 dark:bg-moon-light rounded-full transition-all duration-300"
                    animate={{
                      rotate: isMobileMenuOpen ? 45 : 0,
                      y: isMobileMenuOpen ? 0 : -4,
                      transformOrigin: "center",
                    }}
                  />
                  <motion.span
                    className="block w-6 h-0.5 bg-gray-900 dark:bg-moon-light rounded-full my-1.5"
                    animate={{
                      opacity: isMobileMenuOpen ? 0 : 1,
                      scaleX: isMobileMenuOpen ? 0 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="block w-6 h-0.5 bg-gray-900 dark:bg-moon-light rounded-full transition-all duration-300"
                    animate={{
                      rotate: isMobileMenuOpen ? -45 : 0,
                      y: isMobileMenuOpen ? -8 : 4,
                      transformOrigin: "center",
                    }}
                  />
                </div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Slide-out Menu */}
            <motion.div
              className="fixed right-0 top-0 h-full w-72 bg-white dark:bg-moon-darker glass-effect z-50 md:hidden border-l border-moon-accent-silver/20 dark:border-moon-accent-blue/10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="p-8 h-full flex flex-col">
                {/* Close Button */}
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="self-end mb-8 w-10 h-10 flex items-center justify-center rounded-lg glass-effect border border-moon-accent-silver/10 dark:border-moon-accent-blue/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg className="w-5 h-5 text-gray-900 dark:text-moon-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
                
                {/* Logo */}
                <div className="mb-12">
                  <Link 
                    to="/" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 text-2xl font-bold text-gray-900 dark:text-moon-light"
                  >
                    <span className="text-3xl"></span>
                    <span className="gradient-text">Jayne Moon</span>
                  </Link>
                </div>
                
                {/* Navigation Links */}
                <nav className="flex-1">
                  <ul className="space-y-4">
                    {[
                      { path: '/', label: 'Home', icon: '🏠' },
                      { path: '/projects', label: 'Projects', icon: '🚀' },
                      { path: '/about', label: 'About', icon: '👤' },
                      { path: '/contact', label: 'Contact', icon: '💬' }
                    ].map((item, index) => (
                      <motion.li
                        key={item.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center space-x-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                            isActive(item.path)
                              ? 'bg-gradient-to-r from-moon-accent-blue to-moon-accent-purple text-white shadow-glow'
                              : 'text-gray-700 dark:text-moon-light/80 hover:bg-moon-accent-blue/10 dark:hover:bg-moon-accent-blue/5'
                          }`}
                        >
                          <span className="text-xl">{item.icon}</span>
                          <span className="font-medium">{item.label}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
                
                {/* Social Links */}
                <div className="pt-8 border-t border-moon-accent-silver/10 dark:border-moon-accent-blue/10">
                  <p className="text-sm text-gray-500 dark:text-moon-light/50 mb-4">Connect</p>
                  <div className="flex space-x-3">
                    <motion.a
                      href="https://www.linkedin.com/in/jayne-moon/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg glass-effect border border-moon-accent-silver/10 dark:border-moon-accent-blue/10 flex items-center justify-center text-gray-700 dark:text-moon-light hover:text-moon-accent-blue transition-colors"
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
                      className="w-10 h-10 rounded-lg glass-effect border border-moon-accent-silver/10 dark:border-moon-accent-blue/10 flex items-center justify-center text-gray-700 dark:text-moon-light hover:text-moon-accent-blue transition-colors"
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
                      className="w-10 h-10 rounded-lg glass-effect border border-moon-accent-silver/10 dark:border-moon-accent-blue/10 flex items-center justify-center text-gray-700 dark:text-moon-light hover:text-moon-accent-blue transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.main 
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Outlet />
      </motion.main>

      <motion.footer 
        className="relative bg-gradient-to-t from-moon-darker to-moon-dark border-t border-moon-accent-silver/10 dark:border-moon-accent-blue/10 text-moon-light py-16 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 right-10 w-64 h-64 bg-moon-accent-blue/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-48 h-48 bg-moon-accent-purple/5 rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <motion.div 
              className="md:col-span-2"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <motion.span
                  className="text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                >
                </motion.span>
                <span className="text-2xl font-bold gradient-text">Jayne Moon</span>
              </div>
              <p className="text-moon-light/80 max-w-md text-lg leading-relaxed mb-8">
                Design Technologist crafting cutting-edge digital experiences where creativity meets innovation. 
                Specializing in full-stack development and AI-powered solutions.
              </p>
              
              {/* Social Media Icons */}
              <div className="flex space-x-6">
                {[
                  { name: 'GitHub', icon: '⚡', href: '#' },
                  { name: 'LinkedIn', icon: '💼', href: '#' },
                  { name: 'Twitter', icon: '🐦', href: '#' },
                  { name: 'Dribbble', icon: '🎨', href: '#' },
                  { name: 'Behance', icon: '🎭', href: '#' },
                ].map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-moon-accent-blue hover:text-moon-accent-cyan group"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-moon-accent-cyan mb-6 uppercase tracking-widest">Navigate</h3>
              <ul className="space-y-4">
                {[
                  { to: '/projects', label: 'Projects' },
                  { to: '/about', label: 'About' },
                  { to: '/contact', label: 'Contact' }
                ].map((link) => (
                  <li key={link.to}>
                    <Link 
                      to={link.to} 
                      className="group flex items-center space-x-2 text-moon-light/70 hover:text-moon-accent-cyan transition-all duration-300"
                    >
                      <motion.div
                        className="w-1 h-1 bg-moon-accent-blue rounded-full opacity-0 group-hover:opacity-100"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold text-moon-accent-purple mb-6 uppercase tracking-widest">Connect</h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="mailto:hello@jaynemoon.dev" 
                    className="group flex items-center space-x-2 text-moon-light/70 hover:text-moon-accent-purple transition-all duration-300"
                  >
                    <span>📧</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      hello@jaynemoon.dev
                    </span>
                  </a>
                </li>
                <li>
                  <span className="flex items-center space-x-2 text-moon-light/70">
                    <span>✅</span>
                    <span>Available worldwide</span>
                  </span>
                </li>
                {/* <li>
                  <span className="flex items-center space-x-2 text-moon-light/70">
                    <span>⏰</span>
                    <span>GMT-8 (PST)</span>
                  </span>
                </li> */}
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="border-t border-moon-accent-silver/10 mt-16 pt-8 flex flex-col md:flex-row justify-center items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-xs text-moon-light/40 font-mono">
               &copy; 2025 Jayne Moon | Crafted with 🤍 & lots of ☕️
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout;