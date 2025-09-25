import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";

const CartPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <Cart />
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;