import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
// import { getProductById } from '../../asyncMock'
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

import { getDoc, doc } from "firebase/firestore"
import { db } from "../../config/firebase.js";

const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {

setLoading(true)

const docRef = doc(db, 'Items', itemId);

getDoc(docRef)
  .then(docSnap => {
    if (docSnap.exists()) {
      const data = docSnap.data();
      setProduct({ id: docSnap.id, ...data });
    } else {
      console.log("No such document!");
    }
  })
  .catch(err => {
    console.error("Error fetching data:", err);
  })
  .finally(() => {
    setLoading(false);
  });

    }, [ itemId , loading])


    return (
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}
export default ItemDetailContainer


    //     getProductById(itemId)
    //         .then(response => {
    //             setProduct(response)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }, [itemId])