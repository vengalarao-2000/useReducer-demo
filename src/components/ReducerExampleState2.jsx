import React, { useEffect, useState } from 'react'


const getData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error);
    }

}

const ReducerExampleState2 = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = (url) => {
        setLoading(true);
        setError(false);
        getData(url)
        .then((res) => {
            setData(res);
            setLoading(false);
        })
        .catch(() => {
            setError(true);
            setLoading(false);
        });
    }

    useEffect(() => {
        fetchData("https://jsonplaceholder.typicode.com/posts?_limit_=10&_page=1")
    }, []);

  return (
    loading ? <h1>Loading...</h1> : (
        error ? <h1>Error occured</h1> : (
            <div>
                {
                    data.map((item) => {
                        return <p key={item.id}>{item.id}. {item.title}</p>
                    })
                }
            
            </div>
        )
    )
  )
}

export default ReducerExampleState2