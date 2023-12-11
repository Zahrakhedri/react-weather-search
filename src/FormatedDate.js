import React from "react";

export default function FormatedDate(props) {
  let hour = props.newDate.getHours();
  let minute = props.newDate.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.newDate.getDay()];
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minute < 10) {
    minute = `0${minute}`;
  }
  return (
    <div className="FormatedDate">
      {day} {hour}:{minute}
    </div>
  );
}
