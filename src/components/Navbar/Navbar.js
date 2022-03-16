import "./index.css";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="monthly_stats">monthly_Stats</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
