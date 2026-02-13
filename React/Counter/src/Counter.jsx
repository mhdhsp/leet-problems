import React, { useState } from 'react'

function Counter() {

    const [state,setState]=useState(0);

    const increment=()=>{
        setState(state+1);
    }
  return (
    <div>
        <h1>Counter</h1>
        <h2>{state}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={()=>setState(state-1)}>Decrement</button>
        <button onClick={()=>setState(0)}>Reset</button>

    </div>
  )
}

export default Counter