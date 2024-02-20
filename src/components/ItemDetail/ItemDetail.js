import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({id, titulo, price, category, img, stock, description}) => {
    return (
        <article className="ItemDetail">

<h1 className="ItemTitle">{titulo}</h1>
<img  className="ItemImg" src={img} alt={titulo} />

<p className="ItemCategory"> Categoría: {category}</p>
    <p className="ItemDescription"> Detalle:<mark>{description}</mark> </p>

<p>${price}</p>
            <ItemCount initial={0} stock={stock} onAdd={(quantity) => console.log(`Agregaste ${quantity} al carrito ${titulo}`)} />
            </article>
    )
    
}
export default ItemDetail