import './ItemCount.css'
import { useState } from 'react';





const ItemCount = ({stock, initial, onAdd})=> {
const [quantity, setQuantity] = useState(initial);

stock = 10
const increment = () => {
    if (quantity < stock) {
        setQuantity(quantity + 1);
    }
};
const decrement = () => {
    if (quantity > 0) {
        setQuantity(quantity - 1);
    }
};

return (
    <div className="Counter">
        <div className='Controls'>
  
           <button className='button is-success' onClick={decrement}>-</button>
           <h4 className='Number'>{quantity}</h4>
           <button className='button is-success' onClick={increment}>+</button>

        </div>
    <div>
<div className='Botones'>
    


    
<button className='button is-success botonCarrito' onClick={() => onAdd(quantity)} disabled={!stock}>
Agregar al Carrito 
</button>
</div>

    </div>

    </div>



)
}



      


export default ItemCount








