'use client';

import { useState } from 'react';

const colors = [
  { name: 'Fildişi Beyaz', value: '#FFFFF0' },
  { name: 'Açık Gri', value: '#F5F5F5' },
  { name: 'Bej', value: '#F5F5DC' },
  { name: 'Krem', value: '#FAFAD2' },
  { name: 'Açık Mavi', value: '#ADD8E6' },
  { name: 'Gök Mavisi', value: '#87CEEB' },
  { name: 'Mint Yeşili', value: '#98FF98' },
  { name: 'Açık Yeşil', value: '#90EE90' },
  { name: 'Açık Sarı', value: '#FFFFE0' },
  { name: 'Şeftali', value: '#FFDAB9' },
  { name: 'Pudra Pembe', value: '#FFE4E1' },
  { name: 'Lila', value: '#E6E6FA' },
  { name: 'Lavanta', value: '#967BB6' },
  { name: 'Açık Turkuaz', value: '#AFEEEE' },
  { name: 'Somon', value: '#FFA07A' },
  { name: 'Açık Kahve', value: '#DEB887' }
];

export default function WallPaintSimulator() {
  const [selectedColor, setSelectedColor] = useState(colors[0].value);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Duvar Boyama Simülasyonu
          </h2>
          <p className="text-xl text-gray-600">
            Duvarınızın yeni rengini seçin ve nasıl görüneceğini görün
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Simülasyon Alanı */}
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <div 
              className="absolute inset-0 transition-colors duration-300"
              style={{ backgroundColor: selectedColor }}
            >
              {/* Duvar Dokusu Efekti */}
              <div className="absolute inset-0 bg-[url('/images/wall-texture.png')] opacity-10"></div>
              
              {/* Duvar Dekorasyonları */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-40">
                <img 
                  src="/images/saat.png" 
                  alt="Duvar saati"
                  className="w-full h-auto object-contain"
                />
              </div>
              
              {/* Mobilya ve Dekor Öğeleri */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4">
                <img 
                  src="/images/furniture-silhouette.png" 
                  alt="Mobilya silueti"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Renk Seçim Alanı */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Renk Seçin
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`flex items-center p-2 rounded-lg transition-all ${
                    selectedColor === color.value
                      ? 'ring-2 ring-blue-500 shadow-md'
                      : 'hover:shadow-md'
                  }`}
                >
                  <div
                    className="w-6 h-6 rounded-full shadow-inner"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <span className="ml-2 text-sm text-gray-700">{color.name}</span>
                </button>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-medium text-gray-900 mb-2">Öneriler:</h4>
              <ul className="text-gray-600 space-y-2">
                <li>• Açık renkler mekanı daha geniş gösterir</li>
                <li>• Koyu renkler daha samimi bir ortam yaratır</li>
                <li>• Doğal ışık miktarını göz önünde bulundurun</li>
                <li>• Mobilyalarınızla uyumlu renkler seçin</li>
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="/iletisim"
                className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Ücretsiz Keşif İsteyin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 