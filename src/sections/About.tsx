import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { FloatingDots } from '../components/GeometricDecorations';

export const About: React.FC = () => {
  const coreCompetencies = [
    { title: "MBA Student", desc: "Specializing in Finance & HR with AKTU, building core knowledge in corporate finance, talent acquisition, and strategic leadership." },
    { title: "Sociology & Economics", desc: "B.A. graduate from Dhirendra Mahila PG College, integrating socio-economic insights into modern market research and consumer behavior." },
    { title: "Finance & HR", desc: "Passionate about combining financial data analysis with organizational dynamics and human resource frameworks." },
    { title: "Leadership & Strategy", desc: "Equipped with strong analytical thinking, leadership skills, and drive for sustainable business growth and problem solving." }
  ];

  const highlights = [
    "Financial Planning", "Recruitment Strategy", "Stock Market Analysis", "Economics Research", "Sales Strategy", "Problem Solving"
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative border-b border-border-subtle overflow-hidden">
      <FloatingDots className="bottom-12 left-12" rows={3} cols={5} />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader 
          number="01" 
          title="About Me" 
          subtitle="Combining analytical business methodologies with deep human insights to drive corporate performance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Professional / Strategy Illustration */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-border-subtle group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/about_strategy.png" 
                alt="Strategy & Growth Concept"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl">
                <span className="font-display text-accent-gold text-xs font-bold uppercase tracking-widest block mb-1">
                  Core Ideology
                </span>
                <p className="font-body text-text-main text-sm font-light italic">
                  "Understanding markets through the double lens of financial data and human behavior."
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Biography & Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-text-main mb-4">
                Academic Foundation & Practical Aspirations
              </h3>
              <p className="font-body text-text-muted text-base md:text-lg font-light leading-relaxed mb-6">
                With a Bachelor of Arts degree focusing on Sociology and Economics, I possess a unique perspective on organizational mechanics and market demands. As an MBA student currently specializing in Finance and Human Resources, my goal is to bridge the gap between technical financial analysis and human capital development.
              </p>
              <p className="font-body text-text-muted text-base md:text-lg font-light leading-relaxed">
                My hands-on exposure to Stock Marketing has strengthened my analytical thinking, risk mitigation skills, and financial decision-making capabilities, while my background in Sales Management has instilled strong communication and customer relationship skills.
              </p>
            </motion.div>

            {/* Core Competencies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {coreCompetencies.map((comp, idx) => (
                <Card key={idx} hoverEffect={true} className="flex flex-col gap-2">
                  <h4 className="font-display font-bold text-accent-gold text-base md:text-lg">
                    {comp.title}
                  </h4>
                  <p className="font-body text-text-muted text-sm font-light leading-relaxed">
                    {comp.desc}
                  </p>
                </Card>
              ))}
            </div>

            {/* Horizontal List of Highlights */}
            <motion.div 
              className="flex flex-wrap gap-2.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {highlights.map((hl, idx) => (
                <span 
                  key={idx} 
                  className="font-display text-xs md:text-sm font-semibold text-accent-gold border border-accent-gold/30 bg-accent-gold/5 px-4 py-1.5 rounded-full hover:bg-accent-gold/15 transition-colors duration-300"
                >
                  #{hl}
                </span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
