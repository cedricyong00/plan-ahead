/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import WeatherTable from "./weatherTable";

function Weather() {

  // Table font style
  const fontStyle = {
    color: "black",
    fontSize: "15px",
    padding: "20px"
  };

    // Table CSS style
    const divStyle = {
        border: "2px solid teal",
        overflow: "auto",
        height: "240px",
        width: "100%"
      };

  // Weather Data
  const [weatherData, setWeatherData] = useState([]);

  //Holiday API
  const apiUrl = new URL("https://api.weatherapi.com/v1/forecast.json");
  apiUrl.search = new URLSearchParams({
    key: "4fcaa18abd40459cb28123335232111",
    q: "Singapore",
    days: 5,
  });

  // fetches data every time page renders
  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(apiUrl);
      const jsonData = await response.json();
      setWeatherData(jsonData.forecast.forecastday);
    }
    fetchWeather();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1 style={fontStyle}>Weather Forecast</h1>
      <div style={divStyle}>
        <WeatherTable weatherData = {weatherData}/>
      </div>
    </>
  );
}

export default Weather;
