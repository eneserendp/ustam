import { FaTools } from 'react-icons/fa';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg transform -rotate-12 mr-2">
        <FaTools className="w-6 h-6 text-white" />
      </div>
      <div>
        <span className="text-2xl font-bold text-blue-600">Ustam</span>
        <span className="hidden md:block text-xs text-gray-500 -mt-1">
          Profesyonel Tadilat & Dekorasyon
        </span>
      </div>
    </div>
  );
} 