import { useState, useEffect } from "react";
import ProductsList from "./ProductsList";
import ProductsRequest from "./ProductsRequest";

const ProducstListContainer = () => {

    const [products, setProducts] = useState([]);


    useEffect (() => {
        ProductsRequest()
        .then((res) => {
            setProducts(res);
        })
    }, [])


    return (
        <div>
            <ProductsList key={products.id} products={products}/>
        </div>
    )
}

export default ProducstListContainer;