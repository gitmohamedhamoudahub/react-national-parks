import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Parks from "./pages/Parks";
import Gallery from "./pages/Gallery";
import Details from "./pages/ParkDetails";
import Hours from "./pages/WorkingHours";
import Fees from "./pages/Fees";
import './App.css'

function App() {
  return (
    
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Parks />} />
          <Route path="/parks/:stateCode" element={<Parks />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/details" element={<Details />} />
          <Route path="/hours" element={<Hours />} />
          <Route path="/fees" element={<Fees />} />
        </Routes>
        </>
    
  );
}

export default App;
