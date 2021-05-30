import React, {Component} from "react";
import "../landingpage.css";
import Login from "./Login";

const LandingPage = () => (
    <div className="container">
        <div className="header">
            <h1>Project X</h1>
            <h1>About</h1>
            <h1>Github</h1>
        </div>
        <div className="content">
            <h1>Host Hackathons</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Etiam interdum a orci sed tempus. Maecenas suscipit ultrices leo,
            sed facilisis ipsum porttitor sit amet.</p>
        </div>
        <div>
            <Login />
        </div>
    </div>
);

export default LandingPage;