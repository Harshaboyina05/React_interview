import React from 'react';
import {Link} from 'react-router-dom';

const HomePage = () =>{

    return(
    <div>
        <h1>Welcome</h1>
        <Link to='/list'>
            <button>Go To List</button>
        </Link>
        <div>
        <Link to='/form'>Fill out form</Link>
        </div>
        <Link to='/counter'>Counter program</Link>
    </div>
 
    );      
}
export default HomePage;