import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
// import Navbar from './components/Navbar/Navbar.jsx'
import Dashboard from './pages/dashboard.jsx'
// import DashboardHeader from './components/DashboardComponent/DashboardHeader/dashboard_header.jsx'
// import Sidebar from './components/Sidebar/sidebar.jsx'
import UploadDocument from "./components/DashboardComponent/UploadDocuments/uploaddocument.jsx";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
    {/* <Navbar /> */}
    {/* <Dashboard /> */}
    {/* <Sidebar /> */}
    {/* <DashboardHeader /> */}
    {/* <UploadDocument /> */}
  </StrictMode>
)
