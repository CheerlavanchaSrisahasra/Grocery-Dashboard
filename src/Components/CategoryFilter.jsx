import React from "react";
import { FaChevronDown } from "react-icons/fa";

const CategoryFilter = ({ categories, activeFilter, onFilter }) => {
  return (
    <div className="widget">
      <h4>Product Categories</h4>
      <div className="divider"></div>
      <ul className="category-list">
        {categories.map((category) => (
          <li
            key={category}
            className={activeFilter === category ? "active" : ""}
            onClick={() => onFilter(category)}
          >
            <label>
              <input
                type="checkbox"
                checked={activeFilter === category}
                readOnly
              />
              <span className="checkmark"></span>
              {category}
            </label>
            <FaChevronDown className="chevron" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
