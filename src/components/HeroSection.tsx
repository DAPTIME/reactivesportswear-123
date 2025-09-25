import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-sportswear.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 bounce-in">
          Reactive
          <span className="block bg-gradient-hero bg-clip-text text-transparent">
            Sportswear
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-8 font-light slide-up max-w-2xl mx-auto">
          Light clothes for happy movement. Experience the perfect blend of comfort, style, and performance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/shop">
            <Button size="lg" className="btn-hero px-8 py-6 text-lg font-semibold">
              Shop Collection
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 text-lg font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl float-animation"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/20 rounded-full blur-xl float-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-primary/20 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;