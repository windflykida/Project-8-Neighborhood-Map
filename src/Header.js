import React from "react";
import Menu from "./img/menu-button.svg";
import "./App.css";

// adding menu-button to src made icon visible, but in public folder not.


const Header = props => (


    <header className="header">
        <img id ="header-menu"
             src={Menu}
             alt="Cities"
             tabIndex="0"
             aria-label="Click to open list of places"
             onMouseDown={props.handleMouseDown}
             onKeyPress={props.handleMouseDown}
            />

        <h1 className="header-heading">
            Places worth visiting in Poland and Czech Republic
        </h1>

    </header>
  );



export default Header;
