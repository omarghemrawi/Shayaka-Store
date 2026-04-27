import React from "react";
import outerwear1 from "../.././assets/Feature Products/outerwear1.jpg";
import outerwear2 from "../.././assets/Feature Products/outerwear2.jpg";
import outerwear3 from "../.././assets/Feature Products/outerwear3.jpg";
import Bar from "../Bar.jsx";
import "./SimilarProduct.css";

const SimilarProduct = () => {
  const similarProducts = [
    {
      id: 1,
      name: "Gucci T-Shirt",
      price: "29.99$",
      oldPrice: "49.99$",
      img: outerwear1,
    },
    {
      id: 2,
      name: "Gucci Jeans",
      price: "59.99$",
      oldPrice: "89.99$",
      img: outerwear2,
    },
    {
      id: 3,
      name: "Gucci Sneakers",
      price: "79.99$",
      oldPrice: "129.99$",
      img: outerwear3,
    },
    {
      id: 4,
      name: "Gucci Hat",
      price: "19.99$",
      oldPrice: "39.99$",
      img: outerwear1,
    },
    {
      id: 2,
      name: "Gucci Jeans",
      price: "59.99$",
      oldPrice: "89.99$",
      img: outerwear2,
    },
  ];
  return (
    <section className="similar-products">
      {/* <Bar title="Similar Products" /> */}
      <div className="similar-grid">
        {similarProducts.map((p) => (
          <div key={p.id} className="similar-card">
            <img src={p.img} alt={p.name} />
            <div className="similar-info">
              <p className="similar-name">{p.name}</p>
              <div className="similar-price">
                <span className="new-price">{p.price}</span>
                <span className="old-price">{p.oldPrice}</span>
              </div>
              <button className="add-to-cart">Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimilarProduct;
