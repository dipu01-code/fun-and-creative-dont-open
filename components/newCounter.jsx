import { useState } from 'react';

function newCounter() {
    const [newcount, setnewcount] = useState(10)

    const incrementNew = () => {
        setnewcount(newcount + 1)
    }

    const decrementNew = () => {
        setnewcount(newcount - 1)
    }
    const resetShit = () => {
        setnewcount(10 )
    }

    return (
        <div>
            <h1>New Counter</h1>
            <h3>{newcount}</h3>
            <button type='button' onClick={incrementNew}>New Increment</button>
            <button type='button' onClick={decrementNew}>New Decrement</button>
            <button type='button' onClick={resetShit}>reset
            </button>
        </div>
    )
}

export default newCounter;