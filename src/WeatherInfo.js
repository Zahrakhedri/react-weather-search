import React from "react";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-4">
        <div className="col-6">
          <h1>{props.data.cityName}</h1>
          <ul>
            <li>Monday 10:06</li>
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind speed: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col-6 temperature">
          <img source="#" alt="desc" /> <span>{props.data.temperature}℃</span>
        </div>
      </div>
    </div>
  );
}
