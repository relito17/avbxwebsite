import { useState } from 'react';
import PrivacyPolicies from './PrivacyPolicies';

export default function ContactForm() {
  const [showPolicies, setShowPolicies] = useState(false);
  const [acceptedPolicies, setAcceptedPolicies] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!acceptedPolicies) {
      alert('Por favor, aceite os termos e políticas antes de enviar.');
      return;
    }
  
    const formData = {
      nome: (document.getElementById('nome') as HTMLInputElement).value,
      apelido: (document.getElementById('apelido') as HTMLInputElement).value,
      razaoSocial: (document.getElementById('razaoSocial') as HTMLInputElement).value,
      telefone: (document.getElementById('telefone') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      mensagem: (document.getElementById('mensagem') as HTMLTextAreaElement).value,
    };
  
    try {
      const response = await fetch('https://hook.eu2.make.com/vo56bxsqrg9hlios0xlq4jr9tayvnc1t', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
      } else {
        alert('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };
  

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-700">
              Nome <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="nome"
              required
              className="form-input"
            />
          </div>
          <div>
            <label htmlFor="apelido" className="block text-sm font-medium text-gray-700">
              Apelido <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="apelido"
              required
              className="form-input"
            />
          </div>
        </div>

        <div>
          <label htmlFor="razaoSocial" className="block text-sm font-medium text-gray-700">
            Razão Social <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="razaoSocial"
            required
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">
            Telefone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="telefone"
            required
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Endereço de Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            className="form-input"
          />
        </div>

        <div>
          <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700">
            Mensagem <span className="text-red-500">*</span>
          </label>
          <textarea
            id="mensagem"
            rows={4}
            required
            className="form-input"
          ></textarea>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="policies"
            checked={acceptedPolicies}
            onChange={(e) => setAcceptedPolicies(e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="policies" className="ml-2 block text-sm text-gray-900">
            Aceito a{' '}
            <button
              type="button"
              onClick={() => setShowPolicies(true)}
              className="text-blue-600 hover:text-blue-500"
            >
              Política de Privacidade, Política de Cookies e Termos & Condições
            </button>
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>

      <PrivacyPolicies
        isOpen={showPolicies}
        onClose={() => setShowPolicies(false)}
      />
    </div>
  );
}