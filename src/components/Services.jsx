import img1 from "../assets/services-images/servies-img-1.jpg";
import img2 from "../assets/services-images/servies-img-2.jpg";
import img3 from "../assets/services-images/servies-img-3.jpg";

const Services = () => {
  return (
    <div className="services section" id="services">
      <h2 className="services__title title">
        What moments can I capture for you?
      </h2>
      <div className="services__cards">
        <div className="services__card">
          <img className="services__card-img" src={img1} />
          <div className="services__card-box">
            <p className="services__card__description">
              women's and business sessions
            </p>
          </div>
        </div>
        <div className="services__card">
          <img className="services__card-img" src={img2} />
          <div className="services__card-box">
            <p className="services__card__description">
              couple and <br></br>wedding photo
              <br></br>
              <p></p>
            </p>
          </div>
        </div>
        <div className="services__card">
          <img className="services__card-img" src={img3} />
          <div className="services__card-box">
            <p className="services__card__description">
              family <br></br>photos
              <br></br>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
