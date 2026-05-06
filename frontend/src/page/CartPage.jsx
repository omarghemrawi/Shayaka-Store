import React from "react";
import "./CartPage.css";
import { FaArrowLeft } from "react-icons/fa";
import bags1 from "../assets/Feature Products/bags1.jpg";
import bags2 from "../assets/Feature Products/bags2.jpg";
import heels1 from "../assets/Feature Products/heels1.jpg";
import pants1 from "../assets/Feature Products/pants1.jpg";
import outerwear1 from "../assets/Feature Products/outerwear1.jpg";
const CartPage = () => {
  const products = [
    {
      id: 1,
      name: "bag for women",
      image: bags1,
      price: 10,
      quantity: 2,
      size: "M",
    },
    {
      id: 2,
      name: "bag for simple outfit",
      image: bags2,
      price: 20,
      quantity: 1,
      size: "L",
    },
    {
      id: 3,
      name: "heels for women",
      image: heels1,
      price: 30,
      quantity: 3,
      size: "XXL",
    },
    {
      id: 4,
      name: "pants for women",
      image: pants1,
      price: 40,
      quantity: 2,
      size: "M",
    },
    {
      id: 5,
      name: "outerwear for women",
      image: outerwear1,
      price: 50,
      quantity: 1,
      size: "L",
    },
  ];
  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <p>you have {products.length} items in your cart</p>
        <div className="cart-header">
          <div>Product</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>
        {products.map((product) => (
          <div className="cart-item" key={product.id}>
            <div className="cart-product">
              <img src={product.image} alt={product.name} />
              <div className="cart-product-details">
                <span>{product.name}</span>
                <span>Size: {product.size}</span>
              </div>
            </div>
            <div>${product.price}</div>
            <div className="quantity-cart">
              <button onClick={() => {}}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => {}}>+</button>
            </div>
            <div>${product.price * product.quantity}</div>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <div className="summary-item">
          <div className="summary-row">
            <span>
              Subtotal (
              {products.reduce((total, product) => total + product.quantity, 0)}
              )
            </span>
            <span>
              $
              {products.reduce(
                (total, product) => total + product.price * product.quantity,
                0,
              )}
            </span>
          </div>
          <div className="summary-row">
            <span>delivery fee </span>
            <span>$5</span>
          </div>
          <div className="summary-row total-price">
            <span>Total</span>
            <span>
              $
              {products.reduce(
                (total, product) => total + product.price * product.quantity,
                0,
              ) + 5}
            </span>
          </div>
          <button className="checkout-btn">Go To Checkout</button>
          <button
            className="continue-shopping-btn"
            onClick={() => {
              window.history.back();
            }}
          >
            <FaArrowLeft /> Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
