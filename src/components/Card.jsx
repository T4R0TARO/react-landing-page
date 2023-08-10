/* eslint-disable react/prop-types */
import "../styles/Card.css";

function Card({
  account,
  amount,
  text,
  button,
  card,
  active,
  inactive,
  check,
  checkDis,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
}) {
  return (
    <div className="card">
      <h4 className="card-title">{account}</h4>
      <h4 className="card-title">
        {amount} <span>/ m</span>
      </h4>
      <p className="para">{text}</p>
      <div className="button-container">
        <button>{button}</button>
      </div>
      <div className="card-image-container">
        <img src={card} alt="credit card" />
      </div>
      <div className="plan-container">
        <img src={active} alt="" />
        <img src={inactive} alt="" />
      </div>
      <div className="list-container">
        <p className="text-check">
          <img src={check} alt="" />
          {text1}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text2}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text3}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text4}
        </p>
        <p className="text-check">
          <img src={check} alt="" />
          {text5}
        </p>
        <p className="text-check">
          <img src={checkDis} alt="" />
          {text6}
        </p>
        <p className="text-check">
          <img src={checkDis} alt="" />
          {text7}
        </p>
        <p className="text-check">
          <img src={checkDis} alt="" />
          {text8}
        </p>
      </div>
    </div>
  );
}

export default Card;
