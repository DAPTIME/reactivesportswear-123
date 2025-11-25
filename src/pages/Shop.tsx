import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShoppingBag, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";
import tankTop from "@/assets/products/tank-top.jpg";
import runningShorts from "@/assets/products/running-shorts.jpg";
import leggings from "@/assets/products/leggings.jpg";
import sportsBra from "@/assets/products/sports-bra.jpg";
import trainingGloves from "@/assets/products/training-gloves.jpg";
import runningJacket from "@/assets/products/running-jacket.jpg";
import hoodie from "@/assets/products/hoodie.jpg";
import performanceTee from "@/assets/products/performance-tee.jpg";
import yogaPants from "@/assets/products/yoga-pants.jpg";
import hydrationBelt from "@/assets/products/hydration-belt.jpg";
import compressionSleeves from "@/assets/products/compression-sleeves.jpg";
import windbreaker from "@/assets/products/windbreaker.jpg";
import socksPack from "@/assets/products/socks-pack.jpg";
import trainingShorts from "@/assets/products/training-shorts.jpg";
import poloShirt from "@/assets/products/polo-shirt.jpg";
import runningShoes from "@/assets/products/running-shoes.jpg";

const Shop = () => {
  const { addItem } = useCart();
  const { toast } = useToast();
  const products = [
    {
      id: 1,
      name: "Ultra Performance Tank",
      price: 49.99,
      originalPrice: 69.99,
      image: tankTop,
      rating: 4.8,
      category: "Tops",
      isNew: false,
      onSale: true
    },
    {
      id: 2,
      name: "Reactive Running Shorts",
      price: 39.99,
      originalPrice: null,
      image: runningShorts,
      rating: 4.9,
      category: "Bottoms",
      isNew: true,
      onSale: false
    },
    {
      id: 3,
      name: "Flex Motion Leggings",
      price: 79.99,
      originalPrice: 99.99,
      image: leggings,
      rating: 4.7,
      category: "Bottoms",
      isNew: false,
      onSale: true
    },
    {
      id: 4,
      name: "Breathe Easy Sports Bra",
      price: 34.99,
      originalPrice: null,
      image: sportsBra,
      rating: 4.6,
      category: "Tops",
      isNew: false,
      onSale: false
    },
    {
      id: 5,
      name: "Power Grip Training Gloves",
      price: 24.99,
      originalPrice: 34.99,
      image: trainingGloves,
      rating: 4.5,
      category: "Accessories",
      isNew: false,
      onSale: true
    },
    {
      id: 6,
      name: "Velocity Running Jacket",
      price: 89.99,
      originalPrice: null,
      image: runningJacket,
      rating: 4.8,
      category: "Outerwear",
      isNew: true,
      onSale: false
    },
    {
      id: 7,
      name: "Comfort Zone Hoodie",
      price: 64.99,
      originalPrice: 79.99,
      image: hoodie,
      rating: 4.9,
      category: "Outerwear",
      isNew: false,
      onSale: true
    },
    {
      id: 8,
      name: "Quick-Dry Performance Tee",
      price: 29.99,
      originalPrice: null,
      image: performanceTee,
      rating: 4.7,
      category: "Tops",
      isNew: false,
      onSale: false
    },
    {
      id: 9,
      name: "Stretch Pro Yoga Pants",
      price: 69.99,
      originalPrice: 89.99,
      image: yogaPants,
      rating: 4.8,
      category: "Bottoms",
      isNew: false,
      onSale: true
    },
    {
      id: 10,
      name: "Hydration Belt",
      price: 19.99,
      originalPrice: null,
      image: hydrationBelt,
      rating: 4.4,
      category: "Accessories",
      isNew: true,
      onSale: false
    },
    {
      id: 11,
      name: "Compression Recovery Sleeves",
      price: 44.99,
      originalPrice: 54.99,
      image: compressionSleeves,
      rating: 4.6,
      category: "Accessories",
      isNew: false,
      onSale: true
    },
    {
      id: 12,
      name: "All-Weather Wind Breaker",
      price: 74.99,
      originalPrice: null,
      image: windbreaker,
      rating: 4.7,
      category: "Outerwear",
      isNew: true,
      onSale: false
    },
    {
      id: 13,
      name: "Moisture-Wicking Socks (3-Pack)",
      price: 22.99,
      originalPrice: 29.99,
      image: socksPack,
      rating: 4.5,
      category: "Accessories",
      isNew: false,
      onSale: true
    },
    {
      id: 14,
      name: "Cross-Training Shorts",
      price: 42.99,
      originalPrice: null,
      image: trainingShorts,
      rating: 4.8,
      category: "Bottoms",
      isNew: false,
      onSale: false
    },
    {
      id: 15,
      name: "Performance Polo Shirt",
      price: 54.99,
      originalPrice: 69.99,
      image: poloShirt,
      rating: 4.7,
      category: "Tops",
      isNew: false,
      onSale: true
    },
    {
      id: 16,
      name: "Elite Running Shoes",
      price: 129.99,
      originalPrice: 159.99,
      image: runningShoes,
      rating: 4.9,
      category: "Footwear",
      isNew: true,
      onSale: true
    }
  ];

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
              Reactive
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Collection</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover our complete range of performance sportswear designed for movement and comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="card-athletic hover-lift group cursor-pointer">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  {product.isNew && (
                    <Badge className="bg-secondary text-secondary-foreground">New</Badge>
                  )}
                  {product.onSale && (
                    <Badge className="bg-destructive text-destructive-foreground">Sale</Badge>
                  )}
                </div>
                <div className="absolute top-3 right-3">
                  <div className="flex items-center gap-1 bg-background/90 backdrop-blur-sm rounded-full px-2 py-1">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs font-medium">{product.rating}</span>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
                
                <h3 className="font-display font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="font-bold text-xl text-foreground">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                
                <Button 
                  className="w-full btn-athletic group-hover:shadow-lg transition-all duration-300"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;