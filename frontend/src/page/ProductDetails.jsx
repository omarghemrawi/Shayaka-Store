import Product from "../components/Product Details/Product.jsx";
import Reviews from "../components/Product Details/Reviews.jsx";
import SimilarProduct from "../components/Product Details/SimilarProduct.jsx";

const ProductDetails = () => {
  // const StarRating = ({ rating }) => (
  //   <span className="star-rating">
  //     {[1, 2, 3, 4, 5].map((s) =>
  //       s <= rating ? (
  //         <FaStar key={s} color="#f5a623" />
  //       ) : (
  //         <FiStar key={s} color="#f5a623" />
  //       ),
  //     )}
  //   </span>
  // );

  return (
    <>
      <Product />
      <SimilarProduct />
      <Reviews />
    </>
  );
};

export default ProductDetails;
