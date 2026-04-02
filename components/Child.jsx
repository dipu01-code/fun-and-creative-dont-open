import react from "react";
const Child = ({ value }) => {
    let Value = 99;
    return (
        <div>
            <button onClick={() => {getValue(value)}}>Give</button>
        </div>
    )
}