import { Building2 } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-gray-900 h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
          alt="Modern building"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center">
          <div className="flex justify-center items-center mb-8">
            <Building2 className="h-16 w-16 text-blue-500" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            AVBX Projetoss
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Especialistas em Projetos Eléctricos, ITED e ITUR
          </p>
          <div className="mt-10">
            <a
              href="#servicos"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Nossos Serviços
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}