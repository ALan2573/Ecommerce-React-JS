
import './Cart.css';
import { useContext } from 'react';
import { CartContext } from '../../components/context/CartContext.js';
import CartItem from '../../components/CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { total, totalQuantity } = cart.reduce(
    (acc, item) => {
      acc.total += item.price * item.quantity;
      acc.totalQuantity += item.quantity;
      return acc;
    },
    { total: 0, totalQuantity: 0 }
  );

  if (totalQuantity === 0) {
    return (
      <div>
        <h2>No hay elementos en el carrito</h2>
        <Link to="/" className="BotonComprar button is-success">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="Cart">
      {cart.map((product) => (
        <CartItem key={product.id} {...product} />
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <button
        onClick={() => clearCart()}
        className="BotonComprar buttonCart button is-success"
      >
        Vaciar carrito
      </button>
      <Link to="/checkout" className="BotonComprar button buttonCart is-success">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;



