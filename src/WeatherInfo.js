import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="WeatherInfo">
      <div className="row mt-4">
        <div className="col-6">
          <h1>Paris</h1>
          <ul>
            <li>Monday 10:06</li>
            <li>broken clouds</li>
            <li>Humidity: 92%</li>
            <li>speed: 2 km/h</li>
          </ul>
        </div>
        <div className="col-6 temperature">
          <img source="#" alt="desc" /> <span>13℃</span>
        </div>
      </div>
    </div>
  );
}
