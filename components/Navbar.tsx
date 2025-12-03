import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the change earlier for a smoother feel
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'Visit Us', href: '#location' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled || isOpen 
          ? 'bg-sand-100/80 backdrop-blur-md shadow-lg py-4' 
          : 'bg-transparent py-10 md:py-14'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          className={`font-bold tracking-tight text-earth-900 z-50 transition-all duration-500 ease-in-out ${
            scrolled ? 'text-2xl' : 'text-3xl md:text-5xl'
          }`}
        >
          RĀW<span className="text-sand-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ${
                scrolled ? 'text-earth-900 hover:text-sand-500' : 'text-earth-900/90 hover:text-earth-900'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button className={`flex items-center gap-2 px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
            scrolled 
              ? 'bg-earth-900 text-white hover:bg-earth-800' 
              : 'bg-earth-900 text-white hover:bg-earth-800 scale-110 origin-right'
          }`}>
            <ShoppingBag size={18} />
            <span className="text-sm font-semibold tracking-wide">Order</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-earth-900 focus:outline-none p-2"
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-sand-100/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-light text-earth-900 hover:text-sand-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="mt-8 bg-earth-900 text-white px-10 py-4 rounded-full text-xl font-medium hover:bg-earth-800 transition-colors w-3/4 max-w-xs shadow-xl">
            Order Pickup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;