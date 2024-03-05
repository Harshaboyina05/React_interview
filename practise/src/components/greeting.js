import React from 'react'

const Greeting=()=>{
    const style={
        color:'blue',
        backgroundColor:'pink',
        border:'20px',
        margin:'45px',
        textAlign:'center'
    }
    return(
        <div>
            <h1 style={style}>Hello World!</h1>
        </div>
    );
}
export default Greeting;