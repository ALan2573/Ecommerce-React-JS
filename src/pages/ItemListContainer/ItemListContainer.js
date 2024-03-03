import "bulma/css/bulma.css";
import "./ItemListContainer.css"
import { useEffect, useState } from "react";
// import { getProducts, getProductByCategory} from "../../asyncMock.js";
import ItemList from "../../components/ItemList/ItemList";
import { useParams } from "react-router-dom";
import {getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../config/firebase.js";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {

        setLoading(true)

        const collectionRef = categoryId 
        ? query(collection(db, 'Items'), where('category', '==', categoryId))
         : collection(db, 'Items')
        getDocs(collectionRef)
        .then(res => {
            const productsAdapted =  res.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)

        })
        .catch(err => { 
            console.log(err)
            })

        .finally(() => {
             setLoading(false)})

        }, [loading, categoryId])
   


    return (
        <div className="container">
            <h1>{greeting}</h1>
            
            <ItemList products={products}/>
 


        </div>
    )
    
}

export default ItemListContainer



