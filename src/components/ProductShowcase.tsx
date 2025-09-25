import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import productsImage from "@/assets/products-collection.jpg";

const ProductShowcase = () => {
  const features = [
    {
      title: "Ultra-Light Fabric",
      description: "Advanced materials that move with you",
      icon: "⚡"
    },
    {
      title: "Moisture-Wicking",
      description: "Stay dry during intense workouts",
      icon: "💧"
    },
    {
      title: "Flexible Fit",
      description: "Designed for maximum range of motion",
      icon: "🤸‍♀️"
    },
    {
      title: "Sustainable",
      description: "Made from eco-friendly materials",
      icon: "🌱"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-foreground mb-4">
          Performance Meets
          <span className="bg-gradient-primary bg-clip-text text-transparent"> Style</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Our reactive sportswear adapts to your movement, providing unmatched comfort and performance for every activity.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="order-2 lg:order-1">
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="card-athletic hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-display font-semibold text-lg mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative">
            <img 
              src={productsImage} 
              alt="Reactive Sportswear Collection" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl hover-glow transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl"></div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <Link to="/shop">
          <Button size="lg" className="btn-athletic px-8 py-6 text-lg font-semibold">
            Explore All Products
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProductShowcase;