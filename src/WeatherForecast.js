import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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