import React from 'react';

export default function PostCards (props) {
    const [unit, setUnit] = React.useState("C");

    // Conversion functions
    const toCelsius = (k) => (k - 273.15).toFixed(2);
    const toFahrenheit = (k) => ((k - 273.15) * 9/5 + 32).toFixed(2);

    // Helper to display value based on unit
    const displayTemp = (k) => unit === "C" ? `${toCelsius(k)} °C` : `${toFahrenheit(k)} °F`;

    return (
        <div className="weather-card">
            <h2>
                Weather Info: 
                <button onClick={() => setUnit(unit === "C" ? "F" : "C")}>
                    {unit === "C" ? "Celsius | °C" : "Fahrenheit | °F"}
                </button>
            </h2>
            <h4> Weather Today: {props.weatherData.weather[0].main}</h4>
            <h4> Weather Description: {props.weatherData.weather[0].description}</h4>
            <h4> Feels Like: {displayTemp(props.weatherData.main.feels_like)}</h4>
            <h4> Temperature: {displayTemp(props.weatherData.main.temp)}</h4>
            <h4> Humidity: {props.weatherData.main.humidity}%</h4>
            <h4> Min Temperature: {displayTemp(props.weatherData.main.temp_min)}</h4>
            <h4> Max Temperature: {displayTemp(props.weatherData.main.temp_max)}</h4>
        </div>
    )
}