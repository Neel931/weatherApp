import SearchBox from './SearchBox.jsx';
import InfoBox from './InfoBox.jsx';
import { useState } from 'react';

function WeatherApp() {
    const [weatherData, setWeatherData] = useState(null);

    return (  
        <div className="weather-app">
            <h1>Weather App</h1>
            <SearchBox setWeatherData={setWeatherData} />
            {weatherData && <InfoBox info={weatherData} />}
        </div>
    );
}

export default WeatherApp;
