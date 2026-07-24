import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { portfolioData } from '../data/portfolioData';
import { FiCheckCircle, FiBookOpen } from 'react-icons/fi';

export const Timeline: React.FC = () => {
  const education = portfolioData.education;

  return (
    <section id="education" className="py-20 md:py-28 relative border-b border-border-subtle overflow-hidden">
      {/* Editorial accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent-pink/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader 
          number="02" 
          title="Education" 
          subtitle="My academic history showcasing continuous progress, leading up to specialized management studies."
        />

        <div className="relative max-w-4xl mx-auto pl-6 md:pl-12 border-l border-accent-gold/20 flex flex-col gap-10">
          
          {education.map((edu, idx) => {
            const isLatest = edu.highlight;
            
            return (
              <div key={edu.id} className="relative">
                {/* Timeline node */}
                <span className={`absolute -left-[31px] md:-left-[55px] top-1.5 w-4 h-4 rounded-full border-2 ${
                  isLatest 
                    ? 'bg-accent-gold border-accent-gold ring-4 ring-accent-gold/20 scale-125' 
                    : 'bg-bg-primary border-accent-gold/60'
                } z-10`} />

                {/* Animation container */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <Card 
                    hoverEffect={true} 
                    className={`${
                      isLatest 
                        ? 'border-accent-gold shadow-xl shadow-accent-gold/5 bg-accent-gold/5' 
                        : 'border-border-subtle'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`font-display text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                            isLatest 
                              ? 'bg-accent-gold text-bg-primary' 
                              : 'bg-accent-gold/10 text-accent-gold'
                          }`}>
                            {edu.level}
                          </span>
                          {isLatest && (
                            <span className="flex items-center gap-1 text-xs text-accent-gold font-semibold animate-pulse">
                              <FiCheckCircle /> Currently Pursuing
                            </span>
                          )}
                        </div>

                        <h4 className="font-heading font-extrabold text-xl md:text-2xl text-text-main">
                          {edu.school}
                        </h4>

                        {edu.board && (
                          <p className="font-body text-accent-pink font-medium text-sm mt-1">
                            {edu.board}
                          </p>
                        )}
                      </div>

                      <div className="flex flex-col md:items-end text-left md:text-right gap-1.5 md:min-w-[150px]">
                        <span className="font-display font-semibold text-accent-gold text-sm">
                          {edu.completed}
                        </span>
                        <div className="flex items-center gap-1.5 text-text-main text-sm font-semibold">
                          <FiBookOpen className="text-accent-gold/60" /> {edu.marks}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};
