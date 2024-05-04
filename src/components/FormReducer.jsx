import React, { useReducer } from 'react'

//Can create multiple fields of form and use useReducer.
const formObject = {
    username: ""
}

const reducerFunction = (stateValue, action) => {
    switch(action.type) {
        case "USERNAME": {
            return {
                ...formObject,
                username: action.payload
            }
        }
        default: {
            throw new Error("Undefined object!");
        }
    }
}
const FormReducer = () => {

    const [state, dispatch] = useReducer(reducerFunction, formObject);

    const handleChange = (e) => {
        dispatch({type: "USERNAME", payload: e.target.value});
    }
  return (
    <div>
        <label htmlFor='username'>Username</label>
        <input type='text' onChange={(e) => handleChange(e)} value={state.username}/>
    </div>
  )
}

export default FormReducer