import "../styles/MessageSection.css";
import avatar1 from "../images/avatar1.svg";
import avatar2 from "../images/avatar2.svg";
import avatar3 from "../images/avatar3.svg";
import avatar4 from "../images/avatar4.svg";
import avatar5 from "../images/avatar5.svg";
import bgCircle from "../images/circleBg.svg";
import messaging from "../images/conversation.svg";

function MessageSection() {
  return (
    <div className="message-section">
      <div className="message-container">
        <div className="left-items">
          <h2 className="secondary-heading">
            We support you in 5 different languages
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            ratione, velit beatae tempore sint vitae! Veritatis nisi inventore
            repudiandae sed natus eos animi?
          </p>
          <div className="images-container">
            <img src={avatar1} alt="avatar image" className="image-1" />
            <img src={avatar2} alt="avatar image" className="image-2" />
            <img src={avatar3} alt="avatar image" className="image-3" />
            <img src={avatar4} alt="avatar image" className="image-4" />
            <img src={avatar5} alt="avatar image" className="image-5" />
            <p>&nbsp; +25</p>
          </div>
          <img src={bgCircle} alt="bgCircle" className="bgCircle" />
        </div>
        <div className="right-items">
          <img src={messaging} alt="message image" />
          <img src={bgCircle} alt="bgCircle" className="bgCircle" />
        </div>
      </div>
    </div>
  );
}

export default MessageSection;
