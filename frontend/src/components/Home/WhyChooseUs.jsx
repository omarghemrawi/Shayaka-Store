import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaSyncAlt } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import "./WhyChooseUs.css";
const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h1>Why Choose Us</h1>
      <p className="Desc-choose">
        Experience the best shopping with our exceptional services
      </p>
      <div className="features">
        <div>
          <div className="icon">
            <FaTruck />
          </div>
          <h3>Free Shipping</h3>
          <p>On all orders over $50</p>
        </div>
        <div>
          <div className="icon">
            <FaSyncAlt />
          </div>
          <h3>Easy Returns</h3>
          <p>30-day hassle free returns</p>
        </div>
        <div>
          <div className="icon">
            <FaHeadset />
          </div>

          <h3>24/7 Support</h3>
          <p>Always here to help you</p>
        </div>
        <div>
          <div className="icon">
            <FaShieldAlt />
          </div>
          <h3>Secure Payment</h3>
          <p>100% secure payment processing</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
