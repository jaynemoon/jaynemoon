import { motion } from 'framer-motion';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-moon-accent-blue/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/3 w-1 h-1 bg-moon-accent-purple/40 rounded-full"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-moon-accent-cyan/25 rounded-full"
        animate={{
          y: [0, -25, 0],
          opacity: [0.25, 0.7, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      
      <motion.div
        className="absolute top-2/3 left-1/5 w-1.5 h-1.5 bg-moon-accent-blue/35 rounded-full"
        animate={{
          y: [0, -18, 0],
          x: [0, -8, 0],
          opacity: [0.35, 0.9, 0.35],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Floating plus signs */}
      <motion.div
        className="absolute top-1/2 right-1/5 text-moon-accent-purple/20 text-sm"
        animate={{
          rotate: [0, 90, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        +
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 text-moon-accent-cyan/25 text-xs"
        animate={{
          rotate: [0, -90, 0],
          opacity: [0.25, 0.7, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        +
      </motion.div>

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-10 right-20 w-32 h-32 bg-gradient-to-br from-moon-accent-blue/5 to-moon-accent-purple/5 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-br from-moon-accent-cyan/5 to-moon-accent-blue/5 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  );
};

export default FloatingElements;