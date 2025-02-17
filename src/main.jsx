import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ParksProvider } from "./context/ParksContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ParksProvider>    
    <Router>
      <App />
    </Router>
    </ParksProvider>
  </StrictMode>,
)
