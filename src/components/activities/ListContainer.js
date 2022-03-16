import fetchData from "../../utils/stravaConection";
import "./index.css";

import { useEffect, useState } from "react";
import ListItem from "./ListItem";

const ListContainer = () => {
  const [userActivities, setUserActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(0);

  useEffect(() => {
    setIsLoading(1);
    fetchData().then((res) => {
      setIsLoading(0);
      setUserActivities(res);
    });
  }, []);
                                   console.log(userActivities);
  return (
    <div className="avtivitiesContainer">
      <h3>USER ACTIVITIES LIST</h3>
      <div className="itemList_Grid">
        <span>Name</span>
        <span>Distance</span> 
        <span>Elapsed_time</span>
        <span>Max Speed</span>
        <span>Elevation_gain</span>
        <span>Start_date</span>
      </div>
      {isLoading ? <div className="spinner"></div> : null}
      {userActivities.map((el) => {
        return (
          <ListItem
            key={el.id}
            id={el.id}
            name={el.name}
            distance={el.distance}
            time={el.elapsed_time}
            maxSpeed={el.max_speed}
            elevation_gain={el.total_elevation_gain}
            date={el.start_date}
            startLatlng={el.start_latlng}
            rute={el.map.summary_polyline}
          />
        );
      })}
    </div>
  );
};

export default ListContainer;
