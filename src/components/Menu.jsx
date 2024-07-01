import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    setOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <menu className="menu menu-desktop">
        <div className="menu__menu">
          <ul className="menu__list">
            <li className="menu__list-item">
              <a className="menu__list--link" href="#home">
                Home
              </a>
            </li>
            <li className="menu__list-item">
              <a className="menu__list--link" href="#about">
                About Me
              </a>
            </li>
            <div className="menu__logo"></div>
            <li className="menu__list-item">
              <a className="menu__list--link" href="#services">
                My services
              </a>
            </li>
            <li className="menu__list-item">
              <a className="menu__list--link" href="#contact">
                Contact
              </a>
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
            <a
              className="menu__list--link"
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
            >
              Home
            </a>
          </li>
          <li className="menu__list-item">
            <a
              className="menu__list--link"
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
            >
              About Me
            </a>
          </li>
          <li className="menu__list-item">
            <a
              className="menu__list--link"
              href="#services"
              onClick={(e) => handleLinkClick(e, "services")}
            >
              My services
            </a>
          </li>
          <li className="menu__list-item">
            <a
              className="menu__list--link"
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
