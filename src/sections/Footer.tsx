import React from 'react';
import { FiArrowUp, FiMail, FiLinkedin } from 'react-icons/fi';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const { name, email, linkedin } = portfolioData.personalInfo;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border-subtle py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
        
        {/* Top: Logo & Back to Top */}
        <div className="w-full flex justify-between items-center border-b border-border-subtle/50 pb-8 mb-8">
          <div className="flex flex-col items-start">
            <span className="font-heading font-black text-xl md:text-2xl text-text-main tracking-wider uppercase">
              {name}
            </span>
            <span className="font-display text-accent-gold text-xs font-semibold uppercase tracking-widest mt-1">
              MBA Portfolio
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-bg-primary border border-border-subtle rounded-full text-accent-gold hover:text-bg-primary hover:bg-accent-gold transition-all duration-300 shadow-md cursor-pointer"
            aria-label="Back to top"
          >
            <FiArrowUp size={20} />
          </button>
        </div>

        {/* Center: Links & Socials */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between mb-8">
          {/* Quick links */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 justify-start">
            <a href="#about" className="font-display text-xs md:text-sm font-semibold tracking-wider uppercase text-text-muted hover:text-accent-gold transition-colors duration-300">
              About
            </a>
            <a href="#education" className="font-display text-xs md:text-sm font-semibold tracking-wider uppercase text-text-muted hover:text-accent-gold transition-colors duration-300">
              Education
            </a>
            <a href="#experience" className="font-display text-xs md:text-sm font-semibold tracking-wider uppercase text-text-muted hover:text-accent-gold transition-colors duration-300">
              Experience
            </a>
            <a href="#project" className="font-display text-xs md:text-sm font-semibold tracking-wider uppercase text-text-muted hover:text-accent-gold transition-colors duration-300">
              Project
            </a>
            <a href="#skills" className="font-display text-xs md:text-sm font-semibold tracking-wider uppercase text-text-muted hover:text-accent-gold transition-colors duration-300">
              Skills
            </a>
            <a href="#contact" className="font-display text-xs md:text-sm font-semibold tracking-wider uppercase text-text-muted hover:text-accent-gold transition-colors duration-300">
              Contact
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 md:justify-end">
            <a
              href={`mailto:${email}`}
              className="p-3 bg-bg-primary/50 border border-border-subtle/50 rounded-full text-text-muted hover:text-accent-gold hover:border-accent-gold/40 transition-all duration-300"
              aria-label="Email Shiwangi Singh"
            >
              <FiMail size={18} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-bg-primary/50 border border-border-subtle/50 rounded-full text-text-muted hover:text-accent-gold hover:border-accent-gold/40 transition-all duration-300"
              aria-label="Shiwangi Singh LinkedIn"
            >
              <FiLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-display tracking-widest text-text-muted/40 uppercase">
          <p>© {currentYear} {name}. All Rights Reserved.</p>
          <p>Designed with Editorial Aesthetics</p>
        </div>

      </div>
    </footer>
  );
};
