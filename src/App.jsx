import { useState } from 'react'
import './App.css'
import Game from "./Game"
function App() {
  const [count, setCount] = useState(0)
const games = [
  {id:1, name:"candy", level: 700,  },
  {id:2, name:"bubble", level: 400,  },
  {id:3, name:"ludo king", level: "no level",},
]
  return (
    <>
    <h2>react concept part 2</h2>
    {
      games.map(game=><Game key={game.id} game={game}></Game>)
    }
    </>
  )
}

export default App
