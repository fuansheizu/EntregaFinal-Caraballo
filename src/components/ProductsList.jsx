import Product from "./Product";

const ProductsList = ({products}) => {
    return (
        <div>
            <h1>Productos</h1>
            <div className="products">
            {
                products.length > 0 &&
                products.map((products) => {
                    return (
                        <Product key={products.id} products={products}/>
                    )
                })
            }
        </div>
    </div>
    )
}

export default ProductsList;