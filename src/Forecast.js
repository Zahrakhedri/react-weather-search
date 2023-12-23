import React, { useState } from "react";
import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState();

  function handleResponse(response) {
    setLoaded(true);
    setForecastData(response.data.daily);
  }

  function load() {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="col">
          <div>Sun</div>
          <div>
            <img src="#" alt="description" />
          </div>
          <div>
            <strong>
              {forecastData[0].temp.max}
              <span className="unit">℃</span>
            </strong>
            10<span className="unit">℃</span>
          </div>
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
