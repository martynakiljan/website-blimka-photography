import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram } from 'react-icons/fa';

const TopButtons = () => {
  const { i18n } = useTranslation();
  const [showPL, setShowPL] = useState(true); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); 
    setShowPL(lng === 'pl'); 
  };

  return (
    <div className="top-buttons">
      <div className="top-button__item top-button__lang" onClick={() => changeLanguage(showPL ? 'en' : 'pl')}>
        {showPL ? 'EN' : 'PL'}
      </div>
      <a href="https://www.instagram.com/aleksandrablimka_photo/" target="_blank" rel="noopener noreferrer" className="top-button__item top-button__insta">
        <FaInstagram className="instagram-icon" />
      </a>
    </div>
  );
};

export default TopButtons;
