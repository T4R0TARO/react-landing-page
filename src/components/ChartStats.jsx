import "../styles/ChartStats.css";
function ChartStats({ name, amount }) {
  return (
    <div className="chart-stats">
      <p>
        <b>{name}</b>
      </p>
      <h4>{amount}</h4>
    </div>
  );
}

export default ChartStats;
