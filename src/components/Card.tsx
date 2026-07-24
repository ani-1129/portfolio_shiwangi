import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true
}) => {
  return (
    <motion.div
      initial={hoverEffect ? { y: 0 } : undefined}
      whileHover={hoverEffect ? { y: -6, borderColor: 'rgba(184, 145, 70, 0.4)' } : undefined}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`glass rounded-2xl p-6 md:p-8 transition-colors duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};
