import React from "react";
import chips from "../chips.png";

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="promo-text">
        <span className="promo-tag">Our The Week</span>
        <h2>Grocery store with different treasures</h2>
        <p>We have prepared special discounts for you on grocery products...</p>
        <button className="shop-now-btn">
          Shop Now <span className="arrow">→</span>
        </button>
      </div>
      <div className="promo-image">
        <img src={chips} alt="Special Offer" />
      </div>
    </div>
  );
};

export default PromoBanner;
