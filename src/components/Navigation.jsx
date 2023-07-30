import "../styles/Navigation.css";
import PrimaryButton from "./PrimaryButton.jsx";
import logo from "../images/logo.svg";
function Navigation() {
  return (
    <nav className="Navigation">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>
          <a href="Home">Home</a>
        </li>
        <li>
          <a href="Features">Feature</a>
        </li>
        <li>
          <a href="Pricing">Pricing</a>
        </li>
      </ul>
      <PrimaryButton name={"Sign Up"} />
    </nav>
  );
}

export default Navigation;
