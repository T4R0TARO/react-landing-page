import "../styles/FAQSection.css";
import lines from "../images/lines.svg";
import questions from "../questions";
import Question from "./Question";

function FAQSection() {
  return (
    <div className="faq-section">
      <h3 className="small-heading">
        Frequently <span>asked questions</span>
      </h3>
      <p className="faq-section__para">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
        excepturi repellat dolor quisquam nam laudantium? Consequatur molestias
        odio, a et quam atque consequuntur minus facilis.
      </p>
      <div className="lines">
        <img src={lines} alt="lines image" />
      </div>
      <div className="questions-container">
        {questions.map((question) => {
          return <Question key={question.id} {...question} />;
        })}
      </div>
    </div>
  );
}

export default FAQSection;
