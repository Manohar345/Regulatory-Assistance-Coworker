import React from "react";
import { House,Upload,Folder,ChartColumn,CircleFadingCheck } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
function Sidebar() {
    return (
        <div className="sidebar">
            <NavLink to="/dashboard"  className="sidebar-item-dashboard">
                <House id="house-dashboard-icon" size={24} />
                <h3 id="dashboard"><span>Dashboard</span></h3>
            </NavLink>
            <NavLink to="/upload-document" className="sidebar-item-upload-document">
                <Upload id="upload-document-icon" size={24} />
                <h3 id="upload-document"><span>Upload Document</span></h3>
            </NavLink>
            <NavLink to="/submission-package" className="sidebar-item-submission-package">
                <Folder id="folder-icon" size={24} strokeWidth={1.75} />
                <h3 id="submission_package"><span>Submission Package</span></h3>
            </NavLink>
            <NavLink to="/analysis-results" className="sidebar-item-analysis-results">
                <ChartColumn id="report-icon" size={24} strokeWidth={1.75} />
                <h3 id="analysis-results"><span>Analysis results</span></h3>
            </NavLink>
            <NavLink to="/submission-progress" className="sidebar-item-submission-progress">
                <CircleFadingCheck id="status-icon" size={24} strokeWidth={1.75} />
                <h3 id="submission_progress"><span>Submission Progress</span></h3>
            </NavLink>
        </div>
    )
}
export default Sidebar;

