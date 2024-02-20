
import "bulma/css/bulma.css";
import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock.js";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(res => setProducts(res))
        .catch(err => console.log(err))
        

    } , [])

    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList products={products}/>

        </div>
    )
    
}

export default ItemListContainer



