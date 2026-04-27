import React from "react";
import "./OfferCollection.css";
import heels1 from "../../assets/Feature Products/heels1.jpg";
import heels2 from "../../assets/Feature Products/heels2.jpg";
import bags1 from "../../assets/Feature Products/bags1.jpg";
import bags2 from "../../assets/Feature Products/bags2.jpg";
import outerwear1 from "../../assets/Feature Products/outerwear1.jpg";
import outerwear2 from "../../assets/Feature Products/outerwear2.jpg";
import pants1 from "../../assets/Feature Products/pants1.jpg";
import pants2 from "../../assets/Feature Products/pants2.jpg";

const OfferCollection = () => {
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
    <div className="offer-section">
      <div className="offer-left">
        <h2>Discount Collection</h2>
        <p>Up to 50% Off Selected Items</p>
        <button>Shop Now</button>
      </div>

      <div className="offer-products">
        {products.slice(0, 6).map((product) => (
          <div className="offer-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <span className="discount">-20%</span>
            <p>{product.name}</p>
            <p className="old-price">${product.price}</p>
            <p className="new-price">${(product.price * 1.2).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferCollection;
