import React, { useState } from 'react';
import { CartItem as CartItemType } from '../types/type';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const { product, quantity } = item;
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="cart-item">
      {!imageError ? (
        <img 
          src={product.image} 
          alt={product.name} 
          className="cart-item-image"
          onError={handleImageError}
        />
      ) : (
        <div className="cart-item-image-placeholder">
          <i className="fas fa-box"></i>
        </div>
      )}
      <div className="cart-item-details">
        <h4>{product.name}</h4>
        <p className="price">฿{product.price.toLocaleString()}</p>
        <div className="quantity-controls">
          <button onClick={() => decreaseQuantity(product.id)}>
            <i className="fas fa-minus"></i>
          </button>
          <span className="quantity">{quantity}</span>
          <button onClick={() => increaseQuantity(product.id)}>
            <i className="fas fa-plus"></i>
          </button>
        </div>
        <p className="subtotal">รวม: ฿{(product.price * quantity).toLocaleString()}</p>
        <button 
          onClick={() => removeFromCart(product.id)}
          className="remove-btn"
        >
          <i className="fas fa-trash"></i> ลบ
        </button>
      </div>
    </div>
  );
};

export default CartItem;