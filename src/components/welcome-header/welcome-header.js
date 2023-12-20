// WelcomeHeader.js
import React from "react";
import './welcome-header.css';
import WelcomeWeatherHOC from "../welcome-weather";

const WelcomeHeader = (props) => {
    const {city} = props
    console.log(city)
    return (
        <div className="row mb2 w-header">

            <div className="col-md-6">
                <div className="description">
                    <h1 className="display-4">Weather App</h1>
                    <p className="lead">
                        Welcome to our weather app.
                    </p>
                    <p className="lead">
                        Get real-time weather information for your favorite city.
                    </p>
                    <hr className="my-4"/>
                    <p className="minor">
                        © Copyright 2023. Developer - Temirlan.
                    </p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="intro-data">
                    <WelcomeWeatherHOC city={city}/>
                </div>
            </div>
        </div>
    );
}

export default WelcomeHeader
