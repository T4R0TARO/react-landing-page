import "../styles/SecondaryButton.css";
import arrow from "../images/arrow.svg";

function SecondaryButton({ name }) {
  return (
    <button className="secondary-button">
      {name}
      <img src={arrow} alt="arrow" />
    </button>
  );
}

export default SecondaryButton;
