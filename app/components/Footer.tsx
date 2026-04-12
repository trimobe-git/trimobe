import React from 'react';
import { Orbit, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="pb-20 md:pb-12 pt-10 sm:pt-12 bg-white dark:bg-background-dark border-t border-gray-100 dark:border-gray-800 transition-colors duration-300 safe-area-inset-bottom">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-6">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Orbit className="text-primary dark:text-white w-5 h-5" />
            <span className="font-bold text-lg text-gray-900 dark:text-white">Trimobe</span>
          </div>

          {/* Policy Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <a
              href="/security-policy"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
            >
              Política de Segurança
            </a>
            <a
              href="/terms-of-service"
              className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
            >
              Termos de Uso
            </a>
          </div>

          {/* Contact */}
          <a
            href="mailto:contato@trimobe.com"
            className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">contato@trimobe.com</span>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;