import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {

function handleResponse(response) {
    console.log(response.data);
}

    let apiKey = "a886363dc826c8ebe5f8a1c7e752c026";
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

 return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeatherForecastDay">Thu</div>
                <WeatherIcon code="01d" size={35}/>
                <div className="WeatherForecastTemp"><span className="ForecastTempMin">10°</span> 
                | <span className="ForecastTempMax">16°</span></div>
            </div>
        </div>
    </div>
 );
}