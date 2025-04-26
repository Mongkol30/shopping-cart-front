import React, { useState } from 'react';
import { Product } from '../types/type';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="product-card">
      {!imageError ? (
        <img 
          src={product.image} 
          alt={product.name} 
          className="product-image"
          onError={handleImageError}
        />
      ) : (
        <div className="product-image-placeholder">
          <i className="fas fa-box" style={{ fontSize: '64px', color: '#aaa' }}></i>
          <p>{product.name}</p>
        </div>
      )}
      <h3>{product.name}</h3>
      <p className="price">฿{product.price.toLocaleString()}</p>
      <button 
        onClick={() => addToCart(product)}
        className="add-to-cart-btn"
      >
        เพิ่มลงตะกร้า
      </button>
    </div>
  );
};

export default ProductCard;