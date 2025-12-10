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
          ? 'bg-primary shadow-md py-3' // Dark Green background on scroll
          : 'bg-gradient-to-b from-black/70 to-transparent