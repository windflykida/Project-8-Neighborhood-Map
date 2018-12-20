import React from "react";
import Menu from "./img/menu-button.svg";
import "./App.css";

// adding menu-button to src made icon visible, but in public folder not.

class Header extends React.Component{



render() {
    return (

    <header className="header">
        <img id ="header-menu"
             src={Menu}
             alt="Cities"
             aria-label="Interesting places in Poland and Czech Republic"
             tabIndex="0"
             onMouseDown={this.props.handleMouseDown}
            />

        <h1 className="header-heading">
            Places worth visiting in Poland and Czech Republic
        </h1>

    </header>
  );
 }
};

export default Header;
