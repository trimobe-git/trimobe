import React from 'react';
import { Sprout, Building2 } from 'lucide-react';

const cooperativasBullets = [
  {
    title: 'Encontramos o comprador certo para o seu crédito.',
    body: 'Você não precisa negociar sozinho. Conectamos sua cooperativa a empresas que já estão prontas para comprar créditos de carbono agrícola.',
  },
  {
    title: 'Comissão de 5 a 10%, só quando a venda acontece.',
    body: 'Sem mensalidade, sem custo antecipado. Nós ganhamos apenas quando você vende.',
  },
];

const empresasBullets = [
  {
    title: 'Créditos de origem verificada, direto da cooperativa.',
    body: 'Café, pecuária regenerativa e soja de baixo carbono — com rastreabilidade do produtor ao relatório de sustentabilidade.',
  },
  {
    title: 'Seleção sob medida, não catálogo genérico.',
    body: 'Analisamos qualidade e risco antes de apresentar cada crédito. Você recebe opções que realmente se encaixam na sua estratégia de descarbonização.',
  },
];

interface BulletItem {
  title: string;
  body: string;
}

function BulletList({ items }: { items: BulletItem[] }) {
  return (
    <ul className="flex flex-col gap-7 sm:gap-8">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="text-amber-500 dark:text-amber-400 font-bold mt-0.5 flex-shrink-0 text-base leading-snug select-none"
            aria-hidden="true"
          >
            ▸
          </span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base leading-snug mb-1.5">
              {item.title}
            </p>
            <p className="font-normal text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
              {item.body}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

const WhatWeDoSection: React.FC = () => {
  return (
    <section className="bg-surface-light dark:bg-background-dark transition-colors duration-300 py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section headline */}
        <div className="max-w-2xl mx-auto text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            O que fazemos
          </h2>
        </div>

        {/* Two-card grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Card: Cooperativas */}
          <div className="bg-white dark:bg-slate-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700/50 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-green-100 dark:bg-green-900/30 rounded-xl">
                <Sprout className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-green-700 dark:text-green-400">
                Para Cooperativas
              </p>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-6 leading-snug">
              Para cooperativas com créditos certificados
            </h3>
            <BulletList items={cooperativasBullets} />
          </div>

          {/* Card: Empresas */}
          <div className="bg-white dark:bg-slate-800/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700/50 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
                <Building2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-purple-700 dark:text-purple-400">
                Para Empresas
              </p>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-6 leading-snug">
              Para empresas com meta de descarbonização
            </h3>
            <BulletList items={empresasBullets} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
