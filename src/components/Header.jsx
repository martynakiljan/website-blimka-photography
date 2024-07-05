import React, { useEffect } from "react";
import img1 from "../assets/header-images/header-img-1.jpg";
import img2 from "../assets/header-images/header-img-2.jpg";
import img3 from "../assets/header-images/header-img-3.jpg";
import { useTranslation } from 'react-i18next';


const Header = () => {
    const { t } = useTranslation();

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
      <div className="header__inner">
        <img className="header__img header__img-1 kenburns-top" src={img1} alt="wedding" />
        <img className="header__img header__img-2" src={img2} alt="couple" />
        <img className="header__img header__img-3" src={img3} alt="couple" />
      </div>
      <div className="header__bottom">
        <p className="header__text">
       {t('header.title')}
        </p>
        <a className="header__button"  href="#contact" >  {t('header.buttonText')}</a>
      </div>
    </header>
  );
};

export default Header;
