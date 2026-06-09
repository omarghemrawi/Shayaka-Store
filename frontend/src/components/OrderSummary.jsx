import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import "./OrderSummary.css";
const OrderSummary = ({ products, viewCase }) => {
  return (
    <div
      className="order-summary"
      {...(viewCase === "checkout"
        ? { style: { marginTop: "50px", alignSelf: "start" } }
        : {})}
    >
      <h2>Order Summary</h2>
      <div className="summary-item">
        <div className="summary-row">
          <span>
            Subtotal (
            {products.reduce((total, product) => total + product.quantity, 0)})
          </span>
          <span>
            $
            {products.reduce(
              (total, product) => total + product.price * product.quantity,
              0,
            )}
          </span>
        </div>
        {viewCase === "checkout" && (
          <div className="summary-row">
            <span>delivery fee </span>
            <span>$3</span>
          </div>
        )}
        <div className="summary-row total-price">
          <span>Total</span>
          <span>
            $
            {products.reduce(
              (total, product) => total + product.price * product.quantity,
              0,
            ) + (viewCase === "checkout" ? 3 : 0)}
          </span>
        </div>
        <button
          className="checkout-btn"
          onClick={() => {
            window.location.href =
              viewCase === "checkout" ? "/payment" : "/checkout";
          }}
        >
          {viewCase === "checkout" ? "Proceed to Payment" : "Confirm Order"}
        </button>
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
  );
};

export default OrderSummary;
