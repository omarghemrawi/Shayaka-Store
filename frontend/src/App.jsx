import "./App.css";
import HomePage from "./page/HomePage.jsx";
import ProductDetails from "./page/ProductDetails.jsx";
import Navbar from "./components/Navbar.jsx";
import CollectionPage from "./page/CollectionPage.jsx";
import CartPage from "./page/CartPage.jsx";
import WishlistPage from "./page/WishlistPage.jsx";
import ProfilePage from "./page/ProfilePage.jsx";
import { Routes, Route } from "react-router-dom";
import Sign from "./page/Sign.jsx";
import Checkout from "./page/Checkout.jsx";
import Footer from "./components/Footer.jsx";
import Payment from "./page/Payment.jsx";
function App() {
  const total = 100; // Example total amount, replace with actual calculation based on cart items
  return (
    <>
      <Navbar login={false} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/collections" element={<CollectionPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route
            path="/sale"
            element={<CollectionPage isDiscountPage={true} />}
          />
          <Route path="/sign" element={<Sign />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment cartTotal={total} />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
