import { useState } from "react";
import { Link,useNavigate  } from "react-router-dom";
import StateSelector from "./StatesSelector.jsx";

function Navbar() {
  const [selectedState, setSelectedState] = useState("NC");
  // Handle state selection
  const handleSelected = (event) => {
    setSelectedState(event.target.value);
    
  };

  return (
    <nav className="navbar">
      {/* Pass selectedState and onChange to StateSelector */}
      <StateSelector selectedState={selectedState} onChange={handleSelected} />
        
      <ul className="nav-links">
        <li><Link to={`/parks/${selectedState}`}>Parks</Link></li>
        <li><Link to="/gallery">Photo Gallery</Link></li>
        <li><Link to={`/details/${selectedState}`}>Park Details</Link></li>
        <li><Link to="/hours">Parks Working Hours</Link></li>
        <li><Link to="/fees">Fees</Link></li>
      </ul>
    </nav>
    
  );
}

export default Navbar;
