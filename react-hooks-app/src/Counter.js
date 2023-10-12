import React, {useState, useEffect} from 'react';

function Counter(){
    const[count, setCount] = useState(0);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count +1)}>Increment</button>
        </div>
    );
}

export default Counter;