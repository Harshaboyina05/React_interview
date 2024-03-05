import React from 'react';

const names = ['hi','hello','jaha','haha']

const ListOFNames = ({counter,setter}) => {
    const listItems = names.map((name)=>
    <li key ={name}>{name}</li>
    );
    console.log("njknkj",counter)
    return( 
    <div>

        <ul>{listItems}</ul>
        <p>Child:{counter}</p>
        "======================================================"
        {counter ? "harsha" : "shri"}
        {setter ? "harsha" : "shri"}
        "======================================================"


    </div>)
};
export default ListOFNames;