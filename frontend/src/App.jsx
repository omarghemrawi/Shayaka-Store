import "./App.css";
import HomePage from "./page/HomePage.jsx";
import ProductDetails from "./page/ProductDetails.jsx";
import Navbar from "./components/Navbar.jsx";
import CollectionPage from "./page/CollectionPage.jsx";
import CartPage from "./page/CartPage.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/collections" element={<CollectionPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
