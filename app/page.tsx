import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import StickyWhatsAppButton from "./components/StickyWhatsAppButton";
import SituationsSection from "./components/sections/SituationsSection";
import HowItWorksSection from "./components/sections/HowItWorksSection";
import ServicesSection from "./components/sections/ServicesSection";
import RiskFreeSection from "./components/sections/RiskFreeSection";
import WhyChooseSection from "./components/sections/WhyChooseSection";
import GuaranteesSection from "./components/sections/GuaranteesSection";
import FAQSection from "./components/sections/FAQSection";
import FinalCTASection from "./components/sections/FinalCTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-bg">
      <Navbar />

      <main className="flex-grow mobile-cta-spacer">
        <Hero />
        <SituationsSection />
        <HowItWorksSection />
        <ServicesSection />
        <RiskFreeSection />
        <WhyChooseSection />
        <GuaranteesSection />
        <FAQSection />
        <FinalCTASection />
      </main>

      <Footer />
      <StickyWhatsAppButton />
    </div>
  );
}
