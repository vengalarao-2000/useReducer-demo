import React, { useEffect, useReducer } from 'react'


const getData = async (url) => {
    try {
        const response = await fetch(url);
        const data = response.json();
        return data;
    }
    catch(error) {
        console.log(error);
    }

}

const initialState = {
    loading: false,
    error: false,
    data: []
};

const reducerFunction = (state, action) => {
    switch(action.type) {
        case "FETCH_LOADING": {
            return {
                ...state,
                loading: true,
                error: false,
                data: []
            }
        }
        case "FETCH_ERROR": {
            return {
                ...state,
                loading: false,
                error: true,
                data: []
            }
        }
        case "FETCH_DATA": {
            return {
                ...state,
                loading: false,
                error: false,
                data: action.payload
            }
        }
        default: {
            throw new Error("Action object not defined!!");
        }
    }
}




const ReducerExample2 = () => {

    const [state, dispatch] = useReducer(reducerFunction, initialState);

    
    const fetchAndUpdateData = (url) => {
        dispatch({type: "FETCH_LOADING"});

        getData(url)
        .then((res) => {
            dispatch({type: "FETCH_DATA", payload: res});
        })
        .catch(() => {
            dispatch({type: "FETCH_ERROR"});
        });
    };

    useEffect(() => {
        fetchAndUpdateData("https://jsonplaceholder.typicode.com/posts?_limit_=10&_page=1");
    }, [])

    const {loading, error, data} = state;

  return (
    loading ? <h1>Loading</h1> : (
        error ? <h1>Error occured</h1> : (
            <div>
                {
                    data.map((item) => {
                        return <p key={item.id}>
                            {item.id}. {item.title}
                        </p>
                    })
                }
            </div>
        )
    )
  )
}

export default ReducerExample2