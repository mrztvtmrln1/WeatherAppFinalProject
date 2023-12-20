// WeatherApiService.js
export default class WeatherApiService {
    WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
    WEATHER_API_KEY = "0f4837bef5f841d00f1c119ef4092f02";

    getResource = async (url) => {
        const res = await fetch(`${this.WEATHER_API_URL}${url}&appid=${this.WEATHER_API_KEY}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    };

    getWeather = async (location) => {
        try {
            const url = `/weather?q=${location}&units=metric`;
            const response = await this.getResource(url);
            return response;
        } catch (error) {
            console.error('Error fetching weather data:', error);
            throw error;
        }
    };

    searchCities = async (inputValue, page) => {
        try {
            const url = `/find?q=${inputValue}&type=like&page=${page}&units=metric`;
            const response = await this.getResource(url);
            // Assuming the response contains data property with an array of cities
            const cities = response.data || [];
            const hasMore = cities.length > 0; // You may adjust this based on your API response
            console.log(response)
            return {
                data: cities,
                hasMore,
            };
        } catch (error) {
            console.error('Error searching cities:', error);
            throw error;
        }
    };
}
