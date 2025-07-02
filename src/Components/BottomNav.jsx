import React from "react";
import { FaChevronDown, FaHome, FaStore } from "react-icons/fa";

const BottomNav = () => {
  return (
    <nav className="bottom-nav">
      <div className="nav-left">
        <a href="#" className="active">
          <FaHome className="nav-icon" /> Home{" "}
          <FaChevronDown className="chevron-icon" />
        </a>
        <a href="#">
          <FaStore className="nav-icon" /> Shop{" "}
          <FaChevronDown className="chevron-icon" />
        </a>
        <a href="#">Categories</a>
        <a href="#">Fruits & Vegetables</a>
        <a href="#">Beverages</a>
      </div>
      <div className="nav-right">
        <a href="#">
          Trending Products <FaChevronDown className="chevron-icon" />
        </a>
        <a href="#" className="red">
          Almost Finished <div className="sale-badge-bottom">Sale</div>
          <FaChevronDown className="chevron-icon-red" />
        </a>
      </div>
    </nav>
  );
};

export default BottomNav;
