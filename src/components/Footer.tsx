import { useState } from 'react';
import PrivacyPolicies from './PrivacyPolicies';
import { Building2 } from 'lucide-react';

export default function Footer() {
  const [showPolicies, setShowPolicies] = useState(false);
  
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Building2 className="h-12 w-12 text-blue-500 hover-scale" />
          </div>
          <p className="mt-8 text-base text-gray-400">
            &copy; {new Date().getFullYear()} AVBX Projetos. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-sm text-gray-500">
  Designed by <a href="https://iridescent-bublanina-16e72b.netlify.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">ARxAutomate</a>
</p>

          <div className="mt-4 text-sm text-gray-400 space-x-4">
            
            <button
              type="button"
              onClick={() => setShowPolicies(true)}
              className="text-blue-500 hover:text-blue-400 underline"
              
            >
              Política de Privacidade ||  Política de Cookies || Termos & Condições
            </button>
            <PrivacyPolicies
                    isOpen={showPolicies}
                    onClose={() => setShowPolicies(false)}
                  />
          </div>
        </div>
      </div>
    </footer>
  );
}
