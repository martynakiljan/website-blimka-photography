import React from "react";
import img1 from "../assets/header-images/header-img-1.jpg";
import img2 from "../assets/header-images/header-img-2.jpg";
import img3 from "../assets/header-images/header-img-3.jpg";

const Header = () => {
  return (
    <header className="header section" id="home">
      <div className="header__inner">
        <img
          className="header__img header__img-1"
          src={img1}
          alt="Header Image 1"
        />
        <img
          className="header__img header__img-2"
          src={img2}
          alt="Header Image 2"
        />
        <img
          className="header__img header__img-3"
          src={img3}
          alt="Header Image 3"
        />
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
