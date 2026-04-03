import { useState } from 'react';

function Toogle() {
    const [ toogle, settoogle] = useState(true)
    const toogleFunction = () => {
        settoogle(!toogle)
    }
    return (
        <div>
            <h1>{toogle ? "Hello" : "GoodBye"}</h1>
            <button type='button' onClick={toogleFunction}>{toogle ? "Click Me" : "Nice to Meet you"}</button>
        </div>
    )
}
export default Toogle;