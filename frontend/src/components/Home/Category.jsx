import React from "react";
import "./Category.css";
import dress from "../../assets/dress.png";
import bags from "../../assets/bags.png";
import shoes from "../../assets/shoes.png";

const Category = () => {
  const categories = [
    { name: "Dresses", image: dress, buttonText: "Shop Dress" },
    {
      name: "Bags",
      image: bags,
      buttonText: "Shop Bags",
    },
    { name: "Shoes", image: shoes, buttonText: "Shop Shoes" },
  ];
  return (
    <div className="main">
      <div className="container">
        {categories.map((category, index) => (
          <div
            className="cat"
            style={{ backgroundImage: `url(${category.image})` }}
            key={index}
          >
            <div className="space"></div>
            <div className="details">
              <h1>{category.name}</h1>
              <button>{category.buttonText}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
