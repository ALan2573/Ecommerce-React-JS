
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';
import { Link } from 'react-router-dom';
import cartImg from './assets/cart.svg';
import './CartWidget.css';

const CardWidget = () => {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to='/cart' className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <img src={cartImg} alt="CartWidget"  />
      {totalQuantity}
    </Link>
  );
}

export default CardWidget;