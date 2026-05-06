import Product from "../components/Product Details/Product.jsx";
import Reviews from "../components/Product Details/Reviews.jsx";
import SimilarProduct from "../components/Product Details/SimilarProduct.jsx";

const ProductDetails = () => {
  return (
    <>
      <Product />
      <SimilarProduct />
      <Reviews />
    </>
  );
};

export default ProductDetails;
