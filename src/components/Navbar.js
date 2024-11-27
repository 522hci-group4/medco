import React, { useState} from "react";
import MedcoLogo from '../assets/logo.png';
import {Link} from "react-router-dom";
import "../styles/Navbar.css";

function Navbar(){
    
    const [openLinks, setOpenLinks] = useState(false)
    
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks?"open":"close"}>
                <img src={MedcoLogo} />
            </div>
            <div className="rightSide">
                <Link to="/"> Home </Link>
                <Link to="/about"> About Us </Link>
                <Link to="/tips"> Tips </Link>
            </div> 
        </div>
    );
}

export default Navbar;