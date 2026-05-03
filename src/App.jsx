import { useState } from 'react'
import Count from './Count'
import ShoppingCart from './Cart'
import Players from "./Players"
import Product from './Product'
import './App.css'
import Game from "./Game"
function App() {
  const [count, setCount] = useState(0)
  // click 2
  function handleBtn2() {
    alert("btn 2 clicked")
  }
  // click 3
  const handleBtn3 = () => {
    alert("coming for array function on click")
  }
  // click 5
  const handleAdd5 = (num) => {
    const add = num + 5;
    alert(add)
  }
  const games = [
    { id: 1, name: "candy", level: 700, play: true, },
    { id: 2, name: "ludo king", level: "no level", play: true, },
    { id: 3, name: "bubble", level: 400, play: false, },

  ]
  return (
    <>
      <h2>react concept part 2</h2>
      <Product></Product>
      <Players></Players>
      <ShoppingCart></ShoppingCart>
      <Count></Count>

<div style={{margin:"5px"}}>     
   <button onClick={function handleBtn1() {
        alert("btn 1 click")
      }}>click button 1</button>
      <button onClick={handleBtn2}>click button 2</button>
      <button onClick={handleBtn3}>click btn for array function</button>
      <button onClick={() => alert("click button for onclick anonimas ")}>click btn 4</button>
      <button onClick={() => handleAdd5(22)}>add 5</button>
      </div>
      {/* {
      games.map(game=><Game key={game.id} game={game}></Game>)
    } */}
    </>
  )
}

export default App
