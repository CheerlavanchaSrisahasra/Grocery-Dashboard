import React, { useState } from "react";
import OfferBar from "./OfferBar";
import AccountBar from "./AccountBar";
import MiddleHeader from "./MiddleHeader";
import BottomNav from "./BottomNav";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import BrandFilter from "./BrandFilter";
import FilterSummary from "./FilterSummary";
import PromoBanner from "./PromoBanner";
import FilterInfo from "./FilterInfo";
import ProductGrid from "./ProductGrid";

import products from "../data/products";
import categories from "../data/categories";
import colors from "../data/colors";
import brands from "../data/brands";

import "../Dashboard.css";

const Dashboard = () => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(30);
  const [activeFilters, setActiveFilters] = useState({
    category: "Fruits & Vegetables",
    color: "Green",
  });

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleCart = (id) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handlePriceChange = (type, value) => {
    if (type === "min") setMinPrice(value);
    else setMaxPrice(value);
  };

  const applyFilter = (type, value) => {
    setActiveFilters({ ...activeFilters, [type]: value });
  };

  const clearFilter = (type) => {
    const newFilters = { ...activeFilters };
    delete newFilters[type];
    setActiveFilters(newFilters);
  };

  const clearAllFilters = () => setActiveFilters({});

  const filteredProducts = products.filter((product) => {
    if (product.price < minPrice || product.price > maxPrice) return false;
    for (const key in activeFilters) {
      if (product[key.toLowerCase()] !== activeFilters[key]) return false;
    }
    return true;
  });

  return (
    <div className="dashboard">
      <OfferBar />
      <AccountBar wishlist={wishlist} cart={cart} />
      <MiddleHeader />
      <BottomNav />

      <div className="main-section">
        <aside className="sidebar">
          <PriceFilter
            minPrice={minPrice}
            maxPrice={maxPrice}
            onChange={handlePriceChange}
          />
          <CategoryFilter
            categories={categories}
            activeFilter={activeFilters.category}
            onFilter={(val) => applyFilter("category", val)}
          />
          <ColorFilter
            colors={colors}
            activeFilter={activeFilters.color}
            onFilter={(val) => applyFilter("color", val)}
          />
          <BrandFilter
            brands={brands}
            activeFilter={activeFilters.brand}
            onFilter={(val) => applyFilter("brand", val)}
          />
        </aside>

        <section className="main-content">
          <FilterSummary
            filters={activeFilters}
            onClear={clearFilter}
            onClearAll={clearAllFilters}
          />
          <PromoBanner />
          <FilterInfo total={filteredProducts.length} />
          <ProductGrid
            products={filteredProducts}
            wishlist={wishlist}
            cart={cart}
            onToggleWishlist={toggleWishlist}
            onToggleCart={toggleCart}
          />
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
