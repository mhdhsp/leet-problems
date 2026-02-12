import React, { useState } from 'react'

function ToDo() {

    const [list,setList]=useState([]);
    const [item,setItem]=useState({name:'', isComplete:false});

    const handleChange=(e)=>{
        setItem({...item,
            name:e.target.value
     } )
    }

    const handleAdd=()=>{
        if(!item.name.trim()) return ;

        const newItem={...item , id:Date.now()};

        setList(prev=>[...prev,newItem]);

        setItem({name:'',isComplete:false});
    }

    const handleToggle=(id)=>{
        setList(prev=>
            prev.map(todo=>
                todo.id==id ? {...todo,isComplete:!todo.isComplete}
                :todo
            )
        )
    }
  return (
    <div>
        <h1>ToDo</h1>
        <input name="item" placeholder='Enter te todo item' value={item.name}onChange={handleChange}></input>
        <button onClick={handleAdd}>Add</button>

        <ul>
            {
                list.map(todo=>
                <div>
                    <li key={todo.id}>
                        <span style={{textDecoration:todo.isComplete?"line-through":"none"}}>{todo.name}</span>
                    </li>
                    <button onClick={()=>handleToggle(todo.id)}>Complete</button>
                </div>)
            }
        </ul>
    </div>
  )
}

export default ToDo