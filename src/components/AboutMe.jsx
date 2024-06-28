import img1 from "../assets/about/about.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faPlane, faCamera } from "@fortawesome/free-solid-svg-icons";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="about__inner">
        <div className="about__col">
          <img className="about__img " src={img1} />
        </div>
        <div className="about__col about__bg">
          <h3 className="about__title">A little bit about me...</h3>
          <h4 className="about__subtitle">Hi! I am Aleksandra 👋🏻</h4>
          <p className="about__description">
            Lorem ipsum dolor sit amet consectetur adipiscing, elit nisl quis
            augue mauris ullamcorper habitant, porttitor parturient egestas nec
            cubilia. Non enim cubilia laoreet tempus lacus ligula sagittis urna
            convallis, euismod maecenas auctor penatibus massa bibendum montes.
            Mus lobortis suspendisse lacus habitant feugiat, fringilla cras
            mollis maecenas, pretium eros imperdiet ultrices.
          </p>

          <p className="about__love-title">I love:</p>
          <div className="about__love">
            <div className="about__love-part">
              <FontAwesomeIcon icon={faDog} className="icon" />
              <span>My dog!</span>
            </div>
            <div className="about__love-part">
              <FontAwesomeIcon icon={faPlane} className="icon" />
              <span>Travel!</span>
            </div>
            <div className="about__love-part">
              <FontAwesomeIcon icon={faCamera} className="icon" />
              <span>and of course take photos...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
