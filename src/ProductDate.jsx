import './ProductDate.css';
function ProductDate({date}){

     const year=date.getFullYear();
    const month =date.toLocaleString("en-GB", { month: "long" });
    const day=date.getDate();

    return(
        <div className="productDate">
            <p> {month} </p>
            <p> {year} </p>
            <p> {day} </p>
        </div>
    )
}

export default ProductDate;