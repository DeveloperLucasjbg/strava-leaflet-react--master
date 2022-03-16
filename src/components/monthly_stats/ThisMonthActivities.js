import "./index.css";

import { useParams } from "react-router-dom";

function ThisMonthActivities() {
  let params = useParams();

  return (
    <div className="ThisMonthContainer">
      <h3>{params.monthId} activities</h3>
      <div className="monthActivitiesList">
        <p>1 - need more stats</p>
        <p>2 -</p>
        <p>3 -</p>
        <p>4 -</p>
        <p>5 -</p>
      </div>
    </div>
  );
}

export default ThisMonthActivities;
