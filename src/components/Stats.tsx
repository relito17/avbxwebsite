import { Clock, CheckCircle, Star, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const stats = [
  {
    icon: Clock,
    number: '25+',
    label: 'Anos de Experiência',
    description: 'Décadas de excelência',
    color: 'from-amber-400 to-orange-500'
  },
  {
    icon: CheckCircle,
    number: '1000+',
    label: 'Projetos Concluídos',
    description: 'Sucessos comprovados',
    color: 'from-green-400 to-emerald-500'
  },
  {
    icon: Star,
    number: '100%',
    label: 'Taxa de Satisfação',
    description: 'Clientes satisfeitos',
    color: 'from-yellow-400 to-amber-500'
  },
  {
    icon: Users,
    number: '150+',
    label: 'Clientes Ativos',
    description: 'Parcerias duradouras',
    color: 'from-purple-400 to-indigo-500'
  }
];

export default function Stats() {
  return (
    <div id="stats-section" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
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

      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12 h-full w-full"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent transform skew-y-12 h-full w-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Números que <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">Impressionam</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-4 rounded-full"></div>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Nossa trajetória de sucesso em números
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100}>
              <div className="relative group h-full">
                {/* Glowing border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
                
                {/* Main card */}
                <div className="relative stat-card bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 group h-full">
                  
                  {/* Icon container with gradient */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="relative">
                      {/* Icon background glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                      <div className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${stat.color} shadow-lg group-hover:shadow-xl transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110`}>
                        <stat.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Stats content */}
                  <div className="text-center space-y-3">
                    <div className="text-5xl sm:text-6xl font-bold text-white group-hover:scale-110 transition-transform duration-500 tracking-tight">
                      {stat.number}
                    </div>
                    
                    {/* Animated underline */}
                    <div className="w-0 h-0.5 bg-gradient-to-r from-white/50 to-white/30 mx-auto group-hover:w-16 transition-all duration-500 rounded-full"></div>
                    
                    <div className="text-lg font-semibold text-white group-hover:text-yellow-200 transition-colors duration-300">
                      {stat.label}
                    </div>
                    
                    <div className="text-sm text-blue-200 group-hover:text-blue-100 transition-colors duration-300 opacity-80">
                      {stat.description}
                    </div>
                  </div>

                  {/* Shine effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                  
                  {/* Corner decorations */}
                  <div className="absolute top-3 right-3 w-2 h-2 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                  <div className="absolute bottom-3 left-3 w-1 h-1 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-0 group-hover:scale-100"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA section */}
        <ScrollReveal delay={400}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="text-white font-medium">Qualidade comprovada há mais de duas décadas</span>
              <Star className="h-5 w-5 text-yellow-400" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}