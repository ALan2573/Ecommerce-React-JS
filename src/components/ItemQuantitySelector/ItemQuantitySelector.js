import './ItemQuantitySelector.css';
import { useState } from 'react';

const ItemQuantitySelector = ({ stock, initial, onAdd }) => {
  const [quantitySelected, setQuantitySelected] = useState(initial);

  const increment = () => {
    if (quantitySelected < stock) {
      setQuantitySelected(quantitySelected + 1);
    }
  };

  const decrement = () => {
    if (quantitySelected > 0) {
      setQuantitySelected(quantitySelected - 1);
    }
  };

  return (
    <div className="Counter">
      <div className='Controls'>
        <button className='button is-success' onClick={decrement}>-</button>
        <h4 className='Number'>{quantitySelected}</h4>
        <button className='button is-success' onClick={increment}>+</button>
      </div>
      <div>
        <div className='Botones'>
          <button className='button is-success botonCarrito' onClick={() => onAdd(quantitySelected)} disabled={!stock}>
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemQuantitySelector;
