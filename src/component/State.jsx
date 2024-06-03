import React, { useState } from 'react'

const State = () => {
  const [count, setCount] = useState(0);
  const [factor, setFactor] = useState(0);

  function increment() {
    setCount(count + factor);
  }

  function decrement() {
    setCount(count - factor);
  }

  function incrementFactor() {
    setFactor(factor + 1);
  }

  function decrementFactor() {
    setFactor(factor - 1);
  }

  return (
    <div>
        <h1>My Counter Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>

        <h1>My Factor Count: {factor}</h1>
        <button onClick={incrementFactor}>Increment</button>
        <button onClick={decrementFactor}>Decrement</button>
    </div>
  )
}

export default State