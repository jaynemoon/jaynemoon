import { Outlet, Link, useLocation } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Layout = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

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
        type: "spring", 
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
        type: "spring", 
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
        type: "spring", 
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
                  🌙
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
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About' },
                { path: '/projects', label: 'Projects' },
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
              className="md:hidden flex items-center space-x-2"
            >
              <ThemeToggle />
            </motion.div>
          </div>
        </div>
      </motion.nav>

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
                  🌙
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
                  { to: '/', label: 'Home' },
                  { to: '/about', label: 'About' },
                  { to: '/projects', label: 'Projects' },
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
                    <span>📍</span>
                    <span>Available worldwide</span>
                  </span>
                </li>
                <li>
                  <span className="flex items-center space-x-2 text-moon-light/70">
                    <span>⏰</span>
                    <span>GMT-8 (PST)</span>
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="border-t border-moon-accent-silver/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-moon-light/50 text-sm mb-4 md:mb-0">
              &copy; 2024 Jayne Moon. Crafted with 🖤 and lots of ☕
            </p>
            <div className="text-xs text-moon-light/40 font-mono">
              Built with React, Framer Motion & Tailwind CSS
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

export default Layout;