import "../styles/Navigation.css";
import PrimaryButton from "./PrimaryButton.jsx";

function Navigation() {
  return (
    <nav>
      <div className="logo">
        <ul>
          <li>
            <a href="Home"></a>
          </li>
          <li>
            <a href="Features"></a>
          </li>
          <li>
            <a href="Pricing"></a>
          </li>
        </ul>
        <PrimaryButton name={"Sign Up"} />
      </div>
    </nav>
  );
}

export default Navigation;
