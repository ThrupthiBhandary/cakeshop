import React, { createContext, useState, useContext } from 'react';


const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(''); 

  
  const addToCart = (cake) => {
    setCart([...cart, cake]);
    setNotification('Item added to cart!');
  
  setTimeout(() => {
    setNotification('');
  }, 3000);
alert('Item added succesfully!')};

  
  const removeFromCart = (cakeId) => {
    setCart(cart.filter(item => item.id !== cakeId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);
