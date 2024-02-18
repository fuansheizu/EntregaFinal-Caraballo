import React from 'react'
import Counter from "./Counter"
import ProductDetails from "./ProductDetails";

const Product = ({products}) => {
    return(
        <div>
            <img src={products.image} alt={products.title}/>
            <h3>{products.title}</h3>
            <p>{products.price}</p>
            <p>{products.description}</p>
            <Counter/>
    </div>
    )
}

export default Product;