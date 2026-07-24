import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const skillGroups = portfolioData.skills;

  return (
    <section id="skills" className="py-20 md:py-28 relative border-b border-border-subtle overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-accent-pink/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader 
          number="05" 
          title="Skills Portfolio" 
          subtitle="A summary of my core functional expertises, quantitative analytics, and professional management skills."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {skillGroups.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIdx * 0.15 }}
            >
              <Card hoverEffect={false} className="h-full border border-border-subtle">
                <h3 className="font-heading font-extrabold text-2xl text-accent-gold mb-6 border-b border-border-subtle pb-3">
                  {group.category}
                </h3>

                <div className="flex flex-col gap-6">
                  {group.skills.map((skill, idx) => (
                    <div key={idx} className="flex flex-col gap-1.5">
                      <div className="flex justify-between items-center text-sm md:text-base">
                        <span className="font-display font-bold text-text-main">
                          {skill.name}
                        </span>
                        <span className="font-display text-accent-pink font-semibold text-xs">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Animated Progress Bar */}
                      <div className="w-full h-2 rounded-full bg-accent-gold/10 overflow-hidden relative border border-border-subtle/20">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent-gold to-accent-pink rounded-full origin-left"
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: skill.level / 100 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.05 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
