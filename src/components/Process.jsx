import img1 from "../assets/images/icon-flower.png";

const Process = () => {
  return (
    <div className="process">
      <h2 className="title process__title">The Process</h2>

      <div className="process__inner">
        <div className="process__item">
          <div className="process__num">1.</div>
          <img className="process__icon" src={img1}></img>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit suspendisse{" "}
        </p>
      </div>
    </div>
  );
};

export default Process;
