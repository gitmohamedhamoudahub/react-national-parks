import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Parks  from "./Pages/Parks.jsx";
import Gallery  from "./Pages/Gallery.jsx";
import   ParkDetails  from "./Pages/Gallery.jsx";
import   WorkingHours from "./Pages/WorkingHours.jsx";
import   Fees  from "./Pages/Fees.jsx";
import StateSelector from "./components/StatesSelector.jsx";
function App() {

  return (
    <>

  <div className='mainContainer'>      
    <Navbar />
      <Routes>
        <Route path="/" element={<Parks />} />
        <Route path="/parks/:stateCode" element={<Parks />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/details" element={<ParkDetails />} />
        <Route path="/hours" element={<WorkingHours />} />
        <Route path="/fees" element={<Fees />} />
      </Routes>
      </div>

    </>
  )
}

export default App
