import ProductDate from "./ProductDate";
import './Product.css'
function Product({item}){
   
    return(
        <div className="product">
           <ProductDate date={item.date}/>
            <h3>{item.name}</h3>
            <button>Add to cart</button>
        </div>
    )
}

export default Product;