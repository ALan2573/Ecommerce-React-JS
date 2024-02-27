import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext.js'


const ItemDetail = ({id, titulo, price, category, img, stock, description}) => {
      
    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext) 

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id,
            titulo,
            price,
            
        }

        addItem(item, quantity)
    }


    return (
        <article className="ItemDetail">
        <h1 className="ItemTitle">{titulo}</h1>
        <img  className="ItemImg" src={img} alt={titulo} />
         <p className="ItemCategory"> Categoría: {category}</p>
         <p className="ItemDescription"> Detalle:<mark>{description}</mark> </p>
         <p>${price}</p>

         <footer className="ItemFooter">

            {
                quantityAdded > 0  ? (
                    <Link to="/cart" className= "Option BotonComprar button is-success">Terminar Compra</Link>
                    ) : ( 
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                    ) 
            }

         </footer>
       
          </article>
    )
    
}
export default ItemDetail