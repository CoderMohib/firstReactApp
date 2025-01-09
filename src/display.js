import ProductImage from './images.js'

export default function Display({product}){
    return (
        <div className="Product" key={product.id}>
            <h1>{product.name}</h1>
            <ProductImage images={product.images}/>
            <p>{product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price}</p>
            <p>{product.stock > 1 ? `Stock: ${product.stock}` : "Stock Not Available"}</p>
            <p>Brand: {product.brand}</p>
        </div>
    );
}