import React from "react";
import '../../assets/css/NavBar.css';
import { Link } from "react-router-dom";
var NavBar=()=>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">gallery</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default NavBar;