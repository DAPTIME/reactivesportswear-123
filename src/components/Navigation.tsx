import { Button } from "@/components/ui/button";
import { Menu, ShoppingBag, User } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="font-display font-bold text-2xl bg-gradient-primary bg-clip-text text-transparent">
              Reactive
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Products
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Technology
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Sustainability
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="p-2">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button className="btn-athletic hidden sm:inline-flex">
              Shop Now
            </Button>
            <Button variant="ghost" size="sm" className="p-2 md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;