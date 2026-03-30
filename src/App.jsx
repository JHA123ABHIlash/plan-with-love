import { useState } from 'react'

// import ProductList from './ProductList';
// import ProductForm from './ProductForm';
import Tour from './Tour';
import data from "./data";

function App() {
// const item=[
//   {name:"Nirma",
//     date:new Date("2002-08-05")
//   },
//   {
//     name:"Sirf Excel",
//     date:new Date("2012-1-15")
//   },
//   {
//     name:"Tide",
//     date:new Date("2007-10-19")
//   },
//    {
//     name:"Ghari",
//     date:new Date("1972-3-25")
//   }
// ];


//   const [newitem,setNewitem]=useState(item);



//  function printFormData(data){
//         console.log("I'm in form data");
//         console.log(data);
//         setNewitem([...newitem, {name:data.title,date:new Date(data.date)}]);
//   }

const [tours,setTours]=useState(data);

    function removeHandler(id){
      let newtour=tours.filter((el)=>(el.id !== id));
      setTours(newtour);
    };

    if(tours.length===0){
      return(
        <div className='refresh'>
          <div>
            <h2 className='refresh-h2'>No Tours Left</h2>
            <button onClick={()=>setTours(data)} className='refresh-div'> Refresh</button>
          </div>
        </div>
      )
    }

  return (
    <>

    {/* <ProductForm formdata={printFormData}/>
      <ProductList item={newitem}/> */}
      
   
        <Tour data={tours} removeHandler={removeHandler}></Tour>
      

    </>
  )
}

export default App;
