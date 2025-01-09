export default function ProductImage({images}){
    return(
        <div className="product-images">
            {images.map((image,index)=>
                (<img key={index} src={image} alt={`Product ${index+1}`}/>))}
        </div>
    );
}