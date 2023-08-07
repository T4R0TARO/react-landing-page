import "../styles/Layout.css";
import CardSection from "../components/CardSection.jsx";
import ChartSection from "./ChartSection";

function Layout() {
  return (
    <div className="Layout">
      <CardSection />
      <ChartSection />
    </div>
  );
}

export default Layout;
