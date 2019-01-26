import React from "react";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <span className="navbar-brand mb-0 h1" to="/">Clicky Game</span>
            <ul className="navbar-nav">
                <li>Score: 0 | Top Score: 0 | Wins: 0</li>
            </ul>
        </nav>
    )
};

export default NavBar;
