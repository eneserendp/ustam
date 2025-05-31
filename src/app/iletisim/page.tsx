'use client';

import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const contactInfo = [
  {
    icon: FaPhone,
    title: 'Telefon',
    content: '+90 542 524 69 25',
    href: 'tel:+905425246925',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    content: '+90 541 514 39 03',
    href: 'https://wa.me/905415143903',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Adres',
    content: 'Çankaya, Ankara',
    href: 'https://maps.google.com/?q=Çankaya,Ankara',
  },
  {
    icon: FaClock,
    title: 'Çalışma Saatleri',
    content: 'Pzt-Cmt: 09:00-18:00',
    href: '#',
  },
];

export default function Contact() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-blue-700 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">İletişim</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Tadilat ve dekorasyon işleriniz için bize ulaşın. Ücretsiz keşif ve fiyat teklifi için hemen arayın.
          </p>
        </div>
      </div>

      {/* Contact Info & Map */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">İletişim Bilgileri</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {contactInfo.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-start p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <div className="bg-blue-100 p-3 rounded-full">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.content}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Map */}
          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-8">Konum</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97836.62266012257!2d32.78373591640625!3d39.92324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0842b8d!2s%C3%87ankaya%2FAnkara!5e0!3m2!1str!2str!4v1647789456789!5m2!1str!2str"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
} 