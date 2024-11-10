import React from 'react';
import { useCart } from './CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useCart(); 

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cart.map((cake) => (
              <li key={cake.id} className="cart-item">
                <img src={cake.image} alt={cake.name} className="cart-image" />
                <h3>{cake.name}</h3>
                <p>Rs.{cake.price}</p>
                <button
                  onClick={() => removeFromCart(cake.id)}
                  className="remove-from-cart-btn"
                >
                  Remove from Cart
                </button>
              </li>
            ))}
          </ul>
          <div className="total">
            Total: Rs.{cart.reduce((total, cake) => total + cake.price, 0)}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
