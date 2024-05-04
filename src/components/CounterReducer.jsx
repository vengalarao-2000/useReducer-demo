import React, { useReducer } from 'react'

const reducerFunction = (currentState, actionObject) => {
    //Need not store the updated value as cuurentState = currentState + 1 instead this function uses return cuurentState + 1
    // if(actionObject.type === "INCR"){
    //     return currentState + 1;
    // }
    // else if (actionObject.type === "DECR"){
    //     return currentState - 1;
    // }

    //can also write a switch case instead of if-else
    switch(actionObject.type) {
        case "INCR": {
            //It is ok not to use break as we are returning the following (next) case will not execute.
            return currentState + actionObject.payload;
        }
        case "DECR": {
            //payload here is used to indicate by how much value we are incrementing/decrementing.
            return currentState - actionObject.payload;
        }
        case "RESET": {
            return actionObject.payload;
        }
        default: {
            throw new Error("Object type not defined!!");
        }
    }
}


const CounterReducer = () => {

    const [count, dispatch] = useReducer(reducerFunction, 0);

    const handleIncr = () => {
        //dispatch triggers reducerFunction and performs an actio n based on conditions specified.
        dispatch({type: "INCR", payload: 2});
    }

    const handleDecr = () => {
        dispatch({type: "DECR", payload: 1});
    }

    const resetCount = () => {
        dispatch({type: "RESET", payload: 0});
    }

  return (
    <div>
        <h1>Counter Reducer: {count}</h1>
        <button onClick={handleIncr}>Increment</button>
        <button onClick={handleDecr}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default CounterReducer