import img1 from "../assets/about/about.jpg";
import { useTranslation } from 'react-i18next';

const AboutMe = () => {

  const { t } = useTranslation();

  return (
    <div className="about section " id="about">
      <div className="about__inner">
        <div className="about__col">
          <img className="about__img " src={img1}  alt="aleksandra" />
        </div>
        <div className="about__col about__bg">
          <h3 className="about__title">{t('about.title')}</h3>
          <h4 className="about__subtitle">{t('about.subtitle')} 👋🏻</h4>
          <p className="about__description">
         {t('about.about-description-1')}
          </p><br></br>
          <p className="about__description">
         {t('about.about-description-2')}
          </p> <br></br>
            <p className="about__description">
         {t('about.about-description-3')} 
          </p>
          <br></br>
                <p className="about__description about__description--italic">
         {t('about.about-description-4')}  <span className="about__description--heart">💛</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
