import "../styles/Layout.css";
import CardSection from "../components/CardSection.jsx";
import ChartSection from "./ChartSection";
import MessageSection from "./MessageSection";
import PaymentSection from "./PaymentSection";
import FAQSection from "./FAQSection";

function Layout() {
  return (
    <div className="Layout">
      <CardSection />
      <ChartSection />
      <MessageSection />
      <PaymentSection />
      <FAQSection />
    </div>
  );
}

export default Layout;
