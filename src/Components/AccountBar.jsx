import React from "react";
import { FaChevronDown, FaHeart, FaShoppingCart } from "react-icons/fa";

const AccountBar = ({ wishlist, cart }) => {
  return (
    <div className="header-top">
      <div className="left-section">
        <span>About</span>
        <span>My Account</span>
        <span>Wishlist</span>
      </div>
      <div className="right-section">
        <span>
          USD <FaChevronDown className="chevron1" />
        </span>
        <span>
          English <FaChevronDown className="chevron1" />
        </span>
        <span>Order Tracking</span>
      </div>
    </div>
  );
};

export default AccountBar;
