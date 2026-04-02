import { useState } from 'react';

function Toogle() {
    const [ toogle, settoogle] = useState(true)
    const toogleFunction = () => {
        settoogle(!toogle)
    }
    return (
        <div>
            <h1>{toogle ? "baag teri" : "maki chut"}</h1>
            <button type='button' onClick={toogleFunction}>Maat daba laude</button>
        </div>
    )
}
export default Toogle;