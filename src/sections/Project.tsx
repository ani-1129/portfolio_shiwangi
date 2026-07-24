import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { portfolioData } from '../data/portfolioData';
import { FiCheck, FiCpu, FiExternalLink, FiGithub } from 'react-icons/fi';
import { FloatingDots } from '../components/GeometricDecorations';

export const Project = () => {
  const project = portfolioData.project;

  return (
    <section id="project" className="py-20 md:py-28 relative border-b border-border-subtle overflow-hidden">
      <FloatingDots className="top-10 left-10" rows={4} cols={3} />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-gold/5 rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeader 
          number="04" 
          title="Featured Project" 
          subtitle="An intelligent urban mobility solution blending digital technology with real-world infrastructure."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left: Project Image & Tags */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-border-subtle group"
            >
              <img 
                src="/project_parking.png" 
                alt="Smart Parking System Mockup" 
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-103"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/70 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="font-display text-[10px] md:text-xs font-bold uppercase tracking-widest bg-bg-primary/80 border border-accent-gold/30 text-accent-gold px-3.5 py-1.5 rounded-full backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Project Details */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <FiCpu className="text-accent-gold" size={20} />
                <span className="font-display text-accent-gold font-bold tracking-widest text-xs uppercase">
                  IoT & AI Integration
                </span>
              </div>

              <h3 className="font-heading font-extrabold text-3xl md:text-4xl text-text-main mb-6">
                {project.title}
              </h3>

              <p className="font-body text-text-muted text-base md:text-lg font-light leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Highlight Features list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="p-1 rounded-full bg-accent-gold/10 text-accent-gold mt-0.5 shrink-0">
                      <FiCheck size={12} />
                    </span>
                    <span className="font-body text-sm md:text-base text-text-muted font-light">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" href={project.links.details}>
                  View Details
                </Button>
                <Button variant="outline" href={project.links.demo} className="gap-2">
                  <FiExternalLink size={16} /> Live Demo
                </Button>
                <Button variant="outline" href={project.links.github} className="gap-2">
                  <FiGithub size={16} /> GitHub
                </Button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
