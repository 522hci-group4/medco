import React from "react";
import {Link} from "react-router-dom";
import workouts from '../assets/workouts.png';
import diet from '../assets/diet.png';
import "../styles/Tips.css";

function Tips() {
    return (
    <div>
        <h1>Tips</h1>
        <div className="container">
            <Link to="/Workouts">
                <button>
                <img src={workouts} />
                <br /><br />
                Workouts</button>
            </Link>
            <Link to="/Diet">
            <button>
                <img src={diet} />
                <br /><br />
                Diet Plans</button>
            </Link>
        </div>
    </div>
    );
}

export default Tips;