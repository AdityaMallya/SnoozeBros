import { Link } from "react-router-dom";
import "./main.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">SnoozeBros</Link>
      <ul className="nav-links">
<<<<<<< HEAD
        <li><Link to="/">Home</Link></li>
        <li><Link to="/watchlist">Watchlist</Link></li>
        <li><Link to="/about">About</Link></li>
=======
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
>>>>>>> 3b3db69305a56131b92ba7b0f501dfadadab9529
      </ul>
    </nav>
  );
}

export default Navbar;
