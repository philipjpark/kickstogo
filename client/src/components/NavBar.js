import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";


function NavBar(){


    return(

        <header className="header">
            {/* <a href="/" className="logo">👟 Kicks To Go</a> */}
            <div className="logo">Kicks To Go</div>

            <nav className="topnav">
                <Link to="/about">🔍 About</Link>
                <Link to="/">👟 Sneakers</Link>
                <Link to="/order">🗒️ Order </Link>
            </nav>
        </header>

    );
}

export default NavBar;