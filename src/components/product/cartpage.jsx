import React from 'react';


// Cart Page
const CartPage = ({ cartItems }) => {

    // Add to Cart Functionality
const addToCart = (product) => {
  // Add product to cart in frontend state
  // Also update backend if necessary
};

const updateCartItem = (id, quantity) => {
  // Update item quantity in cart
};

const removeFromCart = (id) => {
  // Remove item from cart
};

  return (
    <div className="cart-page">
      {/* Cart Items List */}
      <ul className="cart-items">
        {cartItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>${item.price}</p>

              {/* Update Options */}
              <label>
                Quantity:
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateCartItem(item.id, e.target.value)}
                />
              </label>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>

      {/* Checkout Button */}
      <button className="checkout-button">Proceed to Checkout</button>
    </div>
  );
};


export default Cartpage;

