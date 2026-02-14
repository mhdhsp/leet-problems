import React from 'react'
import Counter from './Counter'
import Timer from './Timer'
import ToDo from '../ToDo'
import Fetch from './Fetch'

function App() {
  return (
    <div>
      <Fetch/>
      <ToDo/>
      <Counter/>
      <Timer/>
    </div>
  )
}

export default App