import "../styles/ChartSection.css";
import "../components/ChartStats.jsx";
import "../components/AnimatedButton.jsx";
import ChartStats from "../components/ChartStats.jsx";
import chart from "../images/chart.svg";
import AnimatedButton from "../components/AnimatedButton.jsx";

function ChartSection() {
  return (
    <div id="Features" className="chart-section">
      <div className="chart-left">
        <div className="stats">
          <div className="stats-money">
            <ChartStats name={"Balance"} amount={"$250"} />
            <ChartStats name={"Last Transaction"} amount={"$1000"} />
          </div>
          <img src={chart} alt="chart-image" />
        </div>
      </div>
      <div className="chart-right">
        <h2 className="secondary-heading">
          Manage your finances like a pro in no time
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
          quis excepturi nesciunt repudiandae voluptas deserunt nihil ea
          laudantium perspiciatis quia? Eaque, est. Aspernatur, deserunt
          blanditiis!
        </p>
        <AnimatedButton name={"Learn More"} />
      </div>
    </div>
  );
}

export default ChartSection;
