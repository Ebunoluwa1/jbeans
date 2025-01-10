import React from 'react';

// Product Detail Page
const ProductDetailPage = ({ product }) => {
  return (
    <div className="product-detail-page">
      {/* Product Images */}
      <div className="product-images">
        <img src={product.image} alt={product.name} />
      </div>

      {/* Product Information */}
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>${product.price}</p>

        {/* Quantity Selector */}
        <label>
          Quantity:
          <input type="number" min="1" max="10" />
        </label>

        {/* Add to Cart Button */}
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
