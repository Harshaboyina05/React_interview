import React,{useState} from 'react';
import ListOFNames from './List';
import Button from './component'

const Counter=()=>{

    const [Count,setCount]=useState(0);
    const [counter, ]=useState(true)
    const [setter, ] = useState(false)
    const simpleStyle={
        color:'Blue',
        backgroundColor:'LightPink',
        margin:'8px',
        border:'4px',
        fontFamily:"OpenSans"

    }

    return(
        <div>
            <p style={simpleStyle}>count is {Count}</p>
            <button onClick={()=>setCount(Count+1)}>Increment</button>
            {/* <ListOFNames counter={counter} setter={setter}/> */}
            {/* <Button/> */}
        </div>
    );
};
export default Counter;