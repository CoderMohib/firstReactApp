import ProductImage from './images.js'
function GetColour(rating){
    if (rating < 1) {return 'rating-red';}
    if (rating >= 1 && rating <= 4) {return 'rating-yellow';}
    return 'rating-green';
}
function GetStockclass(stock){
    if (stock < 0 ) {return null;}
    if (stock === 0) { return 'grey';}
}
export default function Display({product}){
    return (
        <div className="Product" key={product.id}>
            <h1>
                {product.name}
            </h1>
            <ProductImage images={product.images} productName={product.name}/>
            <p>
                <b>Description:</b>
                <p>{product.description}</p>
            </p>
            <p>
                <b>Category:</b> 
                {product.category}
            </p>
            <p>
                <b>Price:</b> 
                {product.price}
            </p>
            <p style={{color: GetStockclass(product.stock)}}>
                <b>
                {product.stock > 1 ? `Stock: ${product.stock}` : "Stock Not Available"}
                </b>
            </p>
            <p>
                <b>Brand:</b> 
                {product.brand}
            </p>
            <p>
                <b>Rating:</b> 
                <span className={GetColour(product.rating)}> {product.rating}</span>
            </p>
        </div>
    );
}