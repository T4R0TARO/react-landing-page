import "../styles/Footer.css";
import logo from "../images/logo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="logo-container">
          <div className="logo-items">
            <img src={logo} alt="logo image" />
            <p>
              Copyright @2021 LoremIpsum <br /> All rights reserved.
            </p>
          </div>
        </div>
        <ul className="bottom-nav">
          <div className="links1">
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
            <li>
              <a href="#">Fees</a>
            </li>
          </div>
          <div className="links2">
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Affiliate</a>
            </li>
          </div>
          <div className="links3">
            <li>
              <a href="#">Terms of use</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
