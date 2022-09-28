import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast.js"; 


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);

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
            image: response.data.weather[0].icon
        }
        )
    }

    function search() {
        const apiKey = "a886363dc826c8ebe5f8a1c7e752c026";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
search(city);
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return (<div className="weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/></div>
            <div className="col-3">
            <input type="submit" value="Search" className="btn btn-light w-100" /></div>
            </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast />
        </div>);
    } 
    else { 
search(city);
return "loading"};
   
    
}