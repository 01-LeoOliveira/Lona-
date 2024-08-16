import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = () => {
  const phoneNumber = '5591982690087'; // Substitua pelo seu número de WhatsApp

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full text-white shadow-lg hover:bg-green-600 transition-all"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppIcon;
