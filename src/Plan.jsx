import { useState } from "react"
import './Plan.css'


function Plan({data, removeHandler}){
    const [readmore,setReadmore]=useState(false);
     
    function read(){
        setReadmore(!readmore);
    }
    
    const desc=data.info.substring(0,10);
    return(
        <div className="Plan">
            <div className="desc">
                <img src={data.image} alt="Abhilash Jha" />
                <h4 className="price">Rs- {data.price}./</h4>
                <h3>{data.name}</h3>
                <p>{readmore ? data.info : desc } ...
                    
                     <span onClick={read} className="read">
                        {readmore ? `show less` : `read more` }
                    </span>
                </p>
            </div>
            <div className="btn">
                <button onClick={()=>removeHandler(data.id)}>Not Interested</button>
            </div>
        </div>
    )
}

export default Plan;