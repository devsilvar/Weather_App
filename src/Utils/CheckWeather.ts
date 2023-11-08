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

// swicth function to convert the Image on the hero section correspond with the real weather condition

//it was used in the --Hero componenets  - Hero.tsx
export function checkWeather(weather: any) {
  let searchedWeather;
  switch (weather) {
    case "Rain":
      searchedWeather = smallRain;
      break;
    case "sun":
      searchedWeather = sun;
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
  console.log(weather);
  console.log(searchedWeather);
  return searchedWeather;
}
