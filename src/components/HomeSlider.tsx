'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    id: 1,
    title: 'Profesyonel Boya Hizmeti',
    description: 'Uzman ekibimizle evinizin tüm boya ve tadilat işlerini titizlikle yapıyoruz',
    buttonText: 'Teklif Al',
    buttonLink: '/iletisim',
    gradient: 'from-blue-600 to-blue-900',
    backgroundImage: '14.png'
  },
  {
    id: 2,
    title: 'Kapsamlı Tadilat ve Renovasyon',
    description: 'Alçı, sıva, fayans ve her türlü tadilat işleriniz için buradayız',
    buttonText: 'Hizmetlerimiz',
    buttonLink: '/hizmetler',
    gradient: 'from-blue-800 to-blue-500',
    backgroundImage: '15.png'
  },
  {
    id: 3,
    title: 'Garantili İşçilik',
    description: '20 yıllık tecrübe ile kaliteli ve uzun ömürlü çözümler sunuyoruz',
    buttonText: 'Galeriyi İncele',
    buttonLink: '/galeri',
    gradient: 'from-blue-700 to-blue-400',
    backgroundImage: '12.png'
  },
];

export default function HomeSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    arrows: true,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative h-[600px] md:h-[700px]">
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient}`}>
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDYwIEwgNjAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiAvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIgLz48L3N2Zz4=')]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <img
                  src={`/images/${slide.backgroundImage}`}
                  alt="Dönen Arka Plan"
                  className="w-[800px] h-[800px] object-contain opacity-70 rotating-image"
                />
              </div>
            </div>
            <div className="relative h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-up">
                  {slide.description}
                </p>
                <a
                  href={slide.buttonLink}
                  className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 animate-fade-in-up"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .slick-dots {
          bottom: 25px;
        }
        .slick-dots li button:before {
          color: white;
          font-size: 12px;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          color: white;
          opacity: 1;
        }
        .slick-prev, .slick-next {
          z-index: 10;
          width: 40px;
          height: 40px;
        }
        .slick-prev {
          left: 20px;
        }
        .slick-next {
          right: 20px;
        }
        .slick-prev:before, .slick-next:before {
          font-size: 40px;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fade-in 0.5s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .rotating-image {
          animation: rotate 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
} 