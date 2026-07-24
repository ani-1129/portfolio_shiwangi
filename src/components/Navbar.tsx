import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Project', href: '#project' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'py-4 bg-bg-primary/80 backdrop-blur-md border-b border-border-subtle/50 shadow-md' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Name Logo */}
        <a href="#hero" className="flex flex-col items-start select-none">
          <span className="font-heading font-black text-lg md:text-xl text-text-main tracking-wider uppercase">
            Shiwangi.
          </span>
          <span className="font-display text-accent-gold text-[9px] font-bold uppercase tracking-widest leading-none">
            Finance & HR
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="font-display text-xs font-semibold uppercase tracking-widest text-text-muted hover:text-accent-gold transition-colors duration-300 relative group py-1"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-accent-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-border-subtle text-accent-gold hover:bg-accent-gold/10 transition-all duration-300 ml-4 cursor-pointer"
            aria-label="Toggle light/dark theme"
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex lg:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-border-subtle text-accent-gold hover:bg-accent-gold/10 transition-all duration-300 cursor-pointer"
            aria-label="Toggle light/dark theme"
          >
            {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-full border border-border-subtle text-accent-gold hover:bg-accent-gold/10 transition-all duration-300 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-bg-primary/95 border-b border-border-subtle overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-sm font-semibold uppercase tracking-widest text-text-muted hover:text-accent-gold transition-colors duration-300 py-1"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
