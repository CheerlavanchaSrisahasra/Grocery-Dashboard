import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({
  products,
  wishlist,
  cart,
  onToggleWishlist,
  onToggleCart,
}) => {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          isWishlisted={wishlist.includes(product.id)}
          isInCart={cart.includes(product.id)}
          onWishlistToggle={onToggleWishlist}
          onCartToggle={onToggleCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
