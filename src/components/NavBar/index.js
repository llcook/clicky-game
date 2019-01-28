import React from "react";
import "./style.css"

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand mb-0 h1" to="/">Clicky Game</span>
            <ul className="navbar-nav">
                <li>Score: 0</li>
                <li>Top Score: 0</li>
                <li>Wins: 0</li>
            </ul>
        </nav>
    )
};

export default NavBar;
