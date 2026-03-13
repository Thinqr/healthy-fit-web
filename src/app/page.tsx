import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import FeatureDeepDive from '@/components/FeatureDeepDive';
import Testimonials from '@/components/Testimonials';
import Comparison from '@/components/Comparison';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <FeatureDeepDive />
      <Testimonials />
      <Comparison />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
