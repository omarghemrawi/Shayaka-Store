import Navbar from "../components/Home/Navbar.jsx";
import HeroSection from "../components/Home/HeroSection.jsx";
import Category from "../components/Home/Category.jsx";
import ProductDisplay from "../components/Home/ProductDisplay.jsx";
import OfferCollection from "../components/Home/OfferCollection.jsx";
import WhyChooseUs from "../components/Home/WhyChooseUs.jsx";
import NewsLetter from "../components/Home/NewsLetter.jsx";

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSection />
      <ProductDisplay title="Dress" />
      <ProductDisplay title="Shoes" />
      <ProductDisplay title="Accessories" />
      <Category />
      <ProductDisplay title="Featured Products" />
      <OfferCollection />
      <WhyChooseUs />
      <NewsLetter />
    </div>
  );
};

export default HomePage;
