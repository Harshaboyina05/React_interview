import React,{useState} from 'react'

const StateImplement=({initial})=>{
    const [count,SetCount]=useState(initial)

    return(
        <div>
            <p>count:{count}</p>
            <button onClick={()=>SetCount(count+1)}>increment</button>
        </div>
    );
}
export default StateImplement;
