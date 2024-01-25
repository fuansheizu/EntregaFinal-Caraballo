const Product = ({products}) => {
    return(
        <div>
            <img src={products.image} alt={products.title}/>
            <h3>{products.title}</h3>
            <p>{products.price}</p>
            <p>{products.description}</p>
    </div>
    )
}

export default Product;