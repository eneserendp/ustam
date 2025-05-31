import { FaPaintRoller, FaHammer, FaWrench, FaTint, FaHome, FaTools } from 'react-icons/fa';

const services = [
  {
    name: 'Boya ve Badana',
    description: 'Profesyonel ekibimizle evinizin iç ve dış cephe boyama işlemlerini titizlikle gerçekleştiriyoruz. Su bazlı, plastik ve silikonlu boyalar kullanarak duvarlarınıza yeni bir görünüm kazandırıyoruz.',
    icon: FaPaintRoller,
    features: [
      'İç cephe boyama',
      'Dış cephe boyama',
      'Tavan boyama',
      'Ahşap boyama',
      'Antipas ve koruyucu boyama',
    ],
  },
  {
    name: 'Alçı ve Asma Tavan',
    description: 'Modern tasarımlar ve kaliteli işçilik ile mekanlarınızı yeniliyoruz. Alçıpan duvar, bölme duvar ve asma tavan sistemleri ile yaşam alanlarınızı istediğiniz şekilde düzenliyoruz.',
    icon: FaHammer,
    features: [
      'Alçıpan duvar yapımı',
      'Bölme duvar sistemleri',
      'Asma tavan uygulamaları',
      'Dekoratif tavan tasarımları',
      'Spot ve LED aydınlatma sistemleri',
    ],
  },
  {
    name: 'Fayans ve Seramik',
    description: 'Banyo, mutfak ve zeminleriniz için profesyonel fayans ve seramik döşeme hizmetleri sunuyoruz. Her türlü ebat ve desende fayans uygulaması yapıyoruz.',
    icon: FaWrench,
    features: [
      'Fayans döşeme',
      'Seramik kaplama',
      'Mozaik döşeme',
      'Granit döşeme',
      'Derz dolgu ve yenileme',
    ],
  },
  {
    name: 'Su Tesisatı',
    description: 'Su tesisatı tamir ve yenileme işlemlerinizi güvenle yapıyoruz. Pis su ve temiz su tesisatı, kaçak tespiti ve onarımı konularında uzman ekibimizle hizmetinizdeyiz.',
    icon: FaTint,
    features: [
      'Su kaçağı tespiti',
      'Tesisat yenileme',
      'Pis su gideri açma',
      'Lavabo ve batarya montajı',
      'Kalorifer tesisatı tamiri',
    ],
  },
  {
    name: 'Laminat Parke',
    description: 'Yaşam alanlarınız için dayanıklı ve şık laminat parke döşeme hizmeti veriyoruz. Garantili ürün ve işçilik ile zemin kaplamalarınızı yeniliyoruz.',
    icon: FaHome,
    features: [
      'Laminat parke döşeme',
      'Süpürgelik montajı',
      'Zemin hazırlığı',
      'Ses yalıtımı',
      'Parke cilalama',
    ],
  },
  {
    name: 'Genel Tadilat',
    description: 'Evinizin veya iş yerinizin komple tadilat işlerini üstleniyoruz. Mutfak, banyo yenileme ve genel tadilat işleriniz için anahtar teslim çözümler sunuyoruz.',
    icon: FaTools,
    features: [
      'Mutfak yenileme',
      'Banyo yenileme',
      'Kapı ve pencere montajı',
      'Elektrik tesisatı',
      'Mobilya montajı',
    ],
  },
];

export default function Services() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-blue-700 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Hizmetlerimiz</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Eviniz ve iş yeriniz için ihtiyacınız olan tüm tadilat ve dekorasyon hizmetlerini profesyonel ekibimizle sunuyoruz.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 ml-4">{service.name}</h2>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Profesyonel Hizmet için Bize Ulaşın
          </h2>
          <p className="text-gray-600 mb-6">
            Ücretsiz keşif ve fiyat teklifi için hemen iletişime geçin
          </p>
          <div className="space-x-4">
            <a
              href="tel:+905425246925"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Hemen Ara
            </a>
            <a
              href="/iletisim"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold border border-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              İletişim
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 