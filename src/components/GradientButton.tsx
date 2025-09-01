import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  to?: string; // For internal navigation
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
}

const GradientButton = ({ 
  children, 
  onClick, 
  href,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false
}: GradientButtonProps) => {
  const baseClasses = "relative font-medium rounded-full transition-all duration-300 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed";
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantClasses = {
    primary: "text-white bg-gradient-to-r from-moon-accent-blue to-moon-accent-purple hover:shadow-glow-lg",
    secondary: "text-moon-accent-blue dark:text-moon-accent-cyan border-2 border-moon-accent-blue/30 hover:border-moon-accent-blue hover:bg-moon-accent-blue/10",
    ghost: "text-moon-accent-blue dark:text-moon-accent-cyan hover:bg-moon-accent-blue/5"
  };

  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center justify-center space-x-2">
        {children}
      </span>
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-moon-accent-purple to-moon-accent-cyan opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        />
      )}
      <motion.div
        className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 origin-left"
        transition={{ duration: 0.3 }}
      />
    </>
  );

  const motionProps = {
    whileHover: { scale: disabled ? 1 : 1.02 },
    whileTap: { scale: disabled ? 1 : 0.98 },
    transition: { type: "spring" as const, stiffness: 400, damping: 17 }
  };

  if (to) {
    return (
      <motion.div {...motionProps}>
        <Link
          to={to}
          className={buttonClasses}
        >
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.a
        href={href}
        className={buttonClasses}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
      {...motionProps}
    >
      {buttonContent}
    </motion.button>
  );
};

export default GradientButton;