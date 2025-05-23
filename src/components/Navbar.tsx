import { useState, useEffect } from 'react';
import { Building2, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Início' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#stats-section', label: 'Sobre' }
  ];

  return (
    <>
      
      {/* Main Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`} style={{ top: 0 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo Section */}
            <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="relative">
                {/* Logo background glow - visible when scrolled */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl blur-lg transition-all duration-500 ${
                  isScrolled ? 'opacity-20 scale-110' : 'opacity-0 scale-100'
                }`}></div>
                
                {/* Logo container */}
                <div className={`relative flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 rounded-xl transition-all duration-500 transform group-hover:scale-110 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg' 
                    : 'bg-white/20 backdrop-blur-sm border border-white/30'
                }`}>
                  <Building2 className={`h-5 w-5 lg:h-6 lg:w-6 transition-colors duration-500 ${
                    isScrolled ? 'text-white' : 'text-white'
                  }`} />
                </div>
              </div>
              
              {/* Company Name */}
              <div className="ml-3 lg:ml-4">
                <div className={`text-lg lg:text-xl font-bold transition-colors duration-500 ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}>
                  AVBX <span className={`transition-colors duration-500 ${
                    isScrolled ? 'text-blue-600' : 'text-blue-300'
                  }`}>Projetos</span>
                </div>
                <div className={`text-xs transition-colors duration-500 ${
                  isScrolled ? 'text-gray-500' : 'text-white/80'
                }`}>
                  Soluções Elétricas
                </div>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white/90 hover:text-white'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{link.label}</span>
                  
                  {/* Animated underline */}
                  <div className={`absolute bottom-0 left-0 right-0 h-0.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    isScrolled ? 'bg-blue-600' : 'bg-white'
                  }`}></div>
                  
                  {/* Hover background */}
                  <div className={`absolute inset-0 rounded-lg transform scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ${
                    isScrolled ? 'bg-blue-50' : 'bg-white/10'
                  }`}></div>
                </a>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <a
                href="#contactos"
                className={`group relative inline-flex items-center px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:shadow-blue-500/25' 
                    : 'bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30'
                }`}
              >
                {/* Button glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur-lg transition-opacity duration-300 ${
                  isScrolled ? 'opacity-30 group-hover:opacity-50' : 'opacity-0'
                }`}></div>
                
                <span className="relative">Contactos</span>
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-xl"></div>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className={`px-4 py-6 space-y-4 ${
            isScrolled 
              ? 'bg-white/95 backdrop-blur-lg border-t border-gray-100' 
              : 'bg-gray-900/95 backdrop-blur-lg border-t border-white/20'
          }`}>
            
            {/* Mobile Navigation Links */}
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600' 
                    : 'text-white hover:bg-white/20'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <div className="pt-4">
              <a
                href="#contactos"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block w-full text-center px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg' 
                    : 'bg-white/20 backdrop-blur-sm text-white border border-white/30'
                }`}
              >
                Contactos
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}