import React from "react";
import "./Weather.css";

export default function Weather() {
    return <div className="weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" /></div>
            <div className="col-3">
            <input type="submit" value="Search"className="btn btn-primary" /></div>
            </div>
        </form>
        <h1>Oslo</h1>
        <ul>
            <li>Friday 13:00</li>
            <li>Rain</li>
        </ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="Rain" />
                13°C
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 98%</li>
                    <li>Humidity: 96%</li>
                    <li>Wind: 21 km/h</li>
                </ul>
            </div>
        </div>
      </div>
}