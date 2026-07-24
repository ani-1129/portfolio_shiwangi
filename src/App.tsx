import { useEffect, useRef } from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { ScrollProgress } from './components/ScrollProgress';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Timeline } from './sections/Timeline';
import { Experience } from './sections/Experience';
import { Project } from './sections/Project';
import { Skills } from './sections/Skills';
import { Achievements } from './sections/Achievements';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { portfolioData } from './data/portfolioData';

function AppContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      containerRef.current.style.setProperty('--x', `${clientX}px`);
      containerRef.current.style.setProperty('--y', `${clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const { name, title, tagline, bio } = portfolioData.personalInfo;

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": title,
    "description": bio,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Varanasi",
      "addressRegion": "Uttar Pradesh",
      "addressCountry": "India"
    },
    "alumniOf": [
      {
        "@type": "EducationalOrganization",
        "name": "AKTU"
      },
      {
        "@type": "EducationalOrganization",
        "name": "Dhirendra Mahila PG College (MGKVP)"
      }
    ],
    "knowsAbout": [
      "Finance",
      "Human Resources",
      "Sociology",
      "Economics",
      "Stock Marketing",
      "Sales Management",
      "Smart Parking System"
    ]
  };

  return (
    <div ref={containerRef} className="relative min-h-screen cursor-glow">
      <Helmet>
        <title>{name} | {title}</title>
        <meta name="description" content={bio} />
        <meta name="keywords" content="Shiwangi Singh, MBA Finance, MBA HR, Sociology, Economics, Stock Market Analyst, Sales Manager, Smart Parking System, Varanasi Portfolio" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${name} | ${title}`} />
        <meta property="og:description" content={tagline} />
        <meta property="og:image" content="/portrait.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${name} | ${title}`} />
        <meta name="twitter:description" content={tagline} />
        <meta name="twitter:image" content="/portrait.png" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      {/* Elegant horizontal scroll progress indicator */}
      <ScrollProgress />

      {/* Floating premium navigation bar */}
      <Navbar />

      {/* Main Sections */}
      <main className="pt-20">
        <Hero />
        <About />
        <Timeline />
        <Experience />
        <Project />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      {/* Minimal premium footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
