/* eslint-disable react/prop-types */
import "../styles/Question.css";
import plus from "../images/plus.svg";
import minus from "../images/minus.svg";
import { useState } from "react";

function Question({ title, description }) {
  const [toggle, setToggle] = useState(false);

  const btnToggler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="question">
      <div className="toggle-title">
        <h4>{title}</h4>
        <button onClick={btnToggler}>
          {toggle ? <img src={plus} alt="" /> : <img src={minus} alt="" />}
        </button>
      </div>
      {toggle && <p>{description}</p>}
    </div>
  );
}

export default Question;
