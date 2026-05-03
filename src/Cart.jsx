import { useState } from "react"

export default function ShoppingCart (){
const [product, setProduct] = useState(0)
const handleAddToCart =() =>{
    const newProduct = product + 1;
    setProduct(newProduct)
}
    const cartStyle ={
        border:"2px solid yellow",
        padding:"10px",
        margin:"5px"
    }
return (
    <div style={cartStyle}>
        <h2>product : {product}</h2>
        <button onClick={handleAddToCart}>Add to cart</button>
    </div>
)
}