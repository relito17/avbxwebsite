import { Lightbulb, Wifi, Award, Headphones } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const services = [
  {
    title: 'Projetos Eléctricos',
    description: 'Soluções elétricas completas para projetos residenciais e comerciais, garantindo eficiência e segurança.',
    icon: Lightbulb
  },
  {
    title: 'ITED',
    description: 'Infraestruturas de Telecomunicações em Edifícios com as mais recentes tecnologias e normas.',
    icon: Wifi
  },
  {
    title: 'ITUR',
    description:'Infraestruturas de Telecomunicações em Urbanizações com as mais recentes tecnologias e normas.',
    icon: Award
  },
  {
    title: 'Consultoria Técnica',
    description: 'Assessoria especializada para optimizar seus projetos e garantir conformidade com as normas.',
    icon: Headphones
  }
];

export default function Services() {
  return (
    <div id="servicos" className="py-32 bg-gradient-to-b from-white via-gray-50/30 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <ScrollReveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 section-heading mb-6">
              Nossos Serviços
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Soluções completas e profissionais para suas necessidades
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 150}>
              <div className="relative group h-full">
                {/* Animated border gradient */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-none animate-pulse"></div>
                
                {/* Main card */}
                <div className="relative bg-white rounded-2xl p-8 h-full border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50/30">
                  
                  {/* Floating icon container */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20"></div>
                    <div className="relative flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 group-hover:from-indigo-600 group-hover:to-purple-600 transition-all duration-500 shadow-lg group-hover:shadow-xl mx-auto transform group-hover:scale-110">
                      <service.icon className="h-10 w-10 text-white transform group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    
                    {/* Animated underline */}
                    <div className="w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto group-hover:w-12 transition-all duration-500 rounded-full"></div>
                    
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 flex justify-center">
          <div className="flex space-x-2">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}