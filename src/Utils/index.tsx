import { Thermometer, ThermometerSimple } from "@phosphor-icons/react/dist/ssr";
import { cloudy, rainAndSun, snow, sun, thunderRain } from "../assets/Index";
import { BsWater } from "react-icons/bs";
import { useContext } from "react";
import WeatherContext from "../Context/WeatherContext";
import { checkWeather } from "./CheckWeather";
export { useWeatherContext } from "./UseContext";

export const dayNames: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const monthNames: (string | number)[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const thisDay: any[] = new Date()
  .toLocaleString()
  .split(" ")[0]
  .split("/");

export function DaysInfo(Days: any) {
  let DaysArr: any[] = [];
  [0, 8, 16, 24, 32, 39].map((item) => {
    DaysArr.push(Days[item]);
  });
  console.log(DaysArr);
  let Eachday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  //DaysArr[0].weather[0].main
  const dayData = [
    {
      src: checkWeather(DaysArr[0].weather[0].main),
      day: Eachday[new Date(DaysArr[0].dt_txt).getDay()],
      high: DaysArr[0].main.temp_max + "°",
      low: DaysArr[0].main.temp_max + "°",
    },
    {
      src: checkWeather(DaysArr[1].weather[0].main),
      day: Eachday[new Date(DaysArr[1].dt_txt).getDay()],
      high: DaysArr[1].main.temp_max + "°",
      low: DaysArr[1].main.temp_max + "°",
    },
    {
      src: checkWeather(DaysArr[2].weather[0].main),
      day: Eachday[new Date(DaysArr[2].dt_txt).getDay()],
      high: DaysArr[2].main.temp_max + "°",
      low: DaysArr[2].main.temp_max + "°",
    },
    {
      src: checkWeather(DaysArr[3].weather[0].main),
      day: Eachday[new Date(DaysArr[3].dt_txt).getDay()],
      high: DaysArr[3].main.temp_max + "°",
      low: DaysArr[3].main.temp_max + "°",
    },
    {
      src: checkWeather(DaysArr[4].weather[0].main),
      day: Eachday[new Date(DaysArr[4].dt_txt).getDay()],
      high: DaysArr[4].main.temp_max + "°",
      low: DaysArr[4].main.temp_max + "°",
    },
  ];
  if (Days) return dayData;
}
export const TempBoxes = (weathers: any) => {
  const TempBox = [
    {
      icon: <Thermometer size={32} className="text-orange-400 mx-auto" />,
      type: "Tempmax",
      degree: `${weathers.main.temp_max}°`,
    },
    {
      icon: <ThermometerSimple size={32} className="text-orange-400 mx-auto" />,
      type: "Tempmin",
      degree: `${weathers.main.temp_min}°`,
    },

    {
      icon: <Thermometer size={32} className="text-orange-400 mx-auto" />,
      type: "Feel Like",
      degree: `${weathers.main.feels_like}°`,
    },
  ];

  if (weathers) return TempBox;
};
