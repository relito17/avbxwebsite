import { useState } from 'react';
import PrivacyPolicies from './PrivacyPolicies';
import { Building2 } from 'lucide-react';

export default function Footer() {
  const [showPolicies, setShowPolicies] = useState(false);

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),transparent)]"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Logo and Company Name Container */}
          <div className="flex items-center justify-center mb-8">
            {/* Logo container with enhanced styling */}
            <div className="relative flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-2xl transition-all duration-700 transform hover:scale-110 bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-xl border border-white/20 shadow-2xl shadow-blue-500/10">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent"></div>
              <Building2 className="relative h-7 w-7 lg:h-8 lg:w-8 transition-all duration-700 text-white drop-shadow-lg" />
            </div>
            
            {/* Company Name with enhanced typography */}
            <div className="ml-4 lg:ml-6">
              <div className="text-2xl lg:text-3xl font-bold transition-all duration-500 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-sm">
                AVBX <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projetos</span>
              </div>
              <div className="text-sm lg:text-base font-medium transition-colors duration-500 text-blue-200/90 tracking-wide mt-1">
                Soluções Elétricas
              </div>
            </div>
          </div>

          {/* Enhanced spacing and styling for footer text */}
          <div className="space-y-4">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8"></div>
            
            <p className="text-base lg:text-lg text-gray-300 font-medium">
              &copy; {new Date().getFullYear()} AVBX Projetos. Todos os direitos reservados.
            </p>
            <p className="text-sm text-gray-400">
              Designed by <a href="https://arxautomate.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium hover:drop-shadow-sm">ARxAutomate</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}