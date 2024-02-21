
import "bulma/css/bulma.css";
import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import { getProducts, getProductByCategory} from "../../asyncMock.js";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
 const asyncFunc = categoryId ? getProductByCategory : getProducts
asyncFunc(categoryId)
        // getProducts()
        .then(res => setProducts(res))
        .catch(err => console.log(err))
        

    }, [categoryId])

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products}/>
 


        </div>
    )
    
}

export default ItemListContainer



