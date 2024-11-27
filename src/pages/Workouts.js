import React from "react";
import {Link} from "react-router-dom";
import back from '../assets/back.png';
import "../styles/workouts.css";

function Workouts() {
    return (
    <div>
        <Link to="/Tips" className="back-button">
            <img src={back} alt="Back" />
        </Link>
        <h1>Workouts</h1>
        <h2>abc</h2>
    </div>
    );
}

export default Workouts;