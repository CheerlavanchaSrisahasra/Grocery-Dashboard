import React, { useState, useEffect } from "react";
import chips from "../chips.png";
import fruits from "../fruits.png";
import beverages from "../beverages.png";

const PromoBanner = () => {
  const promos = [
    {
      tag: "Deal of the Week",
      title: "Crunchy Snack Paradise",
      description: "Get 25% off on all chip varieties. Limited time offer!",
      image: chips,
      buttonText: "Shop Chips",
      bgColor: "#FFF5E6",
    },
    {
      tag: "Fresh Offer",
      title: "Nature's Sweetest Treats",
      description:
        "Organic fruits at unbeatable prices. Healthy never tasted so good!",
      image: fruits,
      buttonText: "Buy Fruits",
      bgColor: "#E6F7EE",
    },
    {
      tag: "Thirsty Thursday",
      title: "Cool Summer Refreshment",
      description: "Buy 2 get 1 free on all beverages. Stay hydrated!",
      image: beverages,
      buttonText: "View Drinks",
      bgColor: "#E6F0F7",
    },
  ];

  const [currentPromoIndex, setCurrentPromoIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const currentPromo = promos[currentPromoIndex];

  useEffect(() => {
    if (isHovering) return; // Pause auto-rotation when hovered

    const interval = setInterval(() => {
      setCurrentPromoIndex((prevIndex) =>
        prevIndex === promos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [promos.length, isHovering]);

  const nextPromo = () =>
    setCurrentPromoIndex((prev) => (prev + 1) % promos.length);
  const prevPromo = () =>
    setCurrentPromoIndex((prev) => (prev - 1 + promos.length) % promos.length);

  return (
    <div
      className="promo-banner"
      style={{ backgroundColor: currentPromo.bgColor }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="promo-content-wrapper">
        <div className="promo-text">
          <span className="promo-tag">{currentPromo.tag}</span>
          <h2>{currentPromo.title}</h2>
          <p>{currentPromo.description}</p>
          <button className="shop-now-btn">
            {currentPromo.buttonText} <span className="arrow">→</span>
          </button>
        </div>

        <div className="promo-image-container">
          <img
            src={currentPromo.image}
            alt="Special Offer"
            className="promo-product-image"
          />
          <div className="image-decoration-circle"></div>
          <div className="image-decoration-dots"></div>
        </div>
      </div>

      <div className="promo-indicators">
        {promos.map((_, index) => (
          <button
            key={index}
            className={`indicator ${
              index === currentPromoIndex ? "active" : ""
            }`}
            onClick={() => setCurrentPromoIndex(index)}
            aria-label={`Go to promotion ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoBanner;
