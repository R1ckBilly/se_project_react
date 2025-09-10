import { useContext } from "react";

import CurrentTemperatureUnitContext from "../../context/CurrentTemperatureUnitContext";
import cloudy from "../../images/cloudy_logo.svg";
import "./WeatherCard.css";

function WeatherCard({ weatherData }) {
  const contextValue = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather__card">
      <img src={cloudy} alt="Cloudy weather" className="weather__card-image" />
      <p className="weather__card-temp">
        {weatherData.temp[contextValue.currentTempUnit]}&deg; {contextValue.currentTempUnit}
      </p>
    </section>
  );
}

export default WeatherCard;
