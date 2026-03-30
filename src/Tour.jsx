import Plan from "./Plan";
import "./Tour.css";

function Tour({data,removeHandler}){
    return(
        <div className="Tour">
           <h2>Plan with Love</h2>
           <div className="tour-des"> 
            
                {
                    data.map((el)=>(
                    <Plan key={el.id} data={el} removeHandler={removeHandler} />
                    ))
                }
            </div>
        </div>
    )
}

export default Tour;