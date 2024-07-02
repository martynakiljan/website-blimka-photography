import img1 from "../assets/services-images/servies-img-1.jpg";
import img2 from "../assets/services-images/servies-img-2.jpg";
import img3 from "../assets/services-images/servies-img-3.jpg";
import { useTranslation } from 'react-i18next';

const Services = () => {
        const { t } = useTranslation();
  return (
    <div className="services section" id="services">
      <h2 className="services__title title">
        {t('services.title')}
      </h2>
      <div className="services__cards">
        <div className="services__card">
          <img className="services__card-img" src={img1} />
          <div className="services__card-box">
            <p className="services__card__description">
                  {t('services.card-text-1a')} <br></br>
                     {t('services.card-text-1b')} 
            </p>
          </div>
        </div>
        <div className="services__card">
          <img className="services__card-img" src={img2} />
          <div className="services__card-box">
            <p className="services__card__description">
              {t('services.card-text-2a')} <br></br>
                     {t('services.card-text-2b')} 
              <br></br>
              <p></p>
            </p>
          </div>
        </div>
        <div className="services__card">
          <img className="services__card-img" src={img3} />
          <div className="services__card-box">
            <p className="services__card__description">
           {t('services.card-text-3a')} 
           <br></br>
                     {t('services.card-text-3b')} 
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
