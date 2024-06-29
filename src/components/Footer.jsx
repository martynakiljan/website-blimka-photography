import img1 from "../assets/images/icon-flower.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="process__icon" src={img1}></img>
      <div className="footer_inner">
        <p className="footer__copy">® 2024 Aleksanra Blimka Photography</p>
      </div>
    </footer>
  );
};

export default Footer;
