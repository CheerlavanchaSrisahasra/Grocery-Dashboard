import React from "react";

const PriceFilter = ({ minPrice, maxPrice, onChange }) => {
  return (
    <div className="widget">
      <h4>Widget Price Filter</h4>
      <div className="divider"></div>

      <div className="price-input-fields">
        <div className="price-input">
          <label>Min price</label>
          <input
            type="number"
            placeholder="0"
            value={minPrice}
            onChange={(e) => onChange("min", parseInt(e.target.value))}
          />
        </div>
        <div className="price-input">
          <label>Max price</label>
          <input
            type="number"
            placeholder="30"
            value={maxPrice}
            onChange={(e) => onChange("max", parseInt(e.target.value))}
          />
        </div>
      </div>

      <div className="price-range-slider">
        <div
          className="slider-track"
          style={{
            left: `${(minPrice / 30) * 100}%`,
            right: `${100 - (maxPrice / 30) * 100}%`,
          }}
        ></div>
        <div
          className="slider-thumb left"
          style={{ left: `${(minPrice / 30) * 100}%` }}
        ></div>
        <div
          className="slider-thumb right"
          style={{ left: `${(maxPrice / 30) * 100}%` }}
        ></div>
      </div>

      <div className="price-display">
        <span>
          Price: ${minPrice} – ${maxPrice}
        </span>
        <button className="filter-btn">Filter</button>
      </div>
    </div>
  );
};

export default PriceFilter;
