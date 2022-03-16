import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListContainer from "./components/activities/ListContainer";
import MonthlyStats from "./components/monthly_stats/MonthlyStats";
import Navbar from "./components/Navbar/Navbar";
import ThisMonthActivities from "./components/monthly_stats/ThisMonthActivities";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Strava React with leafletMaps</h1>
        <Navbar />
        <Routes>
          <Route path="/" element={<ListContainer />} />
          <Route path="/monthly_stats" element={<MonthlyStats />} />
          <Route
            path="/activities/:monthId"
            element={<ThisMonthActivities />}
          />
          <Route path="*" element={<h1>notFound Page</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
