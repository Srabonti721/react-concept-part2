import { useState } from "react"

export default function Number() {
    let [number, setNumber] = useState(0);
    const handleAddNumber = () => {
        const addNumber = number + 1;
        setNumber(addNumber)
    }
    const handleDiffNumber = () => {
        const diffNumber = number - 1;
        setNumber(diffNumber)
    }
    const handleReset = () => {
        setNumber(0)
    }
    return (
        <div className="post">
            <h2>count number:{number}</h2>
            <button onClick={handleAddNumber}>+1</button>
            <button style={{ margin: 8 }} onClick={handleDiffNumber}>-1</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}