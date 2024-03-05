import React from 'react';
import { db } from '../../config/firebase';
import { Timestamp } from 'firebase/firestore';
import { writeBatch, collection, getDocs, query, where, documentId, addDoc } from 'firebase/firestore';
import { CartContext } from '../../components/context/CartContext';
import CheckoutForm from '../../components/CheckoutForm/CheckoutForm.js';
import { useState, useContext } from 'react';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const { cart, total, clearCart } = useContext(CartContext);

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
  
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: total || 0, // Asegúrate de que total tenga un valor, de lo contrario, asigna 0
        date: Timestamp.fromDate(new Date()),
      };
  
      console.log('Orden a enviar:', objOrder);
  
      const batch = writeBatch(db);
      const outOfStock = [];
  
      const ids = cart.map(product => product.id);
  
      if (ids.length > 0) {
        const productsRef = collection(db, 'Items');
        const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)));
  
        const { docs } = productsAddedFromFirestore;
  
        docs.forEach(doc => {
          const dataDoc = doc.data();
          const stockDb = dataDoc.stock;
  
          const productAddedToCart = cart.find(product => product.id === doc.id);
          const quantity = productAddedToCart?.quantity;
  
          if (stockDb >= quantity) {
            batch.update(doc.ref, { stock: stockDb - quantity });
          } else {
            outOfStock.push({ id: doc.id, ...dataDoc });
          }
        });
  
        if (outOfStock.length === 0) {
          await batch.commit();
          const orderRef = collection(db, 'Orders');
          const orderAdded = await addDoc(orderRef, objOrder);
          setOrderId(orderAdded.id);
          clearCart();
        } else {
          console.log('Hay productos fuera de stock');
        }
  
      } else {
        console.log('El carrito está vacío');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <h1>Se está generando tu orden</h1>;
  }

  if (orderId) {
    return <h1>El id de tu orden es: {orderId}</h1>;
  }

  return (
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={createOrder} />
    </div>
  );
};

export default Checkout;
