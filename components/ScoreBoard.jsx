import react from 'react';
function ScoreBoard(){
    const [score, setscore] = useState(0)
    return (
        <div>
            <h1>Score Board</h1>
            <p>Score: {score}</p>
            <button type='button' onClick={() => setscore(score + 1)}>Increase Score</button>
        </div>
    )
}