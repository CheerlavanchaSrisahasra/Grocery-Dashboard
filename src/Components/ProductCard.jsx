import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({
  product,
  isWishlisted,
  isInCart,
  onWishlistToggle,
  onCartToggle,
}) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <div className="sale-badge">Sale</div>
        <button
          className={`wishlist-btn ${isWishlisted ? "active" : ""}`}
          onClick={() => onWishlistToggle(product.id)}
        >
          <FaHeart />
        </button>
        <img src={product.image} alt={product.name} />
      </div>
      <h4>{product.name}</h4>
      <div className="price">
        <span className="new">${product.price.toFixed(2)}</span>
        {product.oldPrice && (
          <span className="old">${product.oldPrice.toFixed(2)}</span>
        )}
      </div>
      <div className="stock-cart">
        <button
          className={`cart-btn ${isInCart ? "in-cart" : ""}`}
          onClick={() => onCartToggle(product.id)}
        >
          <FaShoppingCart />
        </button>
        <span className="in-stock">
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
