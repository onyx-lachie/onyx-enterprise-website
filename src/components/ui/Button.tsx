import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({ children, variant = 'primary', className = '', onClick, href }: ButtonProps) {
  const baseStyles = "px-8 py-4 rounded-lg font-semibold text-base transition-all duration-300 inline-block text-center";

  const variantStyles = {
    primary: "bg-[#00F0B5] text-[#1C1C1E] hover:bg-[#00D9A0]",
    secondary: "bg-transparent border-2 border-[#E8EAF0] text-[#1C1C1E] hover:border-[#00F0B5] hover:text-[#00F0B5]",
    outline: "bg-transparent border-2 border-[#E8EAF0] text-[#1C1C1E] hover:border-[#00F0B5]",
    ghost: "bg-transparent text-[#6E7180] hover:text-[#1C1C1E] hover:bg-[#F8FAFB]"
  };

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('https');

    if (isExternal) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <Link to={href}>
        <motion.div
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        >
          {children}
        </motion.div>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
