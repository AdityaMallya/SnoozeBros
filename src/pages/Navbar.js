import { Link } from "react-router-dom";
import "./main.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        SnoozeBros
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/watchlist">Watchlist</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
