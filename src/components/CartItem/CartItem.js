import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartItem.css';

const CartItem = ({ id, titulo, price, quantity, img }) => {
  const { removeItem } = useContext(CartContext);
  const total = price * quantity;

  const handleRemoveItem = () => {
  
    removeItem(id);
  };

  return (
    <div className="cart-item">
<div className="item-image">
  <img className="item-img" src={`${img}`} alt="item" />
</div>

      <div className="item-details">
        <h3>nombre:{titulo}</h3>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
      </div>
      <div className="item-actions">
        <p>Total: ${total}</p>
    
        <button className="delete-button" onClick={handleRemoveItem}>X</button>
      </div>
    </div>
  );
};

export default CartItem;
