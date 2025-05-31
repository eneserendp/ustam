'use client';

import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  const phoneNumber = '905415143903'; // WhatsApp numarası
  const message = 'Merhaba, web siteniz üzerinden ulaşıyorum. Bilgi almak istiyorum.';
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="WhatsApp ile iletişime geç"
    >
      <FaWhatsapp className="w-6 h-6" />
    </button>
  );
} 