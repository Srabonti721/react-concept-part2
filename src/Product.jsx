import { useState } from "react"

export default function Product() {
    const [addProduct, setAddProduct] = useState(0)
    const [pen, setPen] = useState(0);
    const [noteBook, SetNoteBook] = useState(0);
    const [ruler, SetRuler] = useState(0);
    const handleAddProduct = () => {
        const newAddProduct = addProduct + 1;
        const addPen = pen + 1;
        setPen(addPen)
        setAddProduct(newAddProduct)
    }
    const handleNotBook = () => {
        const newAddProduct = addProduct + 1;
        const addNotBook = noteBook + 1;
        SetNoteBook(addNotBook)
        setAddProduct(newAddProduct)
    }
    const handleRuler = () => {
        const newAddProduct = addProduct + 1;
        const addRuler = ruler + 1;
        SetRuler(addRuler)
        setAddProduct(newAddProduct)
    }

    const productStyle = {
        border: "2px solid brown",
        margin: "10px",
        padding: "10px",
    }
    return (
        <div style={productStyle}>
            <h2>buy some daily products</h2>
            <p> buy pen : {pen}</p>
            <p> buy NoteBook : {noteBook}</p>
            <p>Buy Ruler : {ruler}</p>
            <h3>Add to Cart: {addProduct}</h3>
            <button onClick={handleAddProduct}>add pen</button>
            <button onClick={handleNotBook}>add notebook</button>
            <button onClick={handleRuler}>add Ruler</button>
        </div>
    )
}