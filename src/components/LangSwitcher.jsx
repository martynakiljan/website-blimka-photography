import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaInstagram } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [showPL, setShowPL] = useState(true); 

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowPL(!showPL); 
  };


  return (
    <div className="language-switcher">
      <div className="language-switcher__item" onClick={() => changeLanguage(showPL ? 'pl' : 'en')}>
        {showPL ? 'PL' : 'EN'}
      </div>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="language-switcher__item">
        <FaInstagram className="instagram-icon" />
      </a>
    </div>
  );
};

export default LanguageSwitcher;
