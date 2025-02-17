import { Link } from "react-router-dom";
//  import "./App.css"; // Import CSS for styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Parks</Link></li>
        <li><Link to="/gallery">Photo Gallery</Link></li>
        <li><Link to="/details">Park Details</Link></li>
        <li><Link to="/hours">Parks Working Hours</Link></li>
        <li><Link to="/fees">Fees</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
