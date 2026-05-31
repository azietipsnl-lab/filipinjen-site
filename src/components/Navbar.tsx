import React, { useState, useEffect } from 'react';
import { Menu, X, Palmtree } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  const NavLink = ({ href, children, mobile }: { href: string; children: React.ReactNode; mobile?: boolean }) => {
    const isAnchor = href.startsWith('#');
    const to = isAnchor ? (isHome ? href : `/${href}`) : href;
    
    if (isAnchor && isHome) {
      return (
        <a 
          href={href} 
          onClick={() => mobile && setIsMobileMenuOpen(false)}
          className={cn(
            "text-sm font-medium hover:text-ph-sun transition-colors",
            mobile && "text-lg py-2"
          )}
        >
          {children}
        </a>
      );
    }

    return (
      <Link 
        to={to} 
        onClick={() => mobile && setIsMobileMenuOpen(false)}
        className={cn(
          "text-sm font-medium hover:text-ph-sun transition-colors",
          mobile && "text-lg py-2"
        )}
      >
        {children}
      </Link>
    );
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled || !isHome ? "bg-ph-sand/90 backdrop-blur-md shadow-sm border-b border-black/5" : "bg-transparent text-white"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Palmtree className="w-8 h-8 text-ph-sun" />
          <span className={cn(
            "font-serif text-2xl font-bold tracking-tight",
            isScrolled || !isHome ? "text-ph-green" : "text-white"
          )}>
            FILIPIJNEN<span className="text-ph-sun">.NL</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#tours">Tours</NavLink>
          <NavLink href="#tips">Travel Tips</NavLink>
          <NavLink href="#booking">Booking</NavLink>
          <Link 
            to="/booking" 
            className="px-5 py-2 bg-ph-green text-white rounded-full text-sm font-medium hover:bg-ph-green/90 transition-all shadow-lg shadow-ph-green/20"
          >
            Plan Your Trip
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn(
            "md:hidden",
            isScrolled || !isHome ? "text-ph-green" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black/5 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300 shadow-xl">
          <NavLink href="#tours" mobile>Tours</NavLink>
          <NavLink href="#tips" mobile>Travel Tips</NavLink>
          <NavLink href="#booking" mobile>Booking</NavLink>
          <Link 
            to="/booking"
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-5 py-3 bg-ph-green text-white rounded-xl text-center font-bold uppercase tracking-widest text-xs"
          >
            Plan Your Trip
          </Link>
        </div>
      )}
    </nav>
  );
}
