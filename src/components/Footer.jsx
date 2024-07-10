import img1 from "../assets/images/icon-flower.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="process__icon" src={img1} alt="flower"></img>
      <div className="footer_inner">
        <p className="footer__copy">® 2024 Aleksanra Blimka Photo</p>
      </div>
    </footer>
  );
};

export default Footer;
