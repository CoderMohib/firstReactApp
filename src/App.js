import {products} from './data.js'
import Display from './display.js'

export default function App(){
  return (
      <div className="Main">
        {products.map((product,index)=>(
          <Display key={index}  product={product} />
        ))}
      </div>
  );
}