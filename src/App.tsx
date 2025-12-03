import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";

// Lazy load non-critical routes for better initial load performance
const Shop = lazy(() => import("./pages/Shop"));
const CartPage = lazy(() => import("./pages/CartPage"));
const TestCheckout = lazy(() => import("./pages/TestCheckout"));
const About = lazy(() => import("./pages/About"));
const Technology = lazy(() => import("./pages/Technology"));
const Sustainability = lazy(() => import("./pages/Sustainability"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

// Simple loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/test-checkout" element={<TestCheckout />} />
              <Route path="/about" element={<About />} />
              <Route path="/technology" element={<Technology />} />
              <Route path="/sustainability" element={<Sustainability />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
