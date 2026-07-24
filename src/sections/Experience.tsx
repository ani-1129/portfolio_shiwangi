import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { portfolioData } from '../data/portfolioData';
import { FiTrendingUp, FiLayers, FiAlertCircle } from 'react-icons/fi';

export const Experience: React.FC = () => {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="py-20 md:py-28 relative border-b border-border-subtle overflow-hidden">
      {/* Visual accents */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader 
          number="03" 
          title="Experience" 
          subtitle="Gaining key hands-on skills in financial markets and direct customer growth strategies."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Card hoverEffect={true} className="h-full flex flex-col justify-between border border-border-subtle relative group overflow-hidden">
                {/* Visual accent top corner line */}
                <div className="absolute top-0 left-0 w-2 h-full bg-accent-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

                <div>
                  <div className="flex justify-between items-start gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-accent-gold/10 text-accent-gold rounded-xl">
                        {idx === 0 ? <FiTrendingUp size={24} /> : <FiLayers size={24} />}
                      </div>
                      <div>
                        <h4 className="font-heading font-extrabold text-xl md:text-2xl text-text-main group-hover:text-accent-gold transition-colors duration-300">
                          {exp.title}
                        </h4>
                        <span className="font-display text-xs font-semibold text-accent-pink tracking-wider block mt-1">
                          {exp.companyPlaceholder}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="font-body text-text-muted text-sm md:text-base font-light leading-relaxed mb-6">
                    {exp.description}
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-border-subtle pt-4 mt-auto">
                  <span className="font-display font-bold text-accent-gold text-xs uppercase tracking-wider">
                    {exp.durationPlaceholder}
                  </span>
                  <span className="font-display text-xs text-text-muted/60 italic">
                    Placeholder
                  </span>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Admin placeholder notice */}
        <motion.div 
          className="max-w-2xl mx-auto mt-12 p-4 rounded-xl border border-accent-gold/10 bg-accent-gold/5 flex gap-3 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <FiAlertCircle className="text-accent-gold shrink-0" size={20} />
          <p className="font-body text-xs md:text-sm text-text-muted font-light">
            <strong>Admin Note:</strong> Company names, job titles, and duration timelines are placeholders. These can be customized directly in the <code>src/data/portfolioData.ts</code> configuration file without editing code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
