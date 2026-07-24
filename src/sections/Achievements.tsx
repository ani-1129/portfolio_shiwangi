import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { portfolioData } from '../data/portfolioData';

// Count-up helper component
const Counter: React.FC<{ value: number; suffix?: string; duration?: number }> = ({ value, suffix = '', duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    if (start === end) {
      setCount(end);
      return;
    }

    const totalMiliseconds = duration * 1000;
    const stepTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-accent-gold">
      {count}{suffix}
    </span>
  );
};

export const Achievements: React.FC = () => {
  const stats = portfolioData.achievements;

  return (
    <section id="achievements" className="py-20 md:py-28 relative border-b border-border-subtle overflow-hidden">
      {/* Editorial backgrounds */}
      <div className="absolute inset-0 editorial-grid opacity-15 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader 
          number="06" 
          title="Overview & Stats" 
          subtitle="A quantitative summary reflecting core educational specializations, capabilities, and objectives."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card hoverEffect={true} className="text-center h-full flex flex-col justify-center items-center border border-border-subtle py-8 md:py-10">
                <div className="mb-3">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                
                <h4 className="font-heading font-extrabold text-sm md:text-base text-text-main mb-1">
                  {stat.label}
                </h4>
                
                <p className="font-body text-xs md:text-sm text-text-muted font-light">
                  {stat.subLabel}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
