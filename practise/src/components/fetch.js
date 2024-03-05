import React, { useEffect, useState } from "react";

const FetchExample=()=>{
    const [data,setData]=useState(null)
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error',error))
    });
    return(
        <div>
            <h1>Fetch data</h1>
            {data && (
                <div>
                    <p>Title:{data.title}</p>
                    <p>Description:{data.body}</p>
                </div>
            )};
        </div>
    );
}
export default FetchExample;