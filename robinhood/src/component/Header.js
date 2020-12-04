import React from "react";
import "../style/Header.css";
import Logo from "../robinhood.svg";

function Header() {
  return (
    <div className="app__header">
      <div className="header__wrapper">
        <div className="header__logo">
          <img src={Logo} alt="Logo" width={25} />
        </div>
        <div className="header__search">
          <div className="header__searchContainer">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="header__menuItems">
          <a href="#">Free Stocks</a>
          <a href="#">Portfolio</a>
          <a href="#">Cash</a>
          <a href="#">Messages</a>
          <a href="#">Account</a>
        </div>
      </div>
    </div>
  );
}

export default Header;

// header__wrapper
//     - header__logo
//     - search
//     - menu items
