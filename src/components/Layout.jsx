import "../styles/Layout.css";
import CardSection from "../components/CardSection.jsx";
import ChartSection from "./ChartSection";
import MessageSection from "./MessageSection";

function Layout() {
  return (
    <div className="Layout">
      <CardSection />
      <ChartSection />
      <MessageSection />
    </div>
  );
}

export default Layout;
