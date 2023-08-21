import "../styles/HeaderContent.css";
import SecondaryButton from "./SecondaryButton";
import phone from "../images/phone.svg";
import ring1 from "../images/ring_orange.svg";
import message1 from "../images/message_pink.svg";
import message2 from "../images/message_blue.svg";

function HeaderContent() {
  return (
    <div id="Home" className="HeaderContent">
      <div className="left-content">
        <div className="left-text-container">
          <h1>Smart banking for freelance</h1>
          <p className="white">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            recusandae voluptates est corporis, amet ex illo numquam, commodi
            aut molestiae ullam quasi ipsum quos dolore non ducimus delectus,
            accusamus dolorem?
          </p>
          <SecondaryButton name={"Register Now"} />
        </div>
      </div>
      <div className="right-content">
        <img src={phone} alt="phone-image" className="phone" />
        <img src={ring1} alt="" className="ring1" />
        <img src={message1} alt="" className="message1" />
        <img src={message2} alt="" className="message2" />
      </div>
    </div>
  );
}

export default HeaderContent;
