import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold text-primary">Casa Dale</span>
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex px-6 py-2.5 bg-accent text-accent-foreground font-medium rounded-md hover:bg-accent/90 transition-colors"
        >
          Enquire Now
        </a>
      </div>
    </header>
  );
};

export default Header;
