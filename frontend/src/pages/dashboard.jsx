import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/sidebar";
import DashboardHeader from "../components/DashboardComponent/DashboardHeader/dashboard_header";
import UploadDocument from "../components/DashboardComponent/UploadDocuments/uploaddocument";
import "./dashboard.css";
function Dashboard() {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <Sidebar />
        <div className="dashboard-main">
          <DashboardHeader />
          <UploadDocument />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;