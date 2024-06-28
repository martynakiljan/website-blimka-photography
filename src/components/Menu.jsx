import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <menu className="menu menu-desktop">
        <div className="menu__menu">
          <ul className="menu__list">
            <li className="menu__list-item">
              <a className="menu__list--link">Home</a>
            </li>
            <li className="menu__list-item">
              <a className="menu__list--link">About Me</a>
            </li>
            <div className="menu__logo"></div>
            <li className="menu__list-item">
              <a className="menu__list--link">My services</a>
            </li>
            <li className="menu__list-item">
              <a className="menu__list--link">Contact</a>
            </li>
          </ul>
        </div>
      </menu>
      <nav className={`menu-mobile ${isOpen ? "isOpen" : ""}`}>
        <div className="menu-mobile__logo"></div>
    
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            className="menu-mobile__burger"
          />

          <ul className="menu__list">
            <li className="menu__list-item">
              <a className="menu__list--link">Home</a>
            </li>
            <li className="menu__list-item">
              <a className="menu__list--link">About Me</a>
            </li>
            <li className="menu__list-item">
              <a className="menu__list--link">My services</a>
            </li>
            <li className="menu__list-item">
              <a className="menu__list--link">Contact</a>
            </li>
          </ul>
        </nav>
  
    </>
  );
};

export default Menu;
