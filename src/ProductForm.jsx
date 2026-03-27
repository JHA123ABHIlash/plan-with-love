import { useState } from "react"
import './productform.css';
function ProductForm(props){
    const [newtitle,setNewtitle]=useState("");
    const [newdate,setNewdate]=useState('');

    function titleHandler(e){
        setNewtitle(e.target.value);
       
        
    }

    function dateHandler(e){
        setNewdate(e.target.value);
        
        
    }

    function handleSubmit(e){
        e.preventDefault();
        let obj={
                title:newtitle,
                date:newdate        
            }
            console.log(obj);
            setNewdate('');
            setNewtitle('');

            props.formdata(obj);
    }

    function printFormData(data){
        console.log("I'm in form data");
    }

    return(
        <form onSubmit={handleSubmit} className="productform">
            <div>
                <label htmlFor="title">Title : </label>
                <input type="text"  id="title" value={newtitle} onChange={titleHandler}/>
            </div>
            <div>
                <label htmlFor="date">Date: </label>
                <input type="date" id="date" value={newdate} onChange={dateHandler} />
            </div>
            <button>Submit</button>
        </form>
    )
} 

export default ProductForm;