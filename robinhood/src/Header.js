import React from "react";
import "./Header.css";
import Logo from "./robinhood.svg";

function Header() {
  return (
    <div>
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={Logo} alt="Logo" width={25} />
        </div>
        <h1>header</h1>
      </div>
    </div>
  );
}

export default Header;

// header__wrapper
//     - header__logo
//     - search
//     - menu items
