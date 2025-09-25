import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const TestCheckout = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardHeader className="pb-8">
              <div className="mx-auto w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">
                Test Website Notice
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-xl text-muted-foreground">
                This is just a test website for demonstration purposes.
              </p>
              <p className="text-muted-foreground">
                No actual payments will be processed and no products will be shipped. 
                This is a sample e-commerce interface built with React and Tailwind CSS.
              </p>
              <div className="pt-6 space-y-4">
                <Link to="/cart" className="block w-full">
                  <Button variant="outline" className="w-full">
                    Back to Cart
                  </Button>
                </Link>
                <Link to="/shop" className="block w-full">
                  <Button className="w-full btn-athletic">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TestCheckout;