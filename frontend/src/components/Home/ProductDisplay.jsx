import React from "react";
import { useRef } from "react";
import "./ProductDisplay.css";
import heels1 from "../../assets/Feature Products/heels1.jpg";
import heels2 from "../../assets/Feature Products/heels2.jpg";
import bags1 from "../../assets/Feature Products/bags1.jpg";
import bags2 from "../../assets/Feature Products/bags2.jpg";
import outerwear1 from "../../assets/Feature Products/outerwear1.jpg";
import outerwear2 from "../../assets/Feature Products/outerwear2.jpg";
import pants1 from "../../assets/Feature Products/pants1.jpg";
import pants2 from "../../assets/Feature Products/pants2.jpg";
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Bar from "../Bar";

const ProductDisplay = ({ title }) => {
  const scrollRef = useRef(null);
  const Title = title || "Products";

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  };
  const products = [
    {
      id: 1,
      name: "Black heels",
      price: 19.99,
      image: heels1,
    },
    {
      id: 2,
      name: "Red heels",
      price: 29.99,
      image: heels2,
    },
    {
      id: 3,
      name: "Black bags",
      price: 39.99,
      image: bags1,
    },
    {
      id: 4,
      name: "Red bags",
      price: 49.99,
      image: bags2,
    },
    {
      id: 5,
      name: "Black outerwear",
      price: 59.99,
      image: outerwear1,
    },
    {
      id: 6,
      name: "Red outerwear",
      price: 69.99,
      image: outerwear2,
    },
    {
      id: 7,
      name: "Black pants",
      price: 79.99,
      image: pants1,
    },
    {
      id: 8,
      name: "Red pants",
      price: 89.99,
      image: pants2,
    },
  ];

  return (
    <>
      <Bar title={Title} />
      <div className="slider-wrapper">
        <button className="arrow-btn" onClick={() => scroll("left")}>
          ‹
        </button>
        <div className="featured-products" ref={scrollRef}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="img-container">
                <img src={product.image} alt={product.name} />
                <button className="wishList">
                  <FaHeart />
                </button>
              </div>
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button className="addToCart">
                <FaShoppingCart />
              </button>
            </div>
          ))}
        </div>
        <button className="arrow-btn" onClick={() => scroll("right")}>
          ›
        </button>
      </div>
    </>
  );
};

export default ProductDisplay;
