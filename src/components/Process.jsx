import img1 from "../assets/images/icon-flower.png";
import { useTranslation } from 'react-i18next';

const Process = () => {
        const { t } = useTranslation();
  return (
    <div className="process section">
      <h2 className="title process__title">{t('process.title')}</h2>

      <div className="process__inner">
        <div className="process__item-main">
          <div className="process__item">
            <div className="process__num">1.</div>
            <img className="process__icon " src={img1} alt="business"></img>
          </div>
          <p className="process__description">   {t('process.process-text-1')}</p>
        </div>
        <div className="process__item-main">
          <div className="process__item">
            <div className="process__num">2.</div>
            <img className="process__icon" src={img1} alt="wedding"></img>
          </div>
          <p className="process__description">
         {t('process.process-text-2')}
          </p>
        </div>
        <div className="process__item-main">
          <div className="process__item">
            <div className="process__num">3.</div>
            <img className="process__icon" src={img1} alt="family"></img>
          </div>
          <p className="process__description">
      {t('process.process-text-3')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
