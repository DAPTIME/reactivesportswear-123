const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display font-bold text-3xl bg-gradient-secondary bg-clip-text text-transparent mb-4">
              Reactive Sportswear
            </div>
            <p className="text-white/80 mb-6 max-w-md">
              Light clothes for happy movement. We create premium athletic wear that moves with you, 
              designed for comfort, performance, and sustainable living.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors cursor-pointer">
                <span className="text-white font-semibold">f</span>
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors cursor-pointer">
                <span className="text-white font-semibold">ig</span>
              </div>
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary/80 transition-colors cursor-pointer">
                <span className="text-white font-semibold">tw</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Running Gear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Yoga Wear</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Training Sets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-white/60 text-sm mb-4 sm:mb-0">
            © 2024 Reactive Sportswear. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-white/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Size Guide</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;