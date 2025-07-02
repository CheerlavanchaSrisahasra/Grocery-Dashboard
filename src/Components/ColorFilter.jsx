import React from "react";
import { FaChevronDown } from "react-icons/fa";

const ColorFilter = ({ colors, activeFilter, onFilter }) => {
  const getColorHex = (color) => {
    switch (color) {
      case "Green":
        return "#008000";
      case "Red":
        return "#FF0000";
      case "Blue":
        return "#0000FF";
      case "Yellow":
        return "#FFFF00";
      default:
        return "#000000";
    }
  };

  return (
    <div className="widget">
      <h4>Filter by Color</h4>
      <div className="divider"></div>
      <ul className="color-filter-list">
        {colors.map((color) => (
          <li
            key={color}
            className={activeFilter === color ? "active" : ""}
            onClick={() => onFilter(color)}
          >
            <label>
              <input
                type="checkbox"
                checked={activeFilter === color}
                readOnly
              />
              <span
                className="color-checkmark"
                style={{ backgroundColor: getColorHex(color) }}
              ></span>
              {color}
            </label>
            <FaChevronDown className="color-chevron" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorFilter;
