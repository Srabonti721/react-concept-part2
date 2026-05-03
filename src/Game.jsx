
import './App.css'
export default function Game ({game}){
    console.log(game);
    
    return(
        <div className='shared'>
            <h2>name:{game.name}</h2>
            <p>level: {game.level}</p>
        </div>
    )
}