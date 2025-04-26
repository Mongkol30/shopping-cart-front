import React from 'react';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartSummary from './components/CartSummary';
import products from './mockdata/products';
import './App.css';

const App: React.FC = () => {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <div className="container">
          <div className="main-content">
            <h2>สินค้าทั้งหมด</h2>
            <ProductList products={products} />
          </div>
          <div className="sidebar">
            <CartSummary />
          </div>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;