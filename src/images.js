export default function ProductImage({images,productName}){
    return(
        <div className="product-images">
            {images.map((image,index)=>
                (<img key={index} src={image} alt={productName}/>))}
        </div>
    );
}