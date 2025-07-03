import React from "react";

const PriceFilter = ({ minPrice, maxPrice, onChange, onReset }) => {
  const MAX_RANGE = 100;

  const handleMinChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    if (value <= maxPrice) {
      onChange("min", Math.min(value, MAX_RANGE));
    }
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    if (value >= minPrice) {
      onChange("max", Math.min(value, MAX_RANGE));
    }
  };

  const handleSliderChange = (type, e) => {
    const value = parseInt(e.target.value);
    if (type === "min" && value <= maxPrice) {
      onChange("min", value);
    } else if (type === "max" && value >= minPrice) {
      onChange("max", value);
    }
  };

  const handleReset = () => {
    onChange("min", 0);
    onChange("max", MAX_RANGE);
    if (onReset) onReset();
  };

  return (
    <div className="price-filter-widget">
      <h4>Price Filter</h4>
      <div className="divider"></div>

      <div className="price-input-fields">
        <div className="price-input">
          <label>Min price ($)</label>
          <input
            type="number"
            min="0"
            max={MAX_RANGE}
            placeholder="0"
            value={minPrice}
            onChange={handleMinChange}
          />
        </div>
        <div className="price-input">
          <label>Max price ($)</label>
          <input
            type="number"
            min="0"
            max={MAX_RANGE}
            placeholder={MAX_RANGE}
            value={maxPrice}
            onChange={handleMaxChange}
          />
        </div>
      </div>

      <div className="price-range-slider-container">
        <input
          type="range"
          min="0"
          max={MAX_RANGE}
          value={minPrice}
          onChange={(e) => handleSliderChange("min", e)}
          className="slider min-slider"
        />
        <input
          type="range"
          min="0"
          max={MAX_RANGE}
          value={maxPrice}
          onChange={(e) => handleSliderChange("max", e)}
          className="slider max-slider"
        />
        <div className="slider-track">
          <div
            className="slider-range"
            style={{
              left: `${(minPrice / MAX_RANGE) * 100}%`,
              width: `${((maxPrice - minPrice) / MAX_RANGE) * 100}%`,
            }}
          ></div>
          <div
            className="slider-thumb left-thumb"
            style={{ left: `${(minPrice / MAX_RANGE) * 100}%` }}
          ></div>
          <div
            className="slider-thumb right-thumb"
            style={{ left: `${(maxPrice / MAX_RANGE) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="price-display">
        <span>
          Price: ${minPrice} – ${maxPrice}
        </span>
        <div className="price-actions">
          <button className="reset-btn" onClick={handleReset}>
            Reset
          </button>
          <button className="filter-btn">Filter</button>
        </div>
      </div>
    </div>
  );
};

export default PriceFilter;
