import "./index.css";
import polyline from "@mapbox/polyline";
import {
  MapContainer,
  TileLayer,
  Marker,
  // Popup,
  Polyline,
} from "react-leaflet";
export const MapRender = ({ startLatlng, rute, setMapTrigger }) => {
  let Druta = polyline.decode(rute);

  return (
    <>
      <button onClick={() => setMapTrigger(0)} className="closeMap">
        CloseMap
      </button>
      <MapContainer center={startLatlng} zoom={40} className="map_container">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline positions={Druta}></Polyline>
        <Marker position={startLatlng} />
      </MapContainer>
    </>
  );
};
