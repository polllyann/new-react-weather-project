import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.list);
    setLoaded(true);
}

    if (loaded) {
        return (
            <div className="WeatherForecast">
                <div className="row">
                    <div className="col">
                      <WeatherForecastDay data={forecast[0]} />
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