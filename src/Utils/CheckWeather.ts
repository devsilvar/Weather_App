import {
  BigCloudSun,
  cloudy,
  rainAndSun,
  smallRain,
  snow,
  sun,
  threeCloud,
  thunderRain,
} from "../assets/Index";
import { useContext } from "react";
import WeatherContext from "../Context/WeatherContext";

export function checkWeather(weather: any) {
  let searchedWeather;
  switch (weather) {
    case "rain":
      searchedWeather = thunderRain;
      break;
    case "sun":
      searchedWeather = sun;
      break;
    case "Rain":
      searchedWeather = smallRain;
      break;
    case "Clouds":
      searchedWeather = cloudy;
      break;
    case "Thunderstorm":
      searchedWeather = thunderRain;
      break;
    case "Drizzle":
      searchedWeather = rainAndSun;
      break;
    case "Snow":
      searchedWeather = snow;
      break;
    case "Clear":
      searchedWeather = BigCloudSun;
      break;
    default:
      searchedWeather = threeCloud;
      break;
  }
  return searchedWeather;
}
