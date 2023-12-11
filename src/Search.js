import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import "./Search.css";
import axios from "axios";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setweatherData] = useState({
    ready: false,
  });

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayTemperature(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      cityName: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(displayTemperature);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  if (weatherData.ready) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
              onChange={updateCity}
            />
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
