import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Wedding Cake', image: 'https://beardybaker.net/cdn/shop/files/david-holifield-oJtuw59ViW4-unsplash-2.jpg?v=1706800557' },
    { id: 2, name: 'Birthday Cake', image: 'https://liliyum.com/cdn/shop/products/maroonbirthdaycake_2400x.jpg?v=1661842200' },
    { id: 3, name: 'Custom Cake', image: 'https://ovenfresh.in/wp-content/uploads/2023/02/Shades-of-Blue-Rosette-Cake-min.jpg' },
  ];

  return (
    <div className="categories-container">
      <h2>Choose a Cake Category</h2>
      <div className="categories-list">
        {categories.map((category) => (
          <Link key={category.id} to={`/category/${category.name.toLowerCase().replace(" ", "-")}`} className="category-item">
            <img src={category.image} alt={category.name} className="category-image" />
            <h3>{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
