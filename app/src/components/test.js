import React, { useState } from "react";

const Count = () => {
 const [value, setValue] = useState(0);

 const increment= () => {
    setValue((prevValue) => {
     return prevValue + 1;
   });
 };

 const decrement = () => {
    setValue((prevValue) => {
     return prevValue - 1;
   });
 };

 return (
   <div>
     <strong>Count: {value}</strong>
     <button onClick={increment}>Increment</button>
     <button onClick={decrement}>Decrement</button>
   </div>
 );
}
export default Count;