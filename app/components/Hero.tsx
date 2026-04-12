import React from 'react';
import { ArrowRight, CircleDollarSign } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <header className="relative pt-20 pb-10 sm:pb-12 lg:pt-36 lg:pb-20 overflow-hidden gradient-mesh transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-5 sm:mb-6 rounded-full bg-transparent border border-gray-200 dark:border-gray-700 backdrop-blur-sm">
          <CircleDollarSign className="w-4 h-4 text-green-600 dark:text-green-400" />
          <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300 tracking-wide">
            Créditos de Carbono
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[1.75rem] leading-[1.2] sm:text-5xl sm:leading-tight lg:text-[4.5rem] lg:leading-[1.1] font-extrabold text-gray-900 dark:text-white tracking-tight mb-4 sm:mb-6">
          Cooperativas vendem.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 dark:from-white dark:to-gray-400">
            Empresas compram.
          </span><br />
          Nós conectamos os dois.
        </h1>

        {/* Subhead */}
        <p className="text-sm sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-1">
          Créditos de carbono de café, soja e pecuária regenerativa. Documentação técnica pronta, comprador qualificado, e comissão só quando a venda fecha.
        </p>

        {/* CTA Area */}
        <div className="flex flex-col items-center gap-4 mb-10 sm:mb-12">
          <div className="w-full max-w-xs sm:max-w-md relative group">
            <div className="hidden sm:block absolute -inset-1 bg-gradient-to-r from-green-300 to-purple-300 rounded-full blur opacity-25 sm:group-hover:opacity-50 transition duration-200"></div>
            <a href="#lead-capture" className="relative w-full flex items-center justify-center px-6 sm:px-8 py-4 text-base sm:text-lg font-semibold text-white bg-primary active:bg-primary-hover sm:hover:bg-primary-hover rounded-full shadow-xl transition-all sm:hover:-translate-y-0.5 active:scale-[0.98] touch-manipulation">
              Quero uma avaliação gratuita
              <ArrowRight className="w-5 h-5 ml-2 flex-shrink-0" />
            </a>
          </div>

        </div>

      </div>
    </header>
  );
};

export default Hero;