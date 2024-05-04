import React, { useState } from 'react'

const CounterState = () => {

    const [count, setCount] = useState(0);

    const handleIncr = () => {
        setCount(prevVal => prevVal + 1);
    }

    const handleDecr = () => {
        setCount(prevVal => prevVal - 1);
    }

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleIncr}>Increment</button>
        <button onClick={handleDecr}>Decrement</button>
    </div>
  )
}

export default CounterState