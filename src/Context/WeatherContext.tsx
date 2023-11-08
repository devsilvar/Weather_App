import { createContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  DaysApiRight,
  DaysApiLeft,
  weatherApiLeft,
  weatherApiRight,
} from "../Utils/Fetch";
import Modals from "../small Components/Modals";
import GetLocation, { Lst } from "../Utils/DeviceLocation";

const WeatherContext = createContext<any | undefined>(undefined);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  //run the get location code from ---Getlocation.ts and save it to the localstorage
  GetLocation();

  //retrive the values from the local storage
  let Datas = localStorage.getItem("localUserLocation");
  const ParsedUserLocation: Lst = JSON.parse(Datas || "{}");

  const [Loader, setLoader] = useState(false);
  const [location, setlocation] = useState<Lst>(ParsedUserLocation);
  const [ToastState, setToastState] = useState(false);
  const [Days, setDays] = useState("");
  const [weathers, setWeathers] = useState("");

  //toast that indicates if the location is not available
  const errorNotify = () => {
    setTimeout(() => {
      toast.error("Location Not Found in Database");
    }, 1000);
  };

  // console.log(location);
  // console.log(ParsedUserLocation);

  // const cc = GetLocation();
  // console.log(cc);

  //function that chnages serches for the weather when it is inputed from the navbar
  function AdjustWeather([city, country]: string[]) {
    let ParsedLocation = { city: city, country: country };
    setlocation(ParsedLocation);
  }

  //get the weather from teh weather api
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

  //get the forecasted days from teh days api
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

  //for page load
  const PageReload: any = (): void => {
    window.location.reload();
  };

  useEffect(() => {
    fetchDays();
    fetchWeather();
  }, [location]);
  //i used three apis so i am reloading so that all the api will be loaded at first - it runs on the first load no on subsequent onces
  if (!location.city) {
    setTimeout(() => {
      PageReload();
    }, 7000);
  }
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
