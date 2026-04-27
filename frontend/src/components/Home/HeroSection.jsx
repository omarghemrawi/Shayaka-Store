import React from "react";
import "./HeroSection.css";
// import heroImage from "../assets/hero.png";

const HeroSection = () => {
  return (
    // <div className="hero-section">
    //   <div className="left-section">
    //     <h1>Upgrade Your Style Today</h1>
    //     <p>Discover the Latest Trends with exclusive deals and fast delivery</p>
    //     <div className="btn-group">
    //       <button>Shop Now</button>
    //       <button>View Details</button>
    //     </div>
    //   </div>
    //   <div className="right-section">
    //     <img src={heroImage} alt="Hero" />
    //   </div>
    // </div>

    <div className="hero-section">
      <div className="hero-section-content">
        <h1>Upgrade Your Style Today</h1>
        <p>Discover the Latest Trends with exclusive deals and fast delivery</p>
        <div className="btn-group">
          <button>Shop Now</button>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
