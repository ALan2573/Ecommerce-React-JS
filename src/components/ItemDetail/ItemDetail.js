
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase.js';
import ItemQuantitySelector from '../ItemQuantitySelector/ItemQuantitySelector.js';
import './ItemDetail.css';

const ItemDetail = () => {
  const { itemId } = useParams(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantityAdded, setQuantityAdded] = useState(0);
  const { addItem } = useContext(CartContext);
 
  useEffect(() => {
    setLoading(true);

    const fetchProduct = async () => {
      try {
        const docRef = doc(db, 'Items', String(itemId));
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setProduct({ id: docSnap.id, ...data });
        } else {
          console.log('No such document!');
        }
      }  catch (error) {
        console.error('Error fetching data:', error);
        console.log('Error details:', error.details); 
      } finally {
        setLoading(false);
      }
    };
  
    fetchProduct();
  }, [itemId]);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id: product.id,
      titulo: product.titulo,
      price: product.price,
    };

    addItem(item, quantity);
  };

  return (
    <article className="ItemDetail">
      {loading ? (
        <p>Cargando...</p>
      ) : product ? (
        <>
          <h1 className="ItemTitle">{product.titulo}</h1>
          <img className="ItemImg" src={product.img} alt={product.titulo} />
          <p className="ItemCategory"> Categoría: {product.category}</p>
          <p className="ItemDescription">
            Detalle: <mark>{product.description}</mark>
          </p>
          <p>${product.price}</p>

          <footer className="ItemFooter">
            {quantityAdded > 0 ? (
              <Link to="/cart" className="addItemButton Option BotonComprar button is-success">
                Terminar Compra
              </Link>
            ) : product.stock > 0 ? (
              <ItemQuantitySelector
                stock={product.stock}
                initial={1}
                onAdd={handleOnAdd}
              />
            ) : (
              <p className="OutOfStock">Producto agotado</p>
            )}
          </footer>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </article>
  );
};

export default ItemDetail;


