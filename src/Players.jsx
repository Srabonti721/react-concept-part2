import { useState } from "react"

export default function Players() {
    const [runs, setRuns] = useState(0);
    const [four, setFour] = useState(0);
    const [sixes, setSixes] = useState(0);
    const handleSingleRuns = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns)
    }
    const handleFour = () => {
        const updatedRuns = runs + 4;
        const countFour = four + 1;
        setFour(countFour)
        setRuns(updatedRuns)
    }
    const handleSix = () => {
        const updatedRuns = runs + 6;
        const countSix = sixes + 1;
        setSixes(countSix)
        setRuns(updatedRuns)
    }
    const playerStyle = {
        border: "2px solid green",
        margin: "10px",
        padding: "10px",
    }
    return (
        <div style={playerStyle}>
            <h2>players : bangla  batsman</h2>
            <p>six :{sixes}</p>
            <p>four:{four}</p>
            {
                runs > 50 && <p>your score :50</p>
            }
            <p>Score: {runs}</p>
            <button onClick={handleSingleRuns}>single</button>
            <button onClick={handleFour}>four</button>
            <button onClick={handleSix}>six</button>
        </div>
    )
}