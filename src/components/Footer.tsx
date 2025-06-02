import Link from 'next/link';
import { FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-3">
              
              <p className="flex items-center">
                <FaWhatsapp className="mr-2" />
                <a href="https://wa.me/905415143903" className="hover:text-white">
                  +90 541 514 39 03
                </a>
              </p>
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Ankara, Türkiye</span>
              </p>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetler" className="hover:text-white">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/galeri" className="hover:text-white">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-white">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-white">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Çalışma Saatleri */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Çalışma Saatleri</h3>
            <ul className="space-y-2">
              <li>Pazartesi - Cumartesi</li>
              <li>09:00 - 18:00</li>
              <li className="text-yellow-500">Pazar: Kapalı</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Ustam - Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
} 
