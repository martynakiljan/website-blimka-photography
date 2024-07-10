import React, { useState, useEffect } from "react";
import { Cross as Hamburger } from "hamburger-react";
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation();
  const [isOpen, setOpen] = useState(false);

const handleLinkClick = (e, sectionId) => {
  e.preventDefault();
  setOpen(false);

  const section = document.getElementById(sectionId);
  if (section) {
    const headerOffset = 50; 
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop - headerOffset,
      behavior: "smooth"
    });
  }
};

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const mobileMenuTranslations = {
    'menu-link-1': t('menu.menu-link-1'),
    'menu-link-2': t('menu.menu-link-2'),
    'menu-link-3': t('menu.menu-link-3'),
    'menu-link-4': t('menu.menu-link-4'),
  };

  return (
    <>
      <menu className="menu menu-desktop">
        <div className="menu__menu">
          <ul className="menu__list">
            <li className="menu__list-item">
              <a className="menu__list--link menu__list--first" href="#home">
                {t('menu.menu-link-1')}
              </a>
            </li>
            <li className="menu__list-item">
              <a className="menu__list--link" href="#about">
                {t('menu.menu-link-2')}
              </a>
            </li>
            <div className="menu__logo"></div>
            <li className="menu__list-item">
              <a className="menu__list--link" href="#services">
                {t('menu.menu-link-3')}
              </a>
            </li>
            <li className="menu__list-item">
              <a className="menu__list--link" href="#contact">
                {t('menu.menu-link-4')}
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
              {mobileMenuTranslations['menu-link-1']}
            </a>
          </li>
          <li className="menu__list-item">
            <a
              className="menu__list--link"
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
            >
              {mobileMenuTranslations['menu-link-2']}
            </a>
          </li>
          <li className="menu__list-item">
            <a
              className="menu__list--link"
              href="#services"
              onClick={(e) => handleLinkClick(e, "services")}
            >
              {mobileMenuTranslations['menu-link-3']}
            </a>
          </li>
          <li className="menu__list-item">
            <a
              className="menu__list--link"
              href="#contact"
              onClick={(e) => handleLinkClick(e, "contact")}
            >
              {mobileMenuTranslations['menu-link-4']}
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Menu;
