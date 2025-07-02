import React from "react";
import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

const MiddleHeader = () => {
  return (
    <div className="middle-header">
      <div className="logo">
        <span className="logo-container">
          <span className="astro">ASTR</span>
          <span className="star">
            <FaStar />
          </span>
          <span className="red-letter">O</span>
          <span className="lite">LITE</span>
        </span>
        <span className="subtext">The Future begins here... </span>
      </div>

      <div className="search-container">
        <div className="delivery-info">
          <FaMapMarkerAlt className="location-icon" />
          <span>Deliver to all</span>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for products, categories or brands..."
          />
          <FaSearch className="search-icon" />
        </div>
      </div>

      <div className="right-icons">
        <div className="user-info">
          <FaUser className="user-icon" />
          <div className="user-profile-content">
            <span className="signin-name">Sign in</span>
            <span className="user-name">Account</span>
          </div>
        </div>
        <div className="icon-wrap">
          <FaHeart />
        </div>
        <div className="icon-wrap">
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default MiddleHeader;
