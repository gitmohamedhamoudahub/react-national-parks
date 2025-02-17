import { useState,useContext  } from "react";
import { Link,useNavigate  } from "react-router-dom";
import StateSelector from "./StatesSelector.jsx";
import  ParksContext  from "../context/ParksContext.jsx";

function Navbar() {
  //const [selectedState, setSelectedState] = useState("NC");
  const { stateCode, setStateCode } = useContext(ParksContext);
  // Handle state selection
  const handleSelected = (event) => {
    setStateCode(event.target.value);
    
  };

  return (
    <nav className="navbar">
      {/* Pass selectedState and onChange to StateSelector */}
      <StateSelector selectedState={stateCode} onChange={handleSelected} />
        
      <ul className="nav-links">
        <li><Link to={`/parks/${stateCode}`}>Parks</Link></li>
        <li><Link to="/gallery">Photo Gallery</Link></li>
        <li><Link to={`/details/${stateCode}`}>Park Details</Link></li>
        <li><Link to="/hours">Parks Working Hours</Link></li>
        <li><Link to="/fees">Fees</Link></li>
      </ul>
    </nav>
    
  );
}

export default Navbar;
