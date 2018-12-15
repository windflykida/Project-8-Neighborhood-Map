import React from "react";
import Menu from "./menu-button.svg";

// adding menu-button to src made icon visible, but in public folder not.

const Header = (() => {

  return (
    <header className="header">
        <img className="header-menu"
             src={Menu}
             alt="Cities"
             aria-label="Interesting places in Poland and Czech Republic"
             tabIndex="0"
            />
        <h1 className="header-heading">
            Places worth visiting in Poland and Czech Republic
        </h1>

    </header>
  );
});

export default Header;
