import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Zap, Wind, Droplets, Shield, Sparkles, Feather } from "lucide-react";

const Technology = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
              Advanced
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Technology</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovation meets performance. Discover the cutting-edge technologies that make Reactive Sportswear the lightest, most comfortable athletic wear on the market.
            </p>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12 text-center text-foreground">
          Core Technologies
        </h2>
        
        <div className="space-y-16">
          {/* ReactWeave™ */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Feather className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground">ReactWeave™ Fabric</h3>
              </div>
              <p className="text-muted-foreground text-lg mb-4">
                Our proprietary fabric technology uses ultra-fine microfibers woven in a unique pattern that reduces weight by 40% while maintaining superior strength. The result? Clothing that feels like you're wearing nothing at all.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>40% lighter than traditional athletic fabrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>200% more durable than standard polyester</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Maintains shape after 500+ washes</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
              <Feather className="h-32 w-32 text-primary/30" />
            </div>
          </div>

          {/* AirFlow™ */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="h-80 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl flex items-center justify-center">
              <Wind className="h-32 w-32 text-primary/30" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Wind className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground">AirFlow™ Ventilation</h3>
              </div>
              <p className="text-muted-foreground text-lg mb-4">
                Strategic ventilation zones placed at key heat zones allow maximum airflow where you need it most. Our laser-cut perforations are invisible to the eye but revolutionary for temperature regulation.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>30% better airflow than traditional mesh</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Maintains structural integrity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Reduces body temperature by up to 3°C</span>
                </li>
              </ul>
            </div>
          </div>

          {/* DryFast™ */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Droplets className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground">DryFast™ Technology</h3>
              </div>
              <p className="text-muted-foreground text-lg mb-4">
                Advanced moisture-wicking technology pulls sweat away from your skin and spreads it across the fabric surface for rapid evaporation. Stay dry, stay comfortable, stay focused.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Dries 3x faster than cotton</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Anti-bacterial treatment prevents odor</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Keeps skin dry during intense workouts</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
              <Droplets className="h-32 w-32 text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl">
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12 text-center text-foreground">
          Performance Features
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-background p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-foreground">UV Protection</h3>
            <p className="text-muted-foreground">
              Built-in UPF 50+ protection shields your skin from harmful UV rays during outdoor activities.
            </p>
          </div>

          <div className="bg-background p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-foreground">Four-Way Stretch</h3>
            <p className="text-muted-foreground">
              Complete freedom of movement with fabric that stretches in all directions and returns to shape.
            </p>
          </div>

          <div className="bg-background p-6 rounded-xl shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-xl mb-3 text-foreground">Flatlock Seams</h3>
            <p className="text-muted-foreground">
              Zero irritation with seamless construction and flatlock stitching that sits flush against skin.
            </p>
          </div>
        </div>
      </section>

      {/* Innovation Promise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-foreground">
          Continuous Innovation
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Our innovation lab never stops working. We're constantly testing new materials, exploring emerging technologies, and pushing the boundaries of what's possible in athletic wear. Every piece of feedback from our athletes drives our next breakthrough.
        </p>
        <p className="text-primary text-xl font-display font-semibold">
          The future of athletic wear is lighter, faster, and happier.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default Technology;
