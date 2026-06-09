import React from "react";
import {
  FaTruck,
  FaArrowLeft,
  FaCreditCard,
  FaShoppingBasket,
  FaTrash,
  FaMapMarkerAlt,
} from "react-icons/fa";
import bags1 from "../assets/Feature Products/bags1.jpg";
import bags2 from "../assets/Feature Products/bags2.jpg";
import heels1 from "../assets/Feature Products/heels1.jpg";
import pants1 from "../assets/Feature Products/pants1.jpg";
import outerwear1 from "../assets/Feature Products/outerwear1.jpg";
import "./Checkout.css";
import OrderSummary from "../components/OrderSummary.jsx";
import ContactSection from "../components/ContactSection.jsx";
const Checkout = () => {
  const address = {
    firstName: "John",
    lastName: "Doe",
    fullAddress: "123 Main St",
    city: "Anytown",
    number: "123-456-7890",
  };
  const basketItems = [
    { id: 1, name: "bag for women", price: 10.99, image: bags1, quantity: 2 },
    { id: 2, name: "bag for men", price: 5.49, image: bags2, quantity: 1 },
    { id: 3, name: "heels", price: 20.0, image: heels1, quantity: 1 },
    { id: 4, name: "pants", price: 15.75, image: pants1, quantity: 1 },
    { id: 5, name: "outerwear", price: 8.99, image: outerwear1, quantity: 1 },
  ];
  return (
    <div className="checkout-page">
      {/* <h2>Checkout </h2> */}
      <div className="checkout">
        <div className="checkout-container">
          <div className="shipTo">
            <div className="header">
              <h3>
                <FaMapMarkerAlt /> Ship To
              </h3>
              <button>Change Address</button>
            </div>
            <div className="address-card">
              <p>
                {address.firstName} {address.lastName}
              </p>
              <p>{address.fullAddress}</p>
              <p>{address.city}</p>
              <p>{address.number}</p>
            </div>
          </div>
          <div className="shippingMethod">
            <div className="header">
              <h3>
                <FaTruck /> Shipping Method
              </h3>
            </div>
            <div className="delivery-option">
              <span className="bullet"></span>
              <p>Delivery 3$</p>
            </div>
          </div>
          <div className="PaymentMethod">
            <div className="header">
              <h3>
                <FaCreditCard /> Payment Method
              </h3>
            </div>
            <div className="methods">
              <label className="payment-option">
                <input
                  type="radio"
                  name="payment-method"
                  value="cash"
                  defaultChecked
                />
                <span>Cash On Delivery</span>
              </label>

              <label className="payment-option">
                <input type="radio" name="payment-method" value="credit-card" />
                <span>Credit Card</span>
              </label>
            </div>
          </div>
          <div className="myBasket">
            <div className="header">
              <h3>
                <FaShoppingBasket /> My Basket
              </h3>
            </div>
            <div className="basketItems">
              {basketItems.map((item) => (
                <div key={item.id} className="basketItem">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <div className="details">
                      <p className="item-name">{item.name}</p>
                      <p className="item-price">${item.price}</p>
                    </div>
                    <button>
                      <span>
                        <FaTrash />
                      </span>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OrderSummary products={basketItems} viewCase="checkout" />
      </div>
      <ContactSection />
    </div>
  );
};

export default Checkout;
