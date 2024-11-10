import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './CartContext';
import './CakeDetails.css';

const cakesData = {
  'wedding-cake': [
    {
      id: 1,
      name: 'Elegant Wedding Cake',
      image: 'https://i.pinimg.com/736x/7b/01/2a/7b012ab98952d149dd0a64f8ba78e8ae.jpg',
      price: 700,
      description: 'A beautiful, elegant wedding cake with delicate floral decorations.',
    },
    {
      id: 2,
      name: 'Royal Wedding Cake',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiBXEA2tJnSRRC2cDkuH1AcPSL7Wtpfly54A&s',
      price: 650,
      description: 'A royal-style wedding cake decorated with gold leaves.',
    },
    {
      id: 3,
      name: 'Classic Wedding Cake',
      image: 'https://i.pinimg.com/736x/c0/60/3a/c0603a538f1f238c19b44ab56bbdb57e.jpg',
      price: 550,
      description: 'A simple yet classy wedding cake with vanilla and strawberry flavors.',
    },
  ],
  'birthday-cake': [
    {
      id: 1,
      name: 'Happy Birthday Cake',
      image: 'https://c.stocksy.com/a/nJ8900/z9/2176931.jpg',
      price: 350,
      description: 'A fun and colorful cake for a happy birthday celebration!',
    },
    {
      id: 2,
      name: 'Rainbow Birthday Cake',
      image: 'https://www.gracebakery.in/images/rainbow-birthday-cake.webp',
      price: 400,
      description: 'A vibrant rainbow-colored cake with delicious layers.',
    },
    {
      id: 3,
      name: 'Chocolate Birthday Cake',
      image: 'https://www.theflowerspoint.com/data/cache/images/cakes/chocolate-cakes/happy-birthday-chocolate-cake-328x328.jpg',
      price: 300,
      description: 'A rich chocolate cake with a creamy chocolate frosting.',
    },
  ],
  'custom-cake': [
    {
      id: 1,
      name: 'Custom Design Cake',
      image: 'https://i.pinimg.com/originals/4b/c2/fe/4bc2fe1c421637ced024c9ce0b313ef2.jpg',
      price: 750,
      description: 'Get a cake designed as per your specific theme and taste.',
    },
    {
      id: 2,
      name: 'Themed Cake',
      image: 'https://imgcdn.floweraura.com/creamy-cute-lion-theme-designer-cake-9796370ca-A_0.jpg',
      price: 800,
      description: 'A cake based on your personal theme for any event.',
    },
    {
      id: 3,
      name: 'Personalized Cake',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX1SAZZLAFET9tUmIros8w0NtmKFQuLCVrYQ&s',
      price: 700,
      description: 'A customized cake with your name and special decorations.',
    },
  ],
};

const CakeDetails = () => {
  const { categoryName } = useParams();
  const cakesInCategory = cakesData[categoryName] || [];
  const { addToCart, notification } = useCart(); 

  return (
    <div className="cake-details-container">
      <h2>{categoryName.replace('-', ' ').toUpperCase()}</h2>
 {}
 {notification && <div className="notification">{notification}</div>}

<div className="cakes-list">
  {cakesInCategory.map((cake) => (
    <div key={cake.id} className="cake-item">
      <img src={cake.image} alt={cake.name} className="cake-image" />
      <h3>{cake.name}</h3>
      <p>{cake.description}</p>
      <span>Rs.{cake.price}</span>
      <button onClick={() => addToCart(cake)} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  ))}
</div>
</div>
);
};

export default CakeDetails;
     