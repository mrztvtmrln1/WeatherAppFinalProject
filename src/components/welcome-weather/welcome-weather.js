// WeatherForecast.js
import React from "react";
import {withData, compose} from "../hoc-helpers";
import {ApiServiceConsumer} from "../weather-api-service-context/api-service-context";

const WelcomeWeather = ({ data, city }) => {
    if (!data || !data.main || !data.weather) {
        return null; // Handle case when data is not available
    }

    return (
        <div className="container">
            <div className="top">
                <div className="location">
                    <p>{city}</p>
                </div>
                <div className="temp">
                    {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
                </div>
                <div className="description">
                    {data.weather ? <p>{data.weather[0].main}</p> : null}
                </div>
            </div>
        </div>
    );
}



const WelcomeWeatherHOC = compose(
    withData,
    (Component) => (props) => (
        <ApiServiceConsumer>
            {(apiService) => <Component {...props} getData={() => apiService.getWeather(props.city)} />}
        </ApiServiceConsumer>
    )
)(WelcomeWeather);

export default WelcomeWeatherHOC;

