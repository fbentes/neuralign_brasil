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
    <header className="sticky top-0 z-50 bg-white shadow-sm font-sans">
      {/* Skip to content link */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-6 focus:py-3 focus:bg-accent focus:text-white focus:rounded-lg focus:shadow-xl transition-all font-medium"
      >
        Ir para o conteúdo principal
      </a>

      <div className="container mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col items-center">
          
          {/* Top Row: Centered Logo */}
          <div className="flex justify-between w-full lg:w-auto lg:justify-center items-center mb-0 lg:mb-6 relative">
            <Link to="/" className="flex items-center group no-underline hover:opacity-90 transition-opacity">
              {/* Custom Logo Text */}
              <div className="flex items-baseline text-4xl md:text-5xl font-bold tracking-tighter font-sans select-none">
                <span className="text-[#fabc4e]">n</span>
                <span className="text-[#f48b57]">e</span>
                <span className="text-[#ef5a63]">u</span>
                <span className="text-[#e0446b]">r</span>
                <span className="text-[#a4619d]">a</span>
                <span className="text-[#715594]">l</span>
                <span className="text-[#514686]">i</span>
                <span className="text-[#383c76]">g</span>
                <span className="text-[#1f275b]">n</span>
              </div>
              
              {/* Brazil Flag Icon */}
              <div className="ml-3 mt-1 w-10 h-7 bg-green-600 rounded-sm relative shadow-sm border border-green-700 overflow-hidden flex items-center justify-center">
                 <div className="absolute w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[14px] border-b-yellow-400 rotate-0 -translate-y-[6px]"></div>
                 <div className="absolute w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[14px] border-t-yellow-400 rotate-0 translate-y-[6px]"></div>
                 <div className="absolute w-3.5 h-3.5 bg-blue-800 rounded-full z-10 flex items-center justify-center">
                    <div className="w-full h-[1px] bg-white transform -rotate-12 opacity-90"></div>
                 </div>
              </div>
            </Link>

            {/* Mobile Menu Button (Absolute positioned on mobile) */}
            <div className="lg:hidden absolute right-0 top-1/2 transform -translate-y-1/2">
              <button
                className="text-slate-600 hover:text-primary focus:outline-none p-2"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Bottom Row: Centered Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-sm md:text-base tracking-wide font-normal transition-colors duration-200 ${
                  isActive(item.path) 
                    ? 'text-slate-800 font-medium' 
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
              className="text-sm md:text-base tracking-wide font-normal text-slate-500 hover:text-primary transition-colors"
            >
              Login
            </a>
          </nav>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-slate-100 flex flex-col space-y-3 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`block text-center text-base font-medium px-4 py-3 rounded-lg ${
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
              className="block text-center text-base font-medium px-4 py-3 text-slate-500 hover:bg-slate-50 rounded-lg"
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