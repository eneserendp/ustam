import { FaCheckCircle, FaUsers, FaHandshake, FaClock } from 'react-icons/fa';

const values = [
  {
    icon: FaCheckCircle,
    title: 'Kalite',
    description: 'En kaliteli malzemeler ve işçilik ile müşterilerimize hizmet veriyoruz.',
  },
  {
    icon: FaUsers,
    title: 'Deneyim',
    description: '20 yılı aşkın sektör deneyimimiz ile güvenilir çözümler sunuyoruz.',
  },
  {
    icon: FaHandshake,
    title: 'Güven',
    description: 'Dürüst ve şeffaf çalışma prensibiyle müşterilerimizin güvenini kazanıyoruz.',
  },
  {
    icon: FaClock,
    title: 'Zamanında Teslimat',
    description: 'Projelerimizi söz verdiğimiz sürede tamamlayarak teslim ediyoruz.',
  },
];

export default function About() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-blue-700 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Hakkımızda</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            20 yıllık tecrübemiz ve uzman ekibimizle Ankara&apos;da kaliteli tadilat ve dekorasyon hizmetleri sunuyoruz.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Profesyonel Tadilat ve Dekorasyon Hizmetleri
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                2004 yılından bu yana Ankara ve çevresinde faaliyet gösteren firmamız,
                müşterilerimizin yaşam alanlarını hayallerindeki gibi düzenlemek için
                çalışıyor.
              </p>
              <p>
                Deneyimli ustalarımız ve teknik ekibimizle, her projeye özel çözümler
                üreterek müşterilerimizin memnuniyetini en üst düzeyde tutuyoruz.
              </p>
              <p>
                Kullandığımız kaliteli malzemeler ve titiz işçiliğimiz ile
                gerçekleştirdiğimiz tüm projelerimizde müşterilerimize garanti veriyoruz.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-700">Yıllık Deneyim</div>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-700">Tamamlanan Proje</div>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700">Müşteri Memnuniyeti</div>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">Uzman Personel</div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <value.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gray-50 rounded-lg p-8 text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Projeniz için Bizimle İletişime Geçin
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Ücretsiz keşif ve fiyat teklifi için hemen arayın
          </p>
          <div className="space-x-4">
            <a
              href="tel:+905555555555"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300"
            >
              Hemen Ara
            </a>
            <a
              href="/iletisim"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold border border-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              İletişime Geç
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 