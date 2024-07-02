import img1 from "../assets/instagram-images/instagram-img-1.jpg";
import img2 from "../assets/instagram-images/instagram-img-2.jpg";
import img3 from "../assets/instagram-images/instagram-img-3.jpg";
import img4 from "../assets/instagram-images/instagram-img-4.jpg";
import img5 from "../assets/instagram-images/instagram-img-5.jpg";
import img6 from "../assets/instagram-images/instagram-img-6.jpg";
import { useTranslation } from 'react-i18next';


const Instagram = () => {

      const { t } = useTranslation();


  return (
    <div className="instagram section">
      <h2 className="title">{t('instagram.title')}</h2>
      <div className="instagram__images">
        <img className="instagram__img " src={img1} />
        <img className="instagram__img " src={img2} />
        <img className="instagram__img " src={img3} />
        <img className="instagram__img " src={img4} />
        <img className="instagram__img " src={img5} />
        <img className="instagram__img " src={img6} />
      </div>

      <a href="https://www.instagram.com/aleksandrablimka_photo/" className="instagram__button">@aleksandrablimka_photo</a>
    </div>
  );
};

export default Instagram;
