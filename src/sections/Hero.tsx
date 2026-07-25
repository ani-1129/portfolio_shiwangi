import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiDownload, FiArrowDown } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';
import { Button } from '../components/Button';
import { CircularDecoration, FloatingDots } from '../components/GeometricDecorations';

export const Hero: React.FC = () => {
  const { name, tagline, bio, email, linkedin, resumeUrl } = portfolioData.personalInfo;

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center py-16 md:py-24 overflow-hidden border-b border-border-subtle">
      {/* Background grids and floating elements */}
      <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />
      <CircularDecoration className="-top-10 -left-10 w-48 h-48 md:w-64 md:h-64" />
      <FloatingDots className="top-12 right-12" rows={4} cols={4} />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Left Column: Editorial Text */}
        <div className="lg:col-span-7 flex flex-col items-start text-left order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-accent-gold text-sm md:text-base font-bold tracking-widest uppercase mb-3 block">
              MBA Specialization in Finance & HR
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl text-text-main tracking-tight leading-none mb-6"
          >
            {name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display font-medium text-lg md:text-xl text-accent-gold border-l-2 border-accent-gold/40 pl-4 mb-6"
          >
            {tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-text-muted text-base md:text-lg max-w-xl font-light leading-relaxed mb-8"
          >
            {bio}
          </motion.p>

          {/* Interactive buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 items-center mb-8"
          >
            <Button variant="primary" href="#project">
              View Featured Project
            </Button>
            <Button variant="outline" href="#contact">
              Contact Me
            </Button>
            <Button variant="outline" href={resumeUrl} download="Shiwangi_Singh_Resume.pdf" className="gap-2">
              <FiDownload size={16} /> Resume
            </Button>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-6 border-t border-border-subtle pt-6 w-full max-w-md"
          >
            <a
              href={`mailto:${email}`}
              className="text-text-muted hover:text-accent-gold transition-colors duration-300 flex items-center gap-2 text-sm font-display tracking-wider"
              aria-label="Email Shiwangi Singh"
            >
              <FiMail size={18} /> {email}
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-accent-gold transition-colors duration-300 flex items-center gap-2 text-sm font-display tracking-wider"
              aria-label="Shiwangi Singh LinkedIn"
            >
              <FiLinkedin size={18} /> LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Right Column: Editorial Framed Portrait */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-72 h-96 md:w-96 md:h-[450px]"
          >
            {/* Elegant Background elements behind the frame */}
            <div className="absolute -inset-4 border border-accent-gold/20 rounded-2xl pointer-events-none" />
            <div className="absolute inset-0 bg-accent-gold/5 rounded-2xl pointer-events-none" />
            
            {/* Top right thin gold line */}
            <div className="absolute top-0 right-0 w-24 h-[1px] bg-accent-gold/40" />
            <div className="absolute top-0 right-0 h-24 w-[1px] bg-accent-gold/40" />
            
            {/* Bottom left thin gold line */}
            <div className="absolute bottom-0 left-0 w-24 h-[1px] bg-accent-gold/40" />
            <div className="absolute bottom-0 left-0 h-24 w-[1px] bg-accent-gold/40" />

            {/* Circular frame accent overlay */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-accent-pink/30 pointer-events-none" />

            {/* Image Wrapper */}
            <div className="w-full h-full rounded-2xl overflow-hidden border border-border-subtle relative z-10 group shadow-2xl">
              <motion.img
                src="/shiwangi_1.jpg"
                alt="Shiwangi Singh Portrait"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                whileHover={{ scale: 1.04 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/45 to-transparent mix-blend-multiply pointer-events-none" />
            </div>

            {/* Floating indicator */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-accent-gold text-bg-primary font-display font-bold text-xs uppercase px-4 py-1.5 rounded-full tracking-widest shadow-lg z-20">
              Varanasi, IN
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Down arrow link indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 hidden md:block">
        <motion.a
          href="#about"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-accent-gold/60 hover:text-accent-gold flex flex-col items-center gap-1 text-xs font-display tracking-widest uppercase"
        >
          Scroll Down
          <FiArrowDown size={14} />
        </motion.a>
      </div>
    </section>
  );
};
