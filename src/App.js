import React from 'react'

import { useSelector } from 'react-redux'

const App = () => {
  const count= useSelector((state)=>state.counter.value)
  return (
    <>
      <button>Increment</button>
      <span>{count}</span>
      <button>Decrement</button>
    </>
  )
}

export default App;