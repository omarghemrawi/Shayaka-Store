import React from "react";
import { useState } from "react";
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
const ShowCollectionProduct = ({ isDiscount }) => {
  const productsCollection = [
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
  const productsDiscount = [
    // {
    //   id: 1,
    //   name: "Product 1",
    //   price: 10.99,
    //   image: outerwear1,
    // },
    // {
    //   id: 2,
    //   name: "Product 2",
    //   price: 19.99,
    //   image: outerwear2,
    // },
    // {
    //   id: 3,
    //   name: "Product 3",
    //   price: 5.99,
    //   image: pants2,
    // },
    {
      id: 4,
      name: "Product 4",
      oldPrice: 15.99,
      newPrice: 9.99,
      image: heels1,
    },
    {
      id: 5,
      name: "Product 5",
      oldPrice: 25.99,
      newPrice: 19.99,
      image: heels2,
    },
    {
      id: 6,
      name: "Product 6",
      oldPrice: 8.99,
      newPrice: 6.99,
      image: heels3,
    },
    {
      id: 7,
      name: "Product 7",
      oldPrice: 12.99,
      newPrice: 9.99,
      image: bags1,
    },
    {
      id: 8,
      name: "Product 8",
      oldPrice: 18.99,
      newPrice: 14.99,
      image: bags2,
    },
    {
      id: 9,
      name: "Product 9",
      oldPrice: 9.99,
      newPrice: 7.99,
      image: bags3,
    },
    {
      id: 10,
      name: "Product 10",
      oldPrice: 14.99,
      newPrice: 11.99,
      image: pants1,
    },
    {
      id: 11,
      name: "Product 11",
      oldPrice: 11.99,
      newPrice: 8.99,
      image: pants3,
    },
    {
      id: 1,
      name: "Product 1",
      oldPrice: 10.99,
      newPrice: 7.99,
      image: outerwear1,
    },
    {
      id: 2,
      name: "Product 2",
      oldPrice: 19.99,
      newPrice: 14.99,
      image: outerwear2,
    },
    {
      id: 3,
      name: "Product 3",
      oldPrice: 5.99,
      newPrice: 3.99,
      image: pants2,
    },
    {
      id: 4,
      name: "Product 4",
      oldPrice: 15.99,
      newPrice: 9.99,
      image: heels1,
    },
    {
      id: 5,
      name: "Product 5",
      oldPrice: 25.99,
      newPrice: 19.99,
      image: heels2,
    },
    {
      id: 6,
      name: "Product 6",
      oldPrice: 8.99,
      newPrice: 6.99,
      image: heels3,
    },
    {
      id: 7,
      name: "Product 7",
      oldPrice: 12.99,
      newPrice: 9.99,
      image: bags1,
    },
    {
      id: 8,
      name: "Product 8",
      oldPrice: 18.99,
      newPrice: 14.99,
      image: bags2,
    },
    {
      id: 9,
      name: "Product 9",
      oldPrice: 9.99,
      newPrice: 7.99,
      image: bags3,
    },
    {
      id: 10,
      name: "Product 10",
      oldPrice: 14.99,
      newPrice: 11.99,
      image: pants1,
    },
    {
      id: 11,
      name: "Product 11",
      oldPrice: 11.99,
      newPrice: 8.99,
      image: pants3,
    },
    {
      id: 1,
      name: "Product 1",
      oldPrice: 10.99,
      newPrice: 7.99,
      image: outerwear1,
    },
    {
      id: 2,
      name: "Product 2",
      oldPrice: 19.99,
      newPrice: 14.99,
      image: outerwear2,
    },
    {
      id: 3,
      name: "Product 3",
      oldPrice: 5.99,
      newPrice: 3.99,
      image: pants2,
    },
    {
      id: 4,
      name: "Product 4",
      oldPrice: 15.99,
      newPrice: 9.99,
      image: heels1,
    },
    {
      id: 5,
      name: "Product 5",
      oldPrice: 25.99,
      newPrice: 19.99,
      image: heels2,
    },
    {
      id: 6,
      name: "Product 6",
      oldPrice: 8.99,
      newPrice: 6.99,
      image: heels3,
    },
    {
      id: 7,
      name: "Product 7",
      oldPrice: 12.99,
      newPrice: 9.99,
      image: bags1,
    },
    {
      id: 8,
      name: "Product 8",
      oldPrice: 18.99,
      newPrice: 14.99,
      image: bags2,
    },
    {
      id: 9,
      name: "Product 9",
      oldPrice: 9.99,
      newPrice: 7.99,
      image: bags3,
    },
    {
      id: 10,
      name: "Product 10",
      oldPrice: 14.99,
      newPrice: 11.99,
      image: pants1,
    },
    {
      id: 11,
      name: "Product 11",
      oldPrice: 11.99,
      newPrice: 8.99,
      image: pants3,
    },
    {
      id: 1,
      name: "Product 1",
      oldPrice: 10.99,
      newPrice: 7.99,
      image: outerwear1,
    },
    {
      id: 2,
      name: "Product 2",
      oldPrice: 19.99,
      newPrice: 14.99,
      image: outerwear2,
    },
    {
      id: 3,
      name: "Product 3",
      oldPrice: 5.99,
      newPrice: 3.99,
      image: pants2,
    },
    {
      id: 4,
      name: "Product 4",
      oldPrice: 15.99,
      newPrice: 9.99,
      image: heels1,
    },
    {
      id: 5,
      name: "Product 5",
      oldPrice: 25.99,
      newPrice: 19.99,
      image: heels2,
    },
    {
      id: 6,
      name: "Product 6",
      oldPrice: 8.99,
      newPrice: 6.99,
      image: heels3,
    },
    {
      id: 7,
      name: "Product 7",
      oldPrice: 12.99,
      newPrice: 9.99,
      image: bags1,
    },
    {
      id: 8,
      name: "Product 8",
      oldPrice: 18.99,
      newPrice: 14.99,
      image: bags2,
    },
    {
      id: 9,
      name: "Product 9",
      oldPrice: 9.99,
      newPrice: 7.99,
      image: bags3,
    },
    {
      id: 10,
      name: "Product 10",
      oldPrice: 14.99,
      newPrice: 11.99,
      image: pants1,
    },
    {
      id: 11,
      name: "Product 11",
      oldPrice: 11.99,
      newPrice: 8.99,
      image: pants3,
    },
  ];
  const products = isDiscount ? productsDiscount : productsCollection;
  const [visibleProducts, setVisibleProducts] = useState(15);

  return (
    <div className="container-products">
      <div className="listOfProducts">
        {products.slice(0, visibleProducts).map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            {isDiscount ? (
              <div className="price-container">
                <p className="new-price">${product.newPrice.toFixed(2)}</p>
                <p className="old-price">${product.oldPrice.toFixed(2)}</p>
              </div>
            ) : (
              <p>${product.price}</p>
            )}
          </div>
        ))}
      </div>
      {visibleProducts < products.length && (
        <button
          className="load-more-btn"
          onClick={() => setVisibleProducts((prev) => prev + 10)}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default ShowCollectionProduct;
