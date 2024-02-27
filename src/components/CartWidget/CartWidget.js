// import cart from './assets/cart.svg';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';
import { Link } from 'react-router-dom';

const CardWidget = () => {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Link to='/cart' className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <img src={cart} alt="CartWidget" className="CartWidget" />
      {totalQuantity}
    </Link>
  );
}

export default CardWidget;