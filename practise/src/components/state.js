import React,{useState} from'react'

const StateImplememt=({initial})=>{

    const [count,SetCount]=useState(initial)
    const styleSheet={
        color:'Red',
        backgroundColor:'green',
        margin:'10px',
        textAlign:'center'
    }
    return(
        <div>
            <h1 style={styleSheet}>Count:{count}</h1>
            <button style={{ display: 'block', margin: '0 auto' }} onClick={()=>SetCount(count+1)}>Increment</button>
        </div>
    );
}
export default StateImplememt;