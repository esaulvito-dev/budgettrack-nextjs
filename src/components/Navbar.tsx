"use client";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-white/90 backdrop-blur-lg shadow-sm'}`}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg gradient-hero flex items-center justify-center shadow-md">
              <span className="text-primary-foreground font-bold text-lg sm:text-xl">B</span>
            </div>
            <span className="font-bold text-lg sm:text-xl md:text-2xl">BudgetTrack</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {['Beneficios', 'Funcionalidades', 'Precio', 'FAQ'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm lg:text-base relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full">{item}</a>
            ))}
          </nav>
          <button className="md:hidden p-2 hover:bg-accent rounded-lg transition-all duration-300 cursor-pointer active:scale-95" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>
            <i className={`text-2xl transition-transform duration-300 ${menuOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          {['Beneficios', 'Funcionalidades', 'Precio', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-foreground font-medium text-base py-1" onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </div>
      )}
    </header>
  );
}
