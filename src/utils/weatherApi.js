import { coordinates, apiKey } from "./constants";

export function getWeatherData() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&units=imperial&appid=${apiKey}`
  )
    .then((res) => {
      return res.ok
        ? res.json()
        : Promise.reject(`Error from weather API: ${res.status}`);
    })
    .then((data) => {
      return parseWeatherData(data);
    });
}

function parseWeatherData(data) {
  const parseData = { temp: {} };

  parseData.city = data.name;
  parseData.temp.F = Math.round(data.main.temp);
  parseData.temp.C = Math.round((parseData.temp.F - 32) * 5 / 9); // TODO - convert F to C

  return parseData;
}
