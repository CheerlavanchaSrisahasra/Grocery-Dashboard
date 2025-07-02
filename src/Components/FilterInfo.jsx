import React from "react";
import { FaThLarge, FaList } from "react-icons/fa";

const FilterInfo = ({ total }) => {
  return (
    <div className="filter-info">
      <span>Showing all {total} results</span>
      <div className="right-filters">
        <span className="sort-text">
          Sort: <strong>Sort by latest</strong>
        </span>
        <span className="show-text">
          Show: <strong>5 items</strong>
        </span>
        <div className="view-icons">
          <FaThLarge className="icon" title="Grid View" />
          <FaList className="icon" title="List View" />
        </div>
      </div>
    </div>
  );
};

export default FilterInfo;
