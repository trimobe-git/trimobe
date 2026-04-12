import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDoSection from './components/WhatWeDoSection';
import LeadCaptureForm from './components/LeadCaptureForm';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <WhatWeDoSection />
        <section id="lead-capture" className="py-10 sm:py-14 lg:py-16 bg-gray-50 dark:bg-background-dark transition-colors duration-300">
          <div className="max-w-2xl mx-auto px-6 text-center mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              Vamos conversar
            </h2>
          </div>
          <LeadCaptureForm />
        </section>
      </main>

      <Footer />

      <div className="fixed bottom-0 left-0 right-0 p-4 z-30 bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800 md:hidden transition-colors duration-300 safe-area-inset-bottom">
        <a href="#lead-capture" className="flex items-center justify-center w-full py-3.5 bg-primary active:bg-primary-hover text-white font-bold rounded-xl shadow-lg active:scale-[0.98] transition-all touch-manipulation">
          Quero uma avaliação gratuita
          <ArrowRight className="w-5 h-5 ml-2" />
        </a>
      </div>
    </div>
  );
}
