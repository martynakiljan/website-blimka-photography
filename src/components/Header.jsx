import React, { useEffect } from "react";
import img1 from "../assets/header-images/header-img-1.jpg";
import img2 from "../assets/header-images/header-img-2.jpg";
import img3 from "../assets/header-images/header-img-3.jpg";

const Header = () => {
  useEffect(() => {
    const images = document.querySelectorAll(".header__img");

    images.forEach(img => {
      img.onload = () => {
        img.classList.add("animate-opacity");
      };
    });
  }, []);

  return (
    <header className="header section" id="home">
      <div class="lang-switcher" data-lang-1="EN" data-lang-2="PL">
  <svg class="lang-switcher__svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 200">
    <defs>
      <filter id="goo-effect" width="110%" height="215%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo-effect" />
        <feBlend in="SourceGraphic" in2="goo-effect" />
      </filter>
    </defs>
    <g filter="url(#goo-effect)">
      <circle class="lang-switcher__svg-item" cx="50" cy="50" r="45" />
      <circle class="lang-switcher__svg-item js-moving" cx="50" cy="50" r="45" />
    </g>
  </svg>
</div>
      <div className="header__inner">
        <img className="header__img header__img-1" src={img1} alt="Header Image 1" />
        <img className="header__img header__img-2" src={img2} alt="Header Image 2" />
        <img className="header__img header__img-3" src={img3} alt="Header Image 3" />
      </div>
      <div className="header__bottom">
        <p className="header__text">
          Capture the unforgettable, love-filled moments of your dreams.
        </p>
        <button className="header__button">Contact me!</button>
      </div>
    </header>
  );
};

export default Header;
