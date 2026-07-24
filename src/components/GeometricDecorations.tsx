import React from 'react';
import { motion } from 'framer-motion';

export const CircularDecoration: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className={`absolute pointer-events-none ${className}`}
    >
      <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20 dark:opacity-30">
        <circle cx="100" cy="100" r="99" stroke="url(#goldGradient)" strokeWidth="0.5" strokeDasharray="4 4" />
        <circle cx="100" cy="100" r="70" stroke="url(#goldGradient)" strokeWidth="1" />
        <circle cx="100" cy="100" r="30" stroke="url(#goldGradient)" strokeWidth="0.5" />
        <line x1="100" y1="0" x2="100" y2="200" stroke="url(#goldGradient)" strokeWidth="0.5" strokeDasharray="2 2" />
        <line x1="0" y1="100" x2="200" y2="100" stroke="url(#goldGradient)" strokeWidth="0.5" strokeDasharray="2 2" />
        <defs>
          <linearGradient id="goldGradient" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B89146" />
            <stop offset="1" stopColor="#F7D5DC" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export const FloatingDots: React.FC<{ className?: string; rows?: number; cols?: number }> = ({ 
  className = '', 
  rows = 5, 
  cols = 5 
}) => {
  const dots = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push({ id: `${r}-${c}`, r, c });
    }
  }

  return (
    <div 
      className={`absolute grid pointer-events-none gap-3 opacity-25 dark:opacity-40 ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
    >
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            duration: 3 + Math.random() * 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: (dot.r + dot.c) * 0.15 
          }}
          className="w-1 h-1 rounded-full bg-accent-gold"
        />
      ))}
    </div>
  );
};

export const LineDecoration: React.FC<{ className?: string; direction?: 'horizontal' | 'vertical' }> = ({ 
  className = '', 
  direction = 'horizontal' 
}) => {
  return (
    <motion.div
      initial={direction === 'horizontal' ? { scaleX: 0 } : { scaleY: 0 }}
      whileInView={direction === 'horizontal' ? { scaleX: 1 } : { scaleY: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`absolute bg-accent-gold/20 origin-left ${
        direction === 'horizontal' ? 'h-[1px] w-full left-0' : 'w-[1px] h-full top-0'
      } ${className}`}
    />
  );
};
