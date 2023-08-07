import "../styles/AnimatedButton.css";
import arrow from "../images/arrow.svg";
import blob1 from "../images/blob_top.svg";
import blob2 from "../images/blob_bottom.svg";

function AnimatedButton({ name }) {
  return (
    <div className="animated-button">
      {name}
      <img src={arrow} alt="" className="arrow" />
      <img src={blob1} alt="" className="blob1" />
      <img src={blob2} alt="" className="blob2" />
    </div>
  );
}

export default AnimatedButton;
