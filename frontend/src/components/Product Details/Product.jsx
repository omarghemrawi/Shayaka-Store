import React from "react";
import { useState } from "react";
import outerwear1 from "../.././assets/Feature Products/outerwear1.jpg";
import outerwear2 from "../.././assets/Feature Products/outerwear2.jpg";
import outerwear3 from "../.././assets/Feature Products/outerwear3.jpg";
import { FaHeart, FaRegHeart, FaStar, FaRegStar } from "react-icons/fa";
import "./Product.css";

const Product = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  return (
    <div className="product">
      <div className="product-images">
        <div className="list-images">
          <img src={outerwear1} alt="Outerwear 1" />
          <img src={outerwear2} alt="Outerwear 2" />
          <img src={outerwear3} alt="Outerwear 3" />
        </div>
        <div className="main-image">
          <img src={outerwear1} alt="Outerwear 1" />
        </div>
      </div>
      <div className="product-details">
        <h1 className="product-name">Gucci Outerwear</h1>
        <div className="price">
          <p className="new-price">49.33$</p>
          <p className="old-price">84.99$</p>
        </div>
        <span className="star">★★★★★</span>
        <p className="product-desc">
          Experience luxury with our Gucci Outerwear. Perfect for any occasion.
        </p>
        <div className="selected-item">
          <div className="top-controle">
            <div className="sizes">
              <p>Size:</p>

              {["S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className={
                    selectedSize === size ? "size-btn active" : "size-btn"
                  }
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <div className="quantity">
              <p>Quantity:</p>
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <button className="add-to-cart">Add to Cart</button>
          <button
            className="add-wishlist"
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <span>{isWishlisted ? <FaRegHeart /> : <FaHeart />}</span>
            {isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
