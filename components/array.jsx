import { useState } from 'react';

function ArrayList() {
    const [random] = useState([1, 2, 3, 4, 5, 6, 6, 7, 7])

    return (
        <div>
            <h2>Number List</h2>
            <ul>
                {random.map((number) => (
                    <li key={number}>{number}</li>
                ))}
            </ul>
        </div>
    )
}

export default ArrayList;