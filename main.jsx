import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import Toogle from './components/toggle';
import Counter from './components/newCounter'
import ArrayList from './components/array';

function App() {
    const [count, setCount] = useState(0)
    const addFunction = () => {
        setCount(count + 1)
    }

    const minusFunction = () => {
        setCount(count - 1)
    }
    const resetFunction = () => {
        setCount(0)
    }
    return (
        <div>
            <h1>Counter App</h1>
            <h3>{count}</h3>
            <button type='button' onClick={addFunction}>Increment</button>
            <button type='button' onClick={minusFunction}>Decrement</button>
            <button type='button' onClick={resetFunction}>Reset</button>
            <Toogle />
            <Counter />
            <ArrayList />
        </div>
    )
}

createRoot(document.getElementById('root')).render(<App />)