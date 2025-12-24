import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: 'Início', path: '/' },
    { label: 'Sobre nós', path: '/sobre' },
    { label: 'Depoimentos', path: '/depoimentos' },
    { label: 'Demonstração', path: '/lead-collection' },
    { label: 'Compre agora', path: '/planos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      {/* Skip to content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-6 focus:py-3 focus:bg-accent focus:text-white focus:rounded-lg focus:shadow-xl transition-all font-medium"
      >
        Ir para o conteúdo principal
      </a>

      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section - Matching the Neuralign Brazil image colors */}
          <Link to="/" className="flex items-center group no-underline">
            <div className="flex items-baseline text-3xl md:text-4xl font-bold tracking-tight lowercase font-sans">
              <span className="text-[#fabc4e]">n</span>
              <span className="text-[#f48b57]">e</span>
              <span className="text-[#ef5a63]">u</span>
              <span className="text-[#e0446b]">r</span>
              <span className="text-[#a4619d]">a</span>
              <span className="text-[#715594]">l</span>
              <span className="text-[#514686]">i</span>
              <span className="text-[#383c76]">g</span>
              <span className="text-[#1f275b]">n</span>
              <div className="ml-1.5 mb-1 relative flex items-center justify-center w-8 h-8 rounded-full bg-green-600 shadow-sm overflow-hidden border border-green-700">
                <div className="absolute w-5 h-5 bg-yellow-400 transform rotate-45"></div>
                <div className="absolute w-3 h-3 bg-blue-800 rounded-full z-10 flex items-center justify-center">
                   <div className="w-full h-[1px] bg-white transform -rotate-12 opacity-80"></div>
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm uppercase tracking-wide font-medium transition-colors duration-200 ${
                  isActive(item.path) 
                    ? 'text-primary font-bold' 
                    : 'text-slate-500 hover:text-primary'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {/* Login Link */}
            <a
              href="https://ls.works/authCallback?orgPortal=true"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-wide font-medium text-slate-500 hover:text-primary transition-colors"
            >
              Login
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-slate-600 hover:text-primary focus:outline-none p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`block text-sm uppercase font-medium px-2 py-2 rounded-md ${
                  isActive(item.path) ? 'text-primary bg-slate-50' : 'text-slate-500 hover:bg-slate-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://ls.works/authCallback?orgPortal=true"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm uppercase font-medium px-2 py-2 text-slate-500 hover:bg-slate-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;