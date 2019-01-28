import React from "react";
import "./style.css"

const NavBar = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand mb-0 h1" to="/">Clicky Game</span>
        <ul className="navbar-nav">
            <li>Score: {props.score}</li>
            <li>Top Score: {props.topScore}</li>
        </ul>
    </nav>
);

export default NavBar;
