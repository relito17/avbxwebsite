import { useState, useEffect } from 'react';
import { Building2, ArrowRight, Zap, CheckCircle, Award } from 'lucide-react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger reveal effect after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Intersection Observer for scroll-based reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    // Observe all reveal elements after initial mount
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div id="home" className="relative bg-gray-900 min-h-screen overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Modern building"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-blue-900/60 to-indigo-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-gray-900/30"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs - responsive sizes */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Geometric patterns - responsive positioning */}
        <div className="absolute top-16 right-4 sm:top-20 sm:right-20 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400/30 rotate-45 animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 left-4 sm:bottom-32 sm:left-16 w-2 h-2 sm:w-3 sm:h-3 bg-indigo-400/40 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute top-1/3 left-4 sm:left-20 w-1 h-6 sm:w-2 sm:h-8 bg-blue-300/20 animate-pulse delay-1500"></div>
        
        {/* Particle system */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Diagonal light beams */}
      <div className="absolute inset-0 opacity-10 sm:opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent transform -skew-y-12 w-full h-full"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-indigo-400/15 to-transparent transform skew-y-12 w-full h-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-20 md:py-24 lg:py-32 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="w-full">
          <div className="text-center max-w-5xl mx-auto">
            
            {/* Company Badge - with reveal effect */}
            <div className={`flex justify-center mb-6 sm:mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 sm:px-6 sm:py-3 border border-white/20 group hover:bg-white/15 transition-all duration-500">
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 mr-2 animate-pulse" />
                <span className="text-white font-medium text-xs sm:text-sm">25+ Anos de Excelência</span>
                <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 ml-2 animate-pulse" />
              </div>
            </div>

            {/* Animated Logo/Icon - with reveal effect */}
            <div className={`flex justify-center items-center mb-8 sm:mb-10 lg:mb-12 group transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <div className="relative">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-blue-500 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 transform scale-125 sm:scale-150"></div>
                {/* Rotating ring */}
                <div className="absolute inset-0 border-2 border-blue-400/30 rounded-2xl sm:rounded-3xl animate-spin-slow"></div>
              </div>
            </div>

            {/* Main Title with reveal effect */}
            <div className={`mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-3 sm:mb-4 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                  AVBX
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Projetos
                </span>
              </h1>
              
              {/* Animated underline - with reveal effect */}
              <div className={`w-20 sm:w-24 lg:w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 sm:mb-8 rounded-full animate-pulse transition-all duration-1000 delay-500 ${
                isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`}></div>
            </div>

            {/* Enhanced Subtitle - with reveal effect */}
            <div className={`mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-4 sm:mb-6">
                Especialistas em <span className="text-blue-400 font-semibold">Projetos Eléctricos</span>, 
                <span className="text-indigo-400 font-semibold"> ITED</span> e 
                <span className="text-purple-400 font-semibold"> ITUR</span>
              </p>
              
              <p className="text-sm sm:text-base lg:text-lg text-white max-w-3xl mx-auto leading-relaxed">
                Transformamos ideias em soluções elétricas e de telecomunicações com tecnologia de ponta e qualidade garantida
              </p>
            </div>

            {/* Feature Highlights - with staggered reveal effect */}
            <div className={`flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 lg:mb-12 px-4 sm:px-0 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {[
                { icon: Zap, text: 'Soluções Inovadoras' },
                { icon: CheckCircle, text: 'Qualidade Certificada' },
                { icon: Award, text: 'Experiência Comprovada' }
              ].map((feature, index) => (
                <div 
                  key={feature.text}
                  className={`flex items-center bg-white/5 backdrop-blur-sm rounded-full px-3 py-2 sm:px-4 sm:py-2 border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ 
                    transitionDelay: `${800 + index * 100}ms`,
                    animationDelay: `${index * 200}ms` 
                  }}
                >
                  <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mr-2 flex-shrink-0" />
                  <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons - with reveal effect */}
            <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}>
              {/* Primary CTA */}
              <a
                href="#servicos"
                className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
              >
                {/* Button background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Nossos Serviços</span>
                <ArrowRight className="relative ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>

              {/* Secondary CTA */}
              <a
                href="#contactos"
                className="w-full sm:w-auto group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl sm:rounded-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Entre em Contato</span>
                <Building2 className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transform group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>

            {/* Stats Preview - with staggered reveal effect */}
            <div className={`grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-lg sm:max-w-xl lg:max-2xl mx-auto px-4 sm:px-0 transition-all duration-1000 delay-1200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {[
                { number: '25+', label: 'Anos' },
                { number: '1000+', label: 'Projetos' },
                { number: '100%', label: 'Satisfação' }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`text-center group transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
                  }`}
                  style={{ 
                    transitionDelay: `${1300 + index * 150}ms`,
                    animationDelay: `${index * 300}ms` 
                  }}
                >
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}