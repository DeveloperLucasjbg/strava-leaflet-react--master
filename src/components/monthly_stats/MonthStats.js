import "./index.css";
import { useNavigate } from "react-router-dom";

const MonthStats = ({ month, distance, elevation }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/activities/${month}`);
  }
  return (
    <div
      className="monthStats"
      onClick={() => {
        handleClick();
      }}
    >
      <h3>{month}</h3>
      <h3>{1200}km</h3>
      <h3>total elevation: {67}</h3>
    </div>
  );
};

export default MonthStats;
