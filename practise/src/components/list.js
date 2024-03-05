import React from "react";

const ListOFFruits=()=>{
    const fruits=['apple','pineapple','banana','grapes']
    return(
        <div>
            <ul>{fruits.map((item,index)=>(
            <li key={index}>{item}</li>))}
            </ul>
        </div>
    );
}
export default ListOFFruits;