import { MapRender } from "../leaflet/mapContainer/index";
import "./index.css";
import { useState } from "react";

const ListItem = ({
  id,
  name,
  date,
  distance,
  time,
  maxSpeed,
  elevation_gain,
  startLatlng,
  rute,
}) => {
  const [mapTrigger, setMapTrigger] = useState(false);

  return (
    <div className="item_list_Container">
      <div className="item_list">
        <p>{name}</p>
        <p>{distance}</p>
        <p>{time}</p>
        <p>{maxSpeed}</p>
        <p>{elevation_gain}</p>
        <p>{date}</p>

        <button onClick={() => setMapTrigger(!mapTrigger)}>
          {mapTrigger ? "close Map" : "see Map"}
        </button>
      </div>
      {mapTrigger ? (
        <MapRender
          startLatlng={startLatlng}
          rute={rute}
          setMapTrigger={setMapTrigger}
        />
      ) : null}
    </div>
  );
};

export default ListItem;
