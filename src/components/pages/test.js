import React, { useState } from 'react';
import WeatherApiService from '../../services/weather-api-service';
import './search.css'
const weatherApiService = new WeatherApiService();

function Se2() {
    const [data, setData] = useState({});
    const [location, setLocation] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const searchLocation = async (event) => {
        if (event.key === 'Enter') {
            try {
                const response = await weatherApiService.getWeather(location);
                setData(response);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
            setLocation('');
            setSuggestions([]);
        }
    };

    const handleInputChange = async (inputValue) => {
        try {
            const response = await weatherApiService.searchCities(inputValue, 1);
            setSuggestions(response.data);
        } catch (error) {
            console.error('Error fetching city suggestions:', error);
        }
    };

    const handleCitySelect = async (selectedOption) => {
        try {
            const response = await weatherApiService.getWeather(selectedOption.value);
            setData(response);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
        setLocation('');
        setSuggestions([]);
    };

    return (
        <div className="app">
            <div className="search">
                <input
                    value={location}
                    onChange={(event) => {
                        setLocation(event.target.value);
                        handleInputChange(event.target.value);
                    }}
                    onKeyPress={searchLocation}
                    placeholder="Enter Location"
                    type="text"
                />
                {suggestions.length > 0 && (
                    <div className="suggestions">
                        {suggestions.map((city) => (
                            <div
                                key={city.id}
                                className="suggestion-item"
                                onClick={() => handleCitySelect({ value: city.id, label: `${city.name}, ${city.country}` })}
                            >
                                {`${city.name}, ${city.country}`}
                            </div>
                        ))}
                    </div>
                )}
            </div>
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
            </div>
        </div>
    );
}

export default Se2;
