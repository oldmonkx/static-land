import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/casa-dale-logo.png';

const navLinks = [
  { label: 'Highlights', href: '#experience-nature' },
  { label: 'Amenities', href: '#living-harmony' },
  { label: 'Layout', href: '#master-plan' },
  { label: 'Plans', href: '#plot-sizes' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary shadow-md py-2' // Dark Green background on scroll (Matches Nature Theme)
          : 'bg-gradient-to-b from-black/60 to-transparent py-4' // Dark gradient at top so white logo pops
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          {/* INCREASED LOGO SIZE HERE vvv */}
          <img src={logo} alt="Casa Dale" className="h-20 md:h-24 lg:h-28 w-auto object-contain" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white/90 hover:text-accent font-medium transition-colors tracking-wide text-lg"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="px-6 py-2.5 bg-accent text-white font-bold rounded-md hover:bg-accent/90 transition-colors shadow-lg"
          >
            Enquire Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary border-t border-white/10 absolute w-full left-0 top-full">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white hover:text-accent font-medium py-2 transition-colors text-lg border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="mt-4 w-full block px-6 py-3 bg-accent text-white font-bold rounded-md hover:bg-accent/90 transition-colors text-center"
            >
              Enquire Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;