import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProductShowcase from "@/components/ProductShowcase";
import MovementSection from "@/components/MovementSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ProductShowcase />
      <MovementSection />
      <Footer />
    </main>
  );
};

export default Index;
