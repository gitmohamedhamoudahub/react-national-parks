import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar.jsx";
import Parks  from "./Pages/Parks.jsx";
import Gallery  from "./Pages/Gallery.jsx";
import   ParkDetails  from "./Pages/Gallery.jsx";
import   WorkingHours from "./Pages/WorkingHours.jsx";
import   Fees  from "./Pages/Fees.jsx";

function App() {

  return (
    <>

  
      <Navbar />
      <Routes>
        <Route path="/" element={<Parks />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/details" element={<ParkDetails />} />
        <Route path="/hours" element={<WorkingHours />} />
        <Route path="/fees" element={<Fees />} />
      </Routes>
    </>
  )
}

export default App
