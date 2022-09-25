import React from "react";
import ShowDate from "./ShowDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
    <div className="row mt-3">
            <div className="col-6">
                <WeatherIcon code={props.data.image}/>
                <span className="temperature">{Math.round(props.data.temperature)}</span>
                <span className="unit">°C</span>
            <ul>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li>
                </ul>   
            </div>
            <div className="col-6 city">
            <h1>{props.data.city}</h1>
        <ul>
            <li><ShowDate date={props.data.date}/></li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
            </div>
        </div>
        </div>
    );
}