import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import ContactInfoCard from './ContactInfoCard';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    info: 'abastos@avbx.pt'
  },
  {
    icon: Phone,
    title: 'Telefone',
    info: '+351 965 009 889',
    subInfo: '(Chamada para rede móvel)'
  },
  {
    icon: MapPin,
    title: 'Localização',
    info: (
      <a 
        href="https://www.google.pt/maps/place/AVBX+Projectos/@38.7590057,-9.1777985,17z/data=!3m1!4b1!4m6!3m5!1s0xd1932dbbbbe6839:0x844c8a9eebf74d46!8m2!3d38.7590015!4d-9.1752182!16s%2Fg%2F1tkrn1cj?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        R. António Quadros, 9H<br />1600-812 - Lisboa
      </a>
    )
  }
];

export default function Contact() {
  return (
    <div id="contactos" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Entre em Contato
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Estamos aqui para responder a todas as suas questões
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            {contactInfo.map((info) => (
              <ContactInfoCard
                key={info.title}
                icon={info.icon}
                title={info.title}
                info={info.info}
                subInfo={info.subInfo}
              />
            ))}
          </div>
        </div>

        <div className="mt-20">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
