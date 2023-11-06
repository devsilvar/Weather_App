import WeatherContext from "../Context/WeatherContext";
import { useContext } from "react";

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);

  if (!context) {
    return "i am in the Loading...";
  }
  return context;
};
