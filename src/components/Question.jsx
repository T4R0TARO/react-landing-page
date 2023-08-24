/* eslint-disable react/prop-types */
import "../styles/Question.css";
import plus from "../images/plus.svg";
import minus from "../images/minus.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Question({ title, description }) {
  const [toggle, setToggle] = useState(false);

  const btnToggler = () => {
    setToggle(!toggle);
  };

  return (
    <AnimatePresence initial={false}>
      <motion.div className="question">
        <motion.div className="toggle-title">
          <h4>{title}</h4>
          <button onClick={btnToggler}>
            {toggle ? <img src={plus} alt="" /> : <img src={minus} alt="" />}
          </button>
        </motion.div>
        {toggle && <motion.p>{description}</motion.p>}
      </motion.div>
    </AnimatePresence>
  );
}

export default Question;
