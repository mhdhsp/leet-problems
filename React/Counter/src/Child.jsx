import React, { useState } from 'react'

function Child({item}) {
    const [view,setView]=useState(false);
  return (
    <div>
        <button onClick={()=>{setView(!view)}}>{item.title} </button>
        {view && <h3>{item.body}</h3>}
    </div>
  )
}

export default Child