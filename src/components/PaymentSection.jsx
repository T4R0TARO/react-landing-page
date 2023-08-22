import "../styles/PaymentSection.css";
import Card from "../components/Card.jsx";
import card from "../images/creditcard.svg";
import active from "../images/active.svg";
import inactive from "../images/inactive.svg";
import check from "../images/check.svg";
import checkDisabled from "../images/check-disabled.svg";

function PaymentSection() {
  return (
    <div id="Pricing" className="payment-section">
      <h3 className="small-heading">
        An exceptional service, <span>at the right price</span>
      </h3>
      <p className="payment-para">
        Start with our free plan and switch to premium as you grow.{" "}
      </p>
      <div className="payment-card-container">
        <Card
          account={"Free"}
          amount={"$0"}
          text={"Manage your bussiness with a simple and efficient account"}
          button={"Get Started"}
          card={card}
          active={active}
          inactive={inactive}
          check={check}
          checkDis={checkDisabled}
          text1={"10 Free local transfers"}
          text2={"Free ATM withdrawls in Dollar up to $250 per month"}
          text3={"Free payments to other Draft accounts"}
          text4={"Prepaid debit cards"}
          text5={"Virtual cards"}
          text6={"Priority 24/7 support"}
          text7={"Exchange 24 currencies"}
          text8={"Multi-user access"}
        />
        <Card
          account={"Premium"}
          amount={"$10"}
          text={"Manage your bussiness with a simple and efficient account"}
          button={"Get Started"}
          card={card}
          active={active}
          inactive={inactive}
          check={check}
          checkDis={checkDisabled}
          text1={"10 Free local transfers"}
          text2={"Free ATM withdrawls in Dollar up to $250 per month"}
          text3={"Free payments to other Draft accounts"}
          text4={"Prepaid debit cards"}
          text5={"Virtual cards"}
          text6={"Priority 24/7 support"}
          text7={"Exchange 24 currencies"}
          text8={"Multi-user access"}
        />
      </div>
    </div>
  );
}

export default PaymentSection;
