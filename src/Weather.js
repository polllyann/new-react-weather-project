import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import ShowDate from "./ShowDate.js";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: new Date (response.data.dt * 1000),
            humidity: response.data.main.humidity,
            description: response.data.weather[0].description,
            image: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        }
        )
    }

    if (weatherData.ready) {
        return (<div className="weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/></div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-light w-100" /></div>
            </div>
        </form>
        <div className="row mt-3">
            <div className="col-6">
            <img src={weatherData.image} 
                alt="Rain"
                />
                <span className="temperature">{Math.round(weatherData.temperature)}</span>
                <span className="unit">°C</span>
            <ul>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
                </ul>   
            </div>
            <div className="col-6 city">
            <h1>{weatherData.city}</h1>
        <ul>
            <li><ShowDate date={weatherData.date}/></li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
            </div>
        </div>
        </div>);
    } 
    else { const apiKey = "a886363dc826c8ebe5f8a1c7e752c026";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

return "loading"};
   
    
}