import React from "react";
import { ApiServiceConsumer} from "../weather-api-service-context/api-service-context";
import WeatherContent from "../weather-content/weather-content";
import {compose, withData} from "../hoc-helpers";

const WeatherInfo = ({ selectedCity, match, data }) => {
    return <WeatherContent data={data} />;
};
const WeatherInfoHOC = compose(
    withData,
    (Component) => (props) => (
        <ApiServiceConsumer>
            {(apiService) => <Component {...props} getData={() => apiService.getWeather(props.match.params.City)} />}
        </ApiServiceConsumer>
    )
)(WeatherInfo);

export default WeatherInfoHOC;
