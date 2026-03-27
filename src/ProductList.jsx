
import { useState } from "react";
import Product from "./Product";
import './productList.css'

function ProductList({item}){
     return(
          <div className="productList">
               {item.map((el,idx)=>(
                    <Product key={idx}
                         item={el}/>
               ))}
          </div>
     )
}

export default ProductList;