import React from "react";
import WeatherInfo from "./WeatherInfo";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="input-group">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
            autoFocus="on"
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </div>
      </form>
      <WeatherInfo />
    </div>
  );
}
