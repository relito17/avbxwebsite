import { Lightbulb, Wifi, Award, Headphones } from 'lucide-react';

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
    <div id="servicos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Soluções completas e profissionais para suas necessidades
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="relative group">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900">{service.title}</h3>
                <p className="mt-4 text-base text-gray-500 text-center">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}