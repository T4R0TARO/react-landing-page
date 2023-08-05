import "../styles/CardSection.css";
import card from "../images/creditcard.svg";

function CardSection() {
  return (
    <div className="card-container">
      <div className="card-left">
        <h2 className="secondary-heading">One card for all your payments</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam
          adipisci nihil quisquam vel enim quaerat ad magni beatae assumenda
          illo accusamus, perferendis iure facilis quasi.
        </p>
      </div>
      <div className="card-right">
        <img src={card} alt="" />
      </div>
    </div>
  );
}

export default CardSection;
