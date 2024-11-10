import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './tool/CartContext';
import Signup from './tool/Signup';
import Home from './tool/Home';
import About from './tool/About';
import CakeDetails from './tool/CakeDetails';
import Categories from './tool/Categories';
import Cart from './tool/Cart';
import Contact from './tool/Contact';
import Feedback from './tool/Feedback';
import Footer from './tool/Footer';
import Header from './tool/Header';
import Profile from './tool/Profile';
import './tool/styles.css';

function App() {
  return (
    <CartProvider>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cake-details" element={<CakeDetails />} />
        <Route path="/category/:categoryName" element={<CakeDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cake/:id" element={<CakeDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
    </CartProvider>
  );
}

export default App;
