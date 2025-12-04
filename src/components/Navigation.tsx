import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/logo-small.webp";

const Navigation = () => {
  const { state } = useCart();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Reactive Sportswear" width={102} height={56} className="h-14 w-auto opacity-90 hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-foreground hover:text-primary transition-colors font-medium">
              Products
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/technology" className="text-foreground hover:text-primary transition-colors font-medium">
              Technology
            </Link>
            <Link to="/sustainability" className="text-foreground hover:text-primary transition-colors font-medium">
              Sustainability
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="p-2" aria-label="User account">
              <User className="h-5 w-5" />
            </Button>
            <Link to="/cart" className="relative" aria-label="Shopping cart">
              <Button variant="ghost" size="sm" className="p-2 relative" aria-label="View cart">
                <ShoppingBag className="h-5 w-5" />
                {state.items.length > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs">
                    {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </Badge>
                )}
              </Button>
            </Link>
            <Link to="/shop">
              <Button className="btn-athletic hidden sm:inline-flex">
                Shop Now
              </Button>
            </Link>
            <Button variant="ghost" size="sm" className="p-2 md:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;