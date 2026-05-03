import { useState } from "react"

export default function Count(){

    const [count, setCount] = useState(0);
    const handleCount = ()=>{
const newCount = count + 1;
setCount(newCount)
    }
    const countStyle ={
        border:"2px solid purple",
        padding:"10px",
        margin:"5px"
    }
    return(
        <div style={countStyle}>
            <h2>Count :{count}</h2>
            <button onClick={handleCount}>Add</button>
        </div>
    )
}