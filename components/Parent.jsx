import react from 'react';
import Child  from 'components/Child';
const Parent = () => {
    function getValue(value) {
        console.log(a)
    }
    return (
        <div>
            <Child getValue = {getValue}/>
        </div>
    )
}
export default Parent;