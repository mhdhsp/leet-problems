import React, { useRef, useState } from 'react'

function Timer() {
    const [time,setTime]=useState(0);
    const refe=useRef(null);

    const Start=()=>{
        if(refe.current != null ) return ;

        refe.current=setInterval(()=>{
            setTime(prev=>prev+1);
        },1000)
    }

    const Stop =()=>{
        clearInterval(refe.current);
        refe.current=null;
    }
  return (
    <div>
        <h1>Timer</h1>
        <h2>{time}</h2>

        <button onClick={Start}>Start</button>
        <button onClick={Stop}>Stop</button>
    </div>
  )
}

export default Timer