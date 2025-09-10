import { useContext } from "react";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import CurrentTemperatureUnitContext from "../../context/CurrentTemperatureUnitContext";
import "./Main.css";

function Main({ clothingItems = [], handleOpenItemModal, weatherData }) {
  const { currentTempUnit } = useContext(CurrentTemperatureUnitContext);

  if (!weatherData || !weatherData.temp) return null;

  const temp =
    currentTempUnit === "F" ? weatherData.temp.F : weatherData.temp.C;

  let temperatureType = "";
  if (currentTempUnit === "F") {
    if (temp <= 50) temperatureType = "cold";
    else if (temp <= 75) temperatureType = "warm";
    else temperatureType = "hot";
  } else {
    if (temp <= 10) temperatureType = "cold";
    else if (temp <= 24) temperatureType = "warm";
    else temperatureType = "hot";
  }

  const filteredItems = clothingItems.filter(
    (item) => item.weather.toLowerCase() === temperatureType
  );

  return (
    <main className="main">
      <WeatherCard weatherData={weatherData} />

      <p className="main__text">
        Today is {temp}&deg; {currentTempUnit} / You may want to wear:
      </p>

      <ul className="main__card-list">
        {filteredItems.map((item) => (
          <ItemCard
            key={item._id}
            data={item}
            onCardClick={handleOpenItemModal}
          />
        ))}
      </ul>
    </main>
  );
}

export default Main;
