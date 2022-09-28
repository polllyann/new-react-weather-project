import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemp() {
        let temperature = Math.round(props.data.main.temp_max);
        return `${temperature}°`;
    }

    function minTemp() {
        let temperature = Math.round(props.data.main.temp_min);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();


    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }
    return (
        <div className="WeatherForecastDay">
        <div className="WeatherForecastDate">{day()}</div>
        <WeatherIcon code={props.data.weather[0].icon} size={35}/>
        <div className="WeatherForecastTemp"><span className="ForecastTempMin">{maxTemp()}</span> 
        | <span className="ForecastTempMax">{minTemp()}</span></div>
        </div>
    );
}