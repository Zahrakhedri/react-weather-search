import React, { useState } from "react";

export default function WTemperature(props) {
  const [unit, setUnit] = useState("celcius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }

  if (unit === "celcius") {
    return (
      <div className="WTemperature">
        <span className="temperature">
          {Math.round(props.celcius)}
          <span className="units">
            ℃ |{" "}
            <a href="/" onClick={showFahrenheit}>
              ℉
            </a>
          </span>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celcius * 9) / 5 + 32;
    return (
      <div className="WTemperature">
        <span className="temperature">
          {Math.round(fahrenheit)}
          <span className="units">
            <a href="/" onClick={showCelcius}>
              ℃
            </a>{" "}
            | ℉
          </span>
        </span>
      </div>
    );
  }
}
