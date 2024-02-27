import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItem = ({ id, titulo, price, quantity }) => {
  const { removeItem } = useContext(CartContext);
  const total = price * quantity;

  const handleRemoveItem = () => {
  
    removeItem(id);
  };

  return (
    <div className="cart-item">
      <div className="item-details">
        <h3>nombre:{titulo}</h3>
        <p>Precio: ${price}</p>
        <p>Cantidad: {quantity}</p>
      </div>
      <div className="item-actions">
        <p>Total: ${total}</p>
    
        <button onClick={handleRemoveItem}>Eliminar</button>
      </div>
    </div>
  );
};

export default CartItem;
