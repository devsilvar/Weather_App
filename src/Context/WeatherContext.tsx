import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  DaysApiRight,
  DaysApiLeft,
  weatherApiLeft,
  weatherApiRight,
} from "../Utils/Fetch";
import Modals from "../Utils/Modals";
import { Lst } from "../Utils/GetLocation";

const WeatherContext = createContext<any | undefined>(undefined);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [Loader, setLoader] = useState(false);
  let Datas = localStorage.getItem("localUserLocation");
  const ParsedUserLocation: Lst = JSON.parse(Datas || "{}");

  const [location, setlocation] = useState<Lst>(ParsedUserLocation);
  const [ToastState, setToastState] = useState(false);
  const [Days, setDays] = useState("");
  const [weathers, setWeathers] = useState("");

  const errorNotify = () => {
    setTimeout(() => {
      toast.error("Location Not Found in Database");
    }, 1000);
  };

  // const cc = GetLocation();
  // console.log(cc);

  function AdjustWeather([city, country]: string[]) {
    let ParsedLocation = { city: city, country: country };
    setlocation(ParsedLocation);
   }

  const fetchWeather = async () => {
    const weatherNew =
      weatherApiLeft + `${location.city},${location.country}` + weatherApiRight;
    setLoader(true);
    try {
      const response = await axios.get(weatherNew);
      setLoader(false);
      setWeathers(response.data);
      return response.data;
    } catch (error) {
      console.log(error + "here");
      setLoader(false);
      return error;
    }
  };

  const fetchDays = async () => {
    try {
      const response = await axios.get(
        DaysApiLeft + location.city + DaysApiRight
      );
      setDays(response.data.list);
      return response.data;
    } catch (error) {
      console.log(error + "day here");
      errorNotify();
      setLoader(false);
      return error;
    }
  };

  useEffect(() => {
    fetchDays();
    fetchWeather();
  }, [location]);

  if (Loader) return <Modals />;

  return (
    <WeatherContext.Provider
      value={{
        location,
        Days: Days,
        weathers: weathers,
        setLoader,
        AdjustWeather: AdjustWeather,
        ToastState,
        setToastState,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
