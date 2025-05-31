'use client';

import { useState } from 'react';

const galleryItems = [
  {
    id: 1,
    category: 'boya-badana',
    title: 'Salon Boyama',
    description: 'Modern renklerle salon yenileme projesi',
    imageBefore: '/images/once.png',
    imageAfter: '/images/sonrasi.png',
  },
  {
    id: 3,
    category: 'fayans',
    title: 'Banyo Yenileme',
    description: 'Komple banyo fayans değişimi',
    imageBefore: '/images/oncebanyo.png',
    imageAfter: '/images/banyosonra.png',
  },
  {
    id: 4,
    category: 'alci',
    title: 'Asma Tavan',
    description: 'Modern asma tavan uygulaması',
    imageBefore: '/images/onceasmatavan.png',
    imageAfter: '/images/sonraasmatavan.png',
  },
  {
    id: 5,
    category: 'parke',
    title: 'Parke Döşeme',
    description: 'Laminat parke yenileme projesi',
    imageBefore: '/images/onceasmatavan.png',
    imageAfter: '/images/sonrafayans.png',
  },
  {
    id: 6,
    category: 'tadilat',
    title: 'Komple Tadilat',
    description: 'Daire komple yenileme projesi',
    imageBefore: '/images/once.png',
    imageAfter: '/images/sonrasi.png',
  }
];

const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'boya-badana', name: 'Boya Badana' },
  { id: 'fayans', name: 'Fayans' },
  { id: 'alci', name: 'Alçı ve Asma Tavan' },
  { id: 'parke', name: 'Laminat Parke' },
  { id: 'tadilat', name: 'Genel Tadilat' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<null | {
    title: string;
    image: string;
  }>(null);

  const filteredGallery = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <div className="bg-blue-700 text-white py-16 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-4">Proje Galerimiz</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Tamamladığımız projelerin öncesi ve sonrası fotoğrafları ile çalışmalarımızı inceleyin.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid grid-cols-2 gap-2 p-4">
                <div className="relative">
                  <div className="aspect-square flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={item.imageBefore}
                      alt={`${item.title} öncesi`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-2 text-gray-600 font-medium">Öncesi</p>
                </div>
                <div className="relative">
                  <div className="aspect-square flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={item.imageAfter}
                      alt={`${item.title} sonrası`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-2 text-gray-600 font-medium">Sonrası</p>
                </div>
              </div>
              <div className="p-6 border-t">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Projeniz için Bizimle İletişime Geçin
          </h2>
          <p className="text-xl text-gray-600 mb-8">
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
              İletişime Geç
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 