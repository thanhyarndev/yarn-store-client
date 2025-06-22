import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProductsSection from '@/components/ProductsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import DoraemonMascot from '@/components/DoraemonMascot';
// import Mascot from '@/components/Mascot';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CTASection />
      <Footer />
      <DoraemonMascot />
      {/* <Mascot /> */}
    </main>
  );
}
