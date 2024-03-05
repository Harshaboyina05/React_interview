import React from "react";
import { Link } from "react-router-dom";

const HomePage=()=>{
    
    return(
        <div>
        <h1>Welcome</h1>
        <Link to='/greet'>
            <button>Greet Me</button>
        </Link>
    </div>
    )
}
export default HomePage;