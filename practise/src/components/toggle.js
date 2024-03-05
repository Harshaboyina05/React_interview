import React, { useState } from 'react'

const ToggleVisibility=()=>{
    const [visible,SetVisible]=useState(false);
    return(
        <div>
            <button style={{margin:'0 auto',display:'block'}}onClick={()=>SetVisible(!visible)}>See Me!</button>
            {visible&&<h1 style={{textAlign:'center'}}>Hii You See Me Now</h1>}
        </div>
    );
}
export default ToggleVisibility;