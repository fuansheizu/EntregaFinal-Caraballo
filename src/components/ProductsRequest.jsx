import data from "../data/products.json";

const ProductsRequest = () => {
    return new Promise ((resolve, reject) => {
        resolve(data)
    })
}

export default ProductsRequest;