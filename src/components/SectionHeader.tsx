import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  align = 'left'
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 flex flex-col ${isCenter ? 'items-center text-center' : 'items-start text-left'}`}>
      <div className="flex items-center gap-4 mb-2">
        <span className="font-display font-bold text-accent-gold tracking-widest text-sm md:text-base">
          [{number}]
        </span>
        <motion.div 
          className="h-[1px] bg-accent-gold/30"
          initial={{ width: 0 }}
          whileInView={{ width: 60 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
      
      <h2 className="font-heading font-extrabold text-3xl md:text-5xl lg:text-6xl text-text-main leading-tight mb-4">
        {title}
      </h2>

      {subtitle && (
        <p className="font-body text-text-muted text-base md:text-lg max-w-2xl font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
