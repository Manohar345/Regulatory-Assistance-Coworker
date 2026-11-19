import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/Navbar.jsx'
// import Dashboard from './pages/dashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    {/* <Dashboard /> */}
  </StrictMode>,
)
