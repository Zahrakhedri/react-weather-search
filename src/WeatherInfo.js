import React from "react";
import "./WeatherInfo.css";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WTemperature from "./WTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-4">
        <div className="col-6">
          <h1>{props.data.cityName}</h1>
          <ul>
            <li>
              <FormatedDate newDate={props.data.date} />
            </li>
            <li>{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind speed: {props.data.wind} km/h</li>
          </ul>
        </div>
        <div className="col-6 tempIcon">
          <WTemperature celcius={props.data.temperature} />
          <WeatherIcon iconCode={props.data.icon} />
        </div>
      </div>
    </div>
  );
}
