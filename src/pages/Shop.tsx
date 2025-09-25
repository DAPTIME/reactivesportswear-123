import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ShoppingBag, Star } from "lucide-react";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Ultra Performance Tank",
      price: 49.99,
      originalPrice: 69.99,
      image: "https://images.unsplash.com/photo-1544967882-9312dc0dc01f?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1506629905117-b3667207e5b7?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1544966503-7cc82b6c3c38?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f8302?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1594736797933-d0c1e7b7925c?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1594736797933-d0c1e7b7925c?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1544966503-7cc82b6c3c38?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1583743814966-8936f37f8302?w=400&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
      rating: 4.9,
      category: "Footwear",
      isNew: true,
      onSale: true
    }
  ];

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
                
                <Button className="w-full btn-athletic group-hover:shadow-lg transition-all duration-300">
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