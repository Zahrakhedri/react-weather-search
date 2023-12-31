import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastInfo(props) {
  function maxTemp() {
    return Math.round(props.forecastData.temp.max);
  }

  function minTemp() {
    return Math.round(props.forecastData.temp.min);
  }

  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastInfo">
      <div>{day()}</div>
      <div>
        <WeatherIcon iconCode={props.forecastData.weather[0].icon} size={36} />
      </div>
      <div>
        <span className="max">{maxTemp()}</span>
        <span className="unit">℃</span> <span className="min">{minTemp()}</span>
        <span className="unit">℃</span>
      </div>
    </div>
  );
}
