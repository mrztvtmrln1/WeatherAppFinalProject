import React from 'react';

const WeatherContent = ({ data }) => {
    if (!data || !data.main || !data.weather) {
        return null; // Handle case when data is not available
    }

    return (
        <div className="container">
            <div className="top">
                <div className="location">
                    <p>{data.name}</p>
                </div>
                <div className="temp">
                    {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
                </div>
                <div className="description">
                    {data.weather ? <p>{data.weather[0].main}</p> : null}
                </div>
            </div>

            {data.name !== undefined && (
                <div className="bottom">
                    <div className="feels">
                        {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
                        <p>Feels Like</p>
                    </div>
                    <div className="humidity">
                        {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} m/s</p> : null}
                        <p>Wind Speed</p>
                    </div>
                </div>
            )}

            <div className="additional-info">
                <div>
                    <p>Min Temperature: {data.main.temp_min.toFixed()}°C</p>
                    <p>Max Temperature: {data.main.temp_max.toFixed()}°C</p>
                    <p>Pressure: {data.main.pressure} hPa</p>
                    <p>Visibility: {data.visibility} meters</p>
                </div>
                <div>
                    <p>Wind Gust: {data.wind.gust} m/s</p>
                    <p>Rain (1h): {data.rain ? `${data.rain['1h']} mm` : 'N/A'}</p>
                    <p>Cloudiness: {data.clouds.all}%</p>
                </div>
                <div>
                    <p>Sunrise: {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                    <p>Sunset: {new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                </div>
            </div>
        </div>
    );
};

export default WeatherContent;
