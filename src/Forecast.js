import React, { useState, useEffect } from "react";
import "./Forecast.css";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  function load() {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=5f472b7acba333cd8a035ea85a0d4d4c&units=metric`;
    axios.get(url).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecast.map(function (forecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <ForecastInfo forecastData={forecast} />
                </div>
              );
            } else {
              return null;
            }
          })}{" "}
        </div>
      </div>
    );
  } else {
    load();
    return null;
  }
}
