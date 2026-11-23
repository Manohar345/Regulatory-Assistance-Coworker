import react from 'react';
import logo from '../../assets/logo.png';
import './Navbar.css';
function Navbar(){
    return(
        <div className='navbar'>
            <div id="logo-container">
                <img src={logo} alt="Logo" className='logo' width="80" height="80"/>
            </div>
            <div id="title-container"> 
                <h1>Regulatory Assistance Coworker</h1>
                <h4>AI Powered Regulatory Support Agent</h4>
            </div>
        </div>
    )
}
export default Navbar;