import "../styles/HeaderContent.css";
import SecondaryButton from "./SecondaryButton";

function HeaderContent() {
  return (
    <div className="HeaderContent">
      <div className="left-content">
        <h1>Smart banking for freelance</h1>
        <p className="white">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          recusandae voluptates est corporis, amet ex illo numquam, commodi aut
          molestiae ullam quasi ipsum quos dolore non ducimus delectus,
          accusamus dolorem?
        </p>
        <SecondaryButton name={"Register Now"} />
      </div>
      <div className="right-content">right content</div>
    </div>
  );
}

export default HeaderContent;
