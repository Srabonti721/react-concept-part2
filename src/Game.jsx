
import './App.css'
export default function Game({ game }) {
    console.log(game);
    const { name, level, play } = game;
    //     return(
    //  <div className='shared'>
    //         <h2>name:{name}</h2>
    //         <p>level: {level}</p>
    //     </div>
    //     )

    if (play) {
        return <div className='shared'>
            <h2>I am playing this games</h2>
            <h2>name:{name}</h2>
            <p>level: {level}</p>
        </div>
    }
    return <div className='shared'>
        <h2>I am not playing this games</h2>
        <h2>name:{name}</h2>
    </div>

}