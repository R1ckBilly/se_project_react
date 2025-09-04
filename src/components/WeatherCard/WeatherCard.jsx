import cloudy from "../../images/cloudy_logo.svg";
import "./WeatherCard.css";

function WeatherCard() {
  return (
    <section className="weather__card">
      <img src={cloudy} alt="Cloudy weather" className="weather__card-image" />
      <p className="weather__card-temp">75&deg; F</p>
    </section>
  );
}

export default WeatherCard;
