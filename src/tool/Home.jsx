import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to The Cake Shop!</h1>
      <p>Sweet Delights, Every Bite</p>
      <Link to="/categories" className="explore-button">Explore Cakes</Link>
      <div className="featured-cakes">
       
      </div>
    </div>
  );
}

export default Home;
