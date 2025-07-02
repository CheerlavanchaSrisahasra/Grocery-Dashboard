import React from "react";
import { FaChevronDown } from "react-icons/fa";

const BrandFilter = ({ brands, activeFilter, onFilter }) => {
  return (
    <div className="widget">
      <h4>Filter by Brands</h4>
      <div className="divider"></div>
      <ul className="brand-filter-list">
        {brands.map((brand) => (
          <li
            key={brand}
            className={activeFilter === brand ? "active" : ""}
            onClick={() => onFilter(brand)}
          >
            <label>
              <input
                type="checkbox"
                checked={activeFilter === brand}
                readOnly
              />
              <span className="checkmark"></span>
              {brand}
            </label>
            <FaChevronDown className="chevron" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BrandFilter;
