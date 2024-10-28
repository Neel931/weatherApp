import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { red } from '@mui/material/colors';

export default function SearchBox({ setWeatherData }) {
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1c25b7f056157d9728c7d7aceaf9b6ce";

    const [city, setCity] = useState("");
    const [error, setError] = useState(false);

    const getWetherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error("City not found");
            }
            let jsonResponse = await response.json();

            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            console.log(result);
            setWeatherData(result); // Pass the data up to the parent component
            setError(false); // Reset error state if successful
        } catch (err) {
            setError(true); // Set error state if fetching data fails
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setError(false); // Clear any previous errors
        await getWetherInfo();
        setCity("");
    };

    return (
        <div className='SearchBox'>
            <h3>Search for weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField 
                    id="city" 
                    label="City Name" 
                    variant="outlined"
                    required 
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color: red[500]}}>No such city found</p>}
            </form>
        </div>
    );
}

