import { Mail, Phone, MapPin, Clock, MessageCircle, Globe } from 'lucide-react';
import ContactInfoCard from './ContactInfoCard';
import ScrollReveal from './ScrollReveal';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    info: <a href="mailto:abastos@avbx.pt" className="hover:text-blue-600 transition-colors duration-300 font-medium">abastos@avbx.pt</a>,
    subtitle: 'Resposta em 24h',
    color: 'from-red-400 to-pink-500',
    bgColor: 'group-hover:from-red-50 group-hover:to-pink-50'
  },
  {
    icon: Phone,
    title: 'Telefone',
    info: <a href="tel:+351215503366" className="hover:text-blue-600 transition-colors duration-300 font-medium">+351 21 550 3366</a>,
    subInfo: '(Chamada para rede fixa nacional)',
    subtitle: 'Seg-Sex: 9h-18h',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'group-hover:from-green-50 group-hover:to-emerald-50'
  },
  {
    icon: MapPin,
    title: 'Localização',
    info: (
      <a 
        href="https://www.google.pt/maps/place/AVBX+Projectos/@38.7590057,-9.1777985,17z/data=!3m1!4b1!4m6!3m5!1s0xd1932dbbbbe6839:0x844c8a9eebf74d46!8m2!3d38.7590015!4d-9.1752182!16s%2Fg%2F1tkrn1cj?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition-colors duration-300 font-medium"
      >
        R. António Quadros, 9H<br />1600-812 - Lisboa
      </a>
    ),
    subtitle: 'Lisboa, Portugal',
    color: 'from-blue-400 to-indigo-500',
    bgColor: 'group-hover:from-blue-50 group-hover:to-indigo-50'
  }
];

const additionalInfo = [
  {
    icon: Clock,
    title: 'Horário de Funcionamento',
    details: [
      'Segunda a Sexta: 9:00 - 18:00',
      'Sábado: Fechado',
      'Domingo: Fechado'
    ]
  },
  {
    icon: MessageCircle,
    title: 'Tempo de Resposta',
    details: [
      'Email: Até 24 horas',
      'Telefone: Imediato',
      'Orçamentos: 2-3 dias úteis'
    ]
  },
  {
    icon: Globe,
    title: 'Área de Atuação',
    details: [
      'Portugal & Estrangeiro',
      'Deslocações nacionais',
      'Projetos remotos'
    ]
  }
];

export default function Contact() {
  return (
    <div id="contactos" className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50/30 py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-indigo-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-0 w-48 h-48 bg-purple-200/10 rounded-full blur-2xl animate-pulse delay-500"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400/20 rotate-45 animate-bounce delay-1000"></div>
        <div className="absolute top-3/4 right-20 w-3 h-3 bg-indigo-400/30 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-8 bg-purple-400/20 animate-pulse delay-1500"></div>
      </div>

      {/* Gradient overlay lines */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform -skew-y-12"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-indigo-500/20 to-transparent transform skew-y-12"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-blue-100/50 rounded-full px-4 py-2 mb-6">
              <MessageCircle className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-700 text-sm font-medium">Contacto Direto</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 section-heading mb-6">
              Entre em Contato
            </h2>
            
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Estamos aqui para responder a todas as suas questões e transformar suas ideias em realidade
            </p>
          </div>
        </ScrollReveal>

        {/* Main Contact Cards */}
        <div className="mb-20">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
            {contactInfo.map((info, index) => (
              <ScrollReveal key={info.title} delay={index * 150}>
                <div className="group relative h-full">
                  {/* Animated border glow */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${info.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm`}></div>
                  
                  {/* Main card */}
                  <div className={`relative bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 group-hover:bg-gradient-to-br group-hover:from-white ${info.bgColor || 'group-hover:to-gray-50/30'} h-full`}>
                    
                    {/* Icon with animated background */}
                    <div className="relative mb-6">
                      <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                      <div className={`relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${info.color} shadow-lg group-hover:shadow-xl mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <info.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center space-y-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                        {info.title}
                      </h3>
                      
                      {/* Main info */}
                      <div className="text-gray-700 leading-relaxed">
                        {info.info}
                      </div>
                      
                      {/* Sub info */}
                      {info.subInfo && (
                        <div className="text-sm text-gray-500 italic">
                          {info.subInfo}
                        </div>
                      )}
                      
                      {/* Subtitle */}
                      <div className="text-sm font-medium text-blue-600 bg-blue-50 rounded-full px-3 py-1 inline-block">
                        {info.subtitle}
                      </div>
                    </div>

                    {/* Hover shine effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Additional Information Section */}
        <ScrollReveal delay={300}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-12"></div>
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform skew-y-12"></div>
            </div>

            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
                Informações Adicionais
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {additionalInfo.map((item, index) => (
                  <div key={item.title} className="text-center group">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm mx-auto mb-4 group-hover:bg-white/30 transition-colors duration-300">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    
                    <h4 className="text-lg font-semibold text-white mb-4">
                      {item.title}
                    </h4>
                    
                    <div className="space-y-2">
                      {item.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="text-blue-100 text-sm">
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Call-to-Action */}
        <ScrollReveal delay={400}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl px-8 py-4 border border-blue-200/50 shadow-lg">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                ))}
              </div>
              <span className="text-gray-700 font-medium">
                Pronto para dar vida ao seu próximo projeto?
              </span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-400 rounded-full animate-pulse" style={{ animationDelay: `${(i + 5) * 200}ms` }}></div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}