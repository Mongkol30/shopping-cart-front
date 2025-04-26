import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const CartSummary: React.FC = () => {
  const { cartItems, totalItems } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity, 
    0
  );

  return (
    <div className="cart-summary">
      <h2>ตะกร้าสินค้า <span className="total-items">({totalItems} ชิ้น)</span></h2>
      
      {cartItems.length === 0 ? (
        <p className="empty-cart">ตะกร้าสินค้าว่างเปล่า</p>
      ) : (
        <>
          <div className="cart-items-container">
            {cartItems.map(item => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
          
          <div className="cart-total">
            <p>ราคารวมทั้งหมด: <span>฿{totalPrice.toLocaleString()}</span></p>
            <button className="checkout-btn">ดำเนินการชำระเงิน</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;