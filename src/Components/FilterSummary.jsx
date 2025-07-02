import React from "react";
import { FaTimes } from "react-icons/fa";

const FilterSummary = ({ filters, onClear, onClearAll }) => {
  return (
    <div className="filter-summary">
      <div className="left-filters">
        {Object.entries(filters).map(([key, value]) => (
          <span className="filter-tag" key={key}>
            {value}
            <FaTimes className="filter-close" onClick={() => onClear(key)} />
          </span>
        ))}
      </div>
      <div className="clear-filters" onClick={onClearAll}>
        <span>X Clear filters</span>
      </div>
    </div>
  );
};

export default FilterSummary;
