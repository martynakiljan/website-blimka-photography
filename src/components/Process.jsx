import img1 from "../assets/images/icon-flower.png";

const Process = () => {
  return (
    <div className="process section">
      <h2 className="title process__title">The Process</h2>

      <div className="process__inner">
        <div className="process__item-main">
          <div className="process__item">
            <div className="process__num">1.</div>
            <img className="process__icon " src={img1}></img>
          </div>
          <p className="process__description">Let's talk first!</p>
        </div>
        <div className="process__item-main">
          <div className="process__item">
            <div className="process__num">2.</div>
            <img className="process__icon" src={img1}></img>
          </div>
          <p className="process__description">
            We will choose the location and date together.<b></b> we will take
            beautiful photos!
          </p>
        </div>
        <div className="process__item-main">
          <div className="process__item">
            <div className="process__num">2.</div>
            <img className="process__icon" src={img1}></img>
          </div>
          <p className="process__description">
            You will get beautiful <br></br>memories for a lifetime...{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
