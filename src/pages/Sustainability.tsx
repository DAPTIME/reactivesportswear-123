import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Leaf, Recycle, Globe, TreePine, Droplet, Sun } from "lucide-react";

const Sustainability = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
              Sustainable
              <span className="bg-gradient-primary bg-clip-text text-transparent"> by Design</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Creating athletic wear that's as kind to the planet as it is to your body. Our commitment to sustainability is woven into every fiber of what we do.
            </p>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-foreground">
              Our Environmental Promise
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              We believe that high-performance sportswear shouldn't come at the planet's expense. That's why we've committed to becoming carbon neutral by 2025 and using 100% sustainable materials by 2027.
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              Every decision we make—from material sourcing to packaging—is guided by one question: How can we minimize our environmental impact while maximizing product performance?
            </p>
            <p className="text-muted-foreground text-lg">
              Our sustainability journey is ongoing, and we're transparent about both our achievements and our challenges. Together with our community, we're building a better future for athletic wear.
            </p>
          </div>
          <div className="h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
            <Globe className="h-40 w-40 text-primary/30" />
          </div>
        </div>
      </section>

      {/* Key Initiatives */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12 text-center text-foreground">
          Sustainability Initiatives
        </h2>
        
        <div className="space-y-12">
          {/* Recycled Materials */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-card p-8 rounded-2xl shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Recycle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground">Recycled Materials</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                75% of our products now use recycled polyester made from post-consumer plastic bottles. Each garment repurposes an average of 8 plastic bottles, keeping them out of landfills and oceans.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary">●</span>
                  <span className="text-muted-foreground">Over 2 million bottles recycled in 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">●</span>
                  <span className="text-muted-foreground">50% reduction in virgin plastic use</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">●</span>
                  <span className="text-muted-foreground">Same performance as virgin materials</span>
                </div>
              </div>
            </div>
            <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
              <Recycle className="h-24 w-24 text-primary/20" />
            </div>
          </div>

          {/* Water Conservation */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-card p-8 rounded-2xl shadow-sm">
            <div className="order-2 md:order-1 h-64 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-xl flex items-center justify-center">
              <Droplet className="h-24 w-24 text-primary/20" />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Droplet className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground">Water Conservation</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Our dyeing process uses 90% less water than traditional methods through innovative waterless dyeing technology and closed-loop systems that recycle water.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary">●</span>
                  <span className="text-muted-foreground">5 million gallons of water saved annually</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">●</span>
                  <span className="text-muted-foreground">Zero wastewater pollution</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">●</span>
                  <span className="text-muted-foreground">Eco-friendly, non-toxic dyes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Renewable Energy */}
          <div className="grid md:grid-cols-2 gap-8 items-center bg-card p-8 rounded-2xl shadow-sm">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Sun className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground">Renewable Energy</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                All our manufacturing facilities run on 100% renewable energy from solar and wind sources. We're reducing our carbon footprint while maintaining production efficiency.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-primary">●</span>
                  <span className="text-muted-foreground">100% renewable energy in production</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">●</span>
                  <span className="text-muted-foreground">Carbon neutral shipping options</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">●</span>
                  <span className="text-muted-foreground">60% reduction in CO2 emissions</span>
                </div>
              </div>
            </div>
            <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
              <Sun className="h-24 w-24 text-primary/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Goals */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl">
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12 text-center text-foreground">
          Our 2025 Goals
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-background p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display font-bold text-3xl text-primary mb-2">100%</h3>
            <p className="text-muted-foreground font-medium">Sustainable Materials</p>
          </div>
          
          <div className="bg-background p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display font-bold text-3xl text-primary mb-2">Carbon Neutral</h3>
            <p className="text-muted-foreground font-medium">Operations</p>
          </div>
          
          <div className="bg-background p-6 rounded-xl text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TreePine className="h-8 w-8 text-primary" />
            </div>
            <h3 className="font-display font-bold text-3xl text-primary mb-2">1 Million</h3>
            <p className="text-muted-foreground font-medium">Trees Planted</p>
          </div>
        </div>
      </section>

      {/* Circular Fashion */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-center text-foreground">
          Circular Fashion Program
        </h2>
        <p className="text-muted-foreground text-lg text-center mb-8">
          We've launched our take-back program where you can return worn Reactive products for recycling. We'll break them down and create new materials, ensuring nothing goes to waste. Plus, you'll receive a discount on your next purchase.
        </p>
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-2xl text-center">
          <p className="text-foreground font-display font-semibold text-xl mb-4">
            Every product has a second life
          </p>
          <p className="text-muted-foreground">
            Join us in closing the loop and creating a truly circular fashion ecosystem.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sustainability;
