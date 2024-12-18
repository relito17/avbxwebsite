interface PrivacyPoliciesProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicies({ isOpen, onClose }: PrivacyPoliciesProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-3xl max-h-[80vh] overflow-y-auto">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Política de Privacidade</h2>
            <p className="text-gray-600">
            A <strong>AVBX Projetos</strong> está comprometida em proteger a sua privacidade. Esta política descreve como recolhemos, utilizamos e protegemos as suas informações pessoais: 1. <strong>Recolha de Informações</strong>: Recolhemos informações pessoais apenas quando necessário, como o nome, endereço de e-mail, número de telefone, e qualquer outra informação fornecida através do formulário de contacto. Estas informações são usadas exclusivamente para fins de comunicação e prestação de serviços solicitados. 2. <strong>Utilização das Informações</strong>: As informações fornecidas serão utilizadas para: - Responder a pedidos de contacto; - Enviar informações ou atualizações relacionadas aos nossos serviços; - Cumprir obrigações legais ou regulatórias, se aplicável. 3. <strong>Proteção das Informações</strong>: Garantimos que as suas informações pessoais são tratadas de forma confidencial, utilizando medidas técnicas e organizacionais apropriadas para prevenir acessos não autorizados, perda, alteração ou divulgação. 4. <strong>Partilha de Dados</strong>: Não partilhamos as suas informações pessoais com terceiros, exceto quando exigido por lei ou com o seu consentimento prévio. 5. <strong>Direitos do Utilizador</strong>: Você tem o direito de acessar, corrigir ou solicitar a exclusão dos seus dados pessoais. Para exercer esses direitos, entre em contacto connosco através do formulário disponível no site. 6. <strong>Alterações a Esta Política</strong>: Podemos atualizar esta política de privacidade periodicamente. Recomendamos que consulte esta página regularmente para se manter informado sobre quaisquer alterações.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Política de Cookies</h2>
            <p className="text-gray-600">
            O website da <strong>AVBX Projetos</strong> utiliza cookies para melhorar a experiência do utilizador. 1. <strong>O Que São Cookies?</strong>: Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um site. Eles ajudam a melhorar o desempenho do site e a personalizar a experiência do utilizador. 2. <strong>Tipos de Cookies Utilizados</strong>: - <strong>Cookies Essenciais</strong>: Necessários para o funcionamento do website; - <strong>Cookies de Desempenho</strong>: Coletam informações anônimas sobre como os utilizadores interagem com o site; - <strong>Cookies de Funcionalidade</strong>: Lembram as suas preferências para uma experiência personalizada. 3. <strong>Gestão de Cookies</strong>: Ao continuar a utilizar o nosso site, você concorda com o uso de cookies. Pode, no entanto, configurar o seu navegador para desativar ou excluir cookies, mas isso pode impactar a funcionalidade do site. 4. <strong>Alterações à Política de Cookies</strong>: Esta política pode ser atualizada a qualquer momento. Aconselhamos que a reveja periodicamente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Termos & Condições</h2>
            <p className="text-gray-600">
            Estes termos regulam o uso do website e dos serviços da <strong>AVBX Projetos</strong>. Ao utilizar nosso website ou serviços, você concorda com os seguintes termos: 1. <strong>Uso do Website</strong>: - O conteúdo deste site é fornecido apenas para fins informativos; - Não garantimos que o site estará sempre disponível ou isento de erros. 2. <strong>Serviços Oferecidos</strong>: - Os serviços de projetos elétricos, ITED e ITUR são prestados de acordo com normas técnicas e regulatórias aplicáveis; - Qualquer orçamento fornecido é válido apenas pelo período especificado no documento. 3. <strong>Responsabilidades do Utilizador</strong>: - O utilizador compromete-se a fornecer informações verdadeiras ao utilizar o formulário de contacto; - É proibido o uso do site para fins ilícitos ou que violem direitos de terceiros. 4. <strong>Propriedade Intelectual</strong>: - Todo o conteúdo do site, incluindo textos, imagens e logotipos, é propriedade da AVBX Projetos, sendo proibida a sua reprodução sem autorização prévia. 5. <strong>Alterações aos Termos</strong>: - Reservamo-nos o direito de alterar estes termos a qualquer momento. As alterações entram em vigor a partir da sua publicação no site.
            </p>
          </section>

          <button
            onClick={onClose}
            className="mt-6 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}