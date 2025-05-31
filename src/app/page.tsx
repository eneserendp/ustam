import Image from "next/image";
import Link from 'next/link';
import { FaPaintRoller, FaHammer, FaWrench, FaTint } from 'react-icons/fa';
import HomeSlider from '@/components/HomeSlider';
import WallPaintSimulator from '@/components/WallPaintSimulator';

const services = [
  {
    name: 'Boya ve Badana',
    description: 'Profesyonel boya ve badana hizmetleri ile yaşam alanlarınıza yeni bir görünüm kazandırıyoruz.',
    icon: FaPaintRoller,
  },
  {
    name: 'Alçı ve Asma Tavan',
    description: 'Modern tasarımlar ve kaliteli işçilik ile mekanlarınızı yeniliyoruz.',
    icon: FaHammer,
  },
  {
    name: 'Fayans ve Seramik',
    description: 'Banyo ve mutfaklarınız için uzman fayans döşeme hizmetleri sunuyoruz.',
    icon: FaWrench,
  },
  {
    name: 'Su Tesisatı',
    description: 'Su tesisatı tamir ve yenileme işlemlerinizi güvenle yapıyoruz.',
    icon: FaTint,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section with Slider */}
      <div className="pt-16">
        <HomeSlider />
      </div>

      {/* Services Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Hizmetlerimiz</h2>
            <p className="mt-4 text-lg text-gray-600">
              Eviniz için ihtiyacınız olan tüm tadilat ve dekorasyon hizmetlerini sunuyoruz
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-blue-600 mb-4">
                  <service.icon className="w-12 h-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wall Paint Simulator */}
      <WallPaintSimulator />

      {/* Why Choose Us Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Neden Bizi Seçmelisiniz?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-blue-700">20+</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-3">Yıllık Deneyim</h3>
              <p className="text-gray-600">
                Uzun yıllara dayanan tecrübemizle kaliteli hizmet sunuyoruz
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-blue-700">100+</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-3">Mutlu Müşteri</h3>
              <p className="text-gray-600">
                Müşteri memnuniyeti odaklı çalışma prensibiyle hizmet veriyoruz
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-24 h-24 mx-auto mb-4 flex items-center justify-center shadow-lg">
                <span className="text-4xl font-bold text-blue-700">%100</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-700 mb-3">Garanti</h3>
              <p className="text-gray-600">
                Yaptığımız tüm işlerde garanti ve güven veriyoruz
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Evinizi Yenilemek İçin Hemen İletişime Geçin
          </h2>
          <p className="text-xl mb-8">
            Ücretsiz keşif ve fiyat teklifi için bizi arayın
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </div>
  );
}
