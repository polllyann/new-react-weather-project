import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

function handleResponse(response) {
    setForecast(response.data.list);
    setLoaded(true);
}

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                        <div className="WeatherForecastDay">Thu</div>
                        <WeatherIcon code="01d" size={35}/>
                        <div className="WeatherForecastTemp"><span className="ForecastTempMin">{forecast[0].main.temp_min}°</span> 
                        | <span className="ForecastTempMax">{forecast[0].main.temp_max}°</span></div>
                    </div>
                </div>
            </div>
         );
    } 
    
    else {
 let apiKey = "a886363dc826c8ebe5f8a1c7e752c026";
 let lon = props.coordinates.lon;
 let lat = props.coordinates.lat;
 let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
 axios.get(apiUrl).then(handleResponse);
    }
}