import React from 'react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { totalItems } = useCart();
  
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>ร้านค้าออนไลน์</h1>
      </div>
      <div className="navbar-cart">
        <div className="cart-icon">
          🛒 <span className="cart-count">{totalItems}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;