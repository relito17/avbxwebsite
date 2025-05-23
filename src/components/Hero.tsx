import { Building2, ArrowRight, Zap, CheckCircle, Award } from 'lucide-react';

export default function Hero() {
  return (
    <div id = "home" className="relative bg-gray-900 h-screen overflow-hidden">
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
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-blue-400/30 rotate-45 animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-indigo-400/40 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute top-1/3 left-20 w-2 h-8 bg-blue-300/20 animate-pulse delay-1500"></div>
        
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
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent transform -skew-y-12 w-full h-full"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-indigo-400/15 to-transparent transform skew-y-12 w-full h-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="w-full">
          <div className="text-center max-w-5xl mx-auto">
            
            {/* Company Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 group hover:bg-white/15 transition-all duration-500">
                <Award className="h-5 w-5 text-yellow-400 mr-2 animate-pulse" />
                <span className="text-white font-medium text-sm">25+ Anos de Excelência</span>
                <Award className="h-5 w-5 text-yellow-400 ml-2 animate-pulse" />
              </div>
            </div>

            {/* Animated Logo/Icon */}
            <div className="flex justify-center items-center mb-12 group">
              <div className="relative">
                {/* Glowing background */}
                <div className="absolute inset-0 bg-blue-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 transform scale-150"></div>
                {/* Icon container */}
                {/*<div className="relative flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                  <Building2 className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                </div> */}
                {/* Rotating ring */}
                <div className="absolute inset-0 border-2 border-blue-400/30 rounded-3xl animate-spin-slow"></div>
              </div>
            </div>

            {/* Main Title with Typing Effect */}
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
                <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                  AVBX
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Projetos
                </span>
              </h1>
              
              {/* Animated underline */}
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-8 rounded-full animate-pulse"></div>
            </div>

            {/* Enhanced Subtitle */}
            <div className="mb-12">
              <p className="text-xl sm:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-6">
                Especialistas em <span className="text-blue-400 font-semibold">Projetos Eléctricos</span>, 
                <span className="text-indigo-400 font-semibold"> ITED</span> e 
                <span className="text-purple-400 font-semibold"> ITUR</span>
              </p>
              
              <p className="text-lg text-white max-w-3xl mx-auto">
                Transformamos ideias em soluções elétricas e de telecomunicações com tecnologia de ponta e qualidade garantida
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { icon: Zap, text: 'Soluções Inovadoras' },
                { icon: CheckCircle, text: 'Qualidade Certificada' },
                { icon: Award, text: 'Experiência Comprovada' }
              ].map((feature, index) => (
                <div 
                  key={feature.text}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <feature.icon className="h-5 w-5 text-blue-400 mr-2" />
                  <span className="text-white text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              {/* Primary CTA */}
              <a
                href="#servicos"
                className="group relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden"
              >
                {/* Button background glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Nossos Serviços</span>
                <ArrowRight className="relative ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>

              {/* Secondary CTA */}
              <a
                href="#contactos"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl hover:bg-white/15 hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>Entre em Contato</span>
                <Building2 className="ml-2 h-5 w-5 transform group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>

            {/* Stats Preview */}
            <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[
                { number: '25+', label: 'Anos' },
                { number: '1000+', label: 'Projetos' },
                { number: '100%', label: 'Satisfação' }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center group"
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
         
    </div>
  );
}