import React from "react";
import outerwear1 from "../../assets/Feature Products/outerwear1.jpg";
import outerwear2 from "../../assets/Feature Products/outerwear2.jpg";
import heels1 from "../../assets/Feature Products/heels1.jpg";
import heels2 from "../../assets/Feature Products/heels2.jpg";
import heels3 from "../../assets/Feature Products/heels3.jpg";
import bags1 from "../../assets/Feature Products/bags1.jpg";
import bags2 from "../../assets/Feature Products/bags2.jpg";
import bags3 from "../../assets/Feature Products/bags3.jpg";
import pants1 from "../../assets/Feature Products/pants1.jpg";
import pants2 from "../../assets/Feature Products/pants2.jpg";
import pants3 from "../../assets/Feature Products/pants3.jpg";
import "./ShowCollectionProduct.css";
const ShowCollectionProduct = () => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      image: outerwear1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      image: outerwear2,
    },
    {
      id: 3,
      name: "Product 3",
      price: 5.99,
      image: pants2,
    },
    {
      id: 4,
      name: "Product 4",
      price: 15.99,
      image: heels1,
    },
    {
      id: 5,
      name: "Product 5",
      price: 25.99,
      image: heels2,
    },
    {
      id: 6,
      name: "Product 6",
      price: 8.99,
      image: heels3,
    },
    {
      id: 7,
      name: "Product 7",
      price: 12.99,
      image: bags1,
    },
    {
      id: 8,
      name: "Product 8",
      price: 18.99,
      image: bags2,
    },
    {
      id: 9,
      name: "Product 9",
      price: 9.99,
      image: bags3,
    },
    { id: 10, name: "Product 10", price: 14.99, image: pants1 },
    {
      id: 11,
      name: "Product 11",
      price: 11.99,
      image: pants3,
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      image: outerwear1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      image: outerwear2,
    },
    {
      id: 3,
      name: "Product 3",
      price: 5.99,
      image: pants2,
    },
    {
      id: 4,
      name: "Product 4",
      price: 15.99,
      image: heels1,
    },
    {
      id: 5,
      name: "Product 5",
      price: 25.99,
      image: heels2,
    },
    {
      id: 6,
      name: "Product 6",
      price: 8.99,
      image: heels3,
    },
    {
      id: 7,
      name: "Product 7",
      price: 12.99,
      image: bags1,
    },
    {
      id: 8,
      name: "Product 8",
      price: 18.99,
      image: bags2,
    },
    {
      id: 9,
      name: "Product 9",
      price: 9.99,
      image: bags3,
    },
    { id: 10, name: "Product 10", price: 14.99, image: pants1 },
    {
      id: 11,
      name: "Product 11",
      price: 11.99,
      image: pants3,
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      image: outerwear1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      image: outerwear2,
    },
    {
      id: 3,
      name: "Product 3",
      price: 5.99,
      image: pants2,
    },
    {
      id: 4,
      name: "Product 4",
      price: 15.99,
      image: heels1,
    },
    {
      id: 5,
      name: "Product 5",
      price: 25.99,
      image: heels2,
    },
    {
      id: 6,
      name: "Product 6",
      price: 8.99,
      image: heels3,
    },
    {
      id: 7,
      name: "Product 7",
      price: 12.99,
      image: bags1,
    },
    {
      id: 8,
      name: "Product 8",
      price: 18.99,
      image: bags2,
    },
    {
      id: 9,
      name: "Product 9",
      price: 9.99,
      image: bags3,
    },
    { id: 10, name: "Product 10", price: 14.99, image: pants1 },
    {
      id: 11,
      name: "Product 11",
      price: 11.99,
      image: pants3,
    },
    {
      id: 1,
      name: "Product 1",
      price: 10.99,
      image: outerwear1,
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      image: outerwear2,
    },
    {
      id: 3,
      name: "Product 3",
      price: 5.99,
      image: pants2,
    },
    {
      id: 4,
      name: "Product 4",
      price: 15.99,
      image: heels1,
    },
    {
      id: 5,
      name: "Product 5",
      price: 25.99,
      image: heels2,
    },
    {
      id: 6,
      name: "Product 6",
      price: 8.99,
      image: heels3,
    },
    {
      id: 7,
      name: "Product 7",
      price: 12.99,
      image: bags1,
    },
    {
      id: 8,
      name: "Product 8",
      price: 18.99,
      image: bags2,
    },
    {
      id: 9,
      name: "Product 9",
      price: 9.99,
      image: bags3,
    },
    { id: 10, name: "Product 10", price: 14.99, image: pants1 },
    {
      id: 11,
      name: "Product 11",
      price: 11.99,
      image: pants3,
    },
  ];

  return (
    <div className="container-products">
      <p> ({products.length}) Products</p>
      <div className="listOfProducts">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCollectionProduct;
