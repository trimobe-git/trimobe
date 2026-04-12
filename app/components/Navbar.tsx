import React from 'react';
import { Orbit } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <Orbit className="text-primary w-6 h-6 transition-transform group-hover:scale-110" />
            <span className="font-bold text-xl tracking-tight text-gray-900">Trimobe</span>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
