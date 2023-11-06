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
import GetLocation, { Lst } from "../Utils/GetLocation";

const WeatherContext = createContext<any | undefined>(undefined);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [Loader, setLoader] = useState(false);
  let Datas = localStorage.getItem("localUserLocation");
  const ParsedUserLocation: Lst = JSON.parse(Datas || "{}");
  // const [city, setCity] = useState<string | null>(
  //   localStorage.getItem("localUserLocation")
  // );

  const [location, setlocation] = useState<Lst>(ParsedUserLocation);
  const [ToastState, setToastState] = useState(false);
  const [Days, setDays] = useState("");
  const [weathers, setWeathers] = useState("");

  // async function displayLocation(latitude: number, longitude: number) {
  //   var request = new XMLHttpRequest();
  const errorNotify = () => {
    setTimeout(() => {
      toast.error("Location Not Found in Database");
    }, 1000);
  };

  const cc = GetLocation();
  console.log(cc);

  //   var method = "GET";
  //   var urls = `https://www.mapquestapi.com/geocoding/v1/reverse?key=${APIMAP_KEY}&location=${latitude},${longitude}&includeRoadMetadata=true&includeNearestIntersection=true`;
  //   try {
  //     const response = await axios.get(urls);
  //     console.log(response.data.results[0].locations[0].adminArea4);
  //     loc = response.data.results[0].locations[0].adminArea4;
  //     setstartCity(loc);
  //     return response.data;
  //   } catch (error) {
  //     return error;
  //   }
  // }
  // const users = Fetchlocation();
  // console.log(users);

  //6.5798144 6.5798144 3.3488896
  // let lat: number;
  // let lon: number;
  // const successCallback = (position: any) => {
  //   lat = position.coords.latitude;
  //   lon = position.coords.longitude;
  //   // setlocation([lat, lon]);
  //   displayLocation(lat, lon);
  //   return;
  // };

  // const options = {
  //   enableHighAccuracy: true,
  // };

  // const errorCallback = (error: any) => {
  //   console.log(error);
  // };

  // navigator.geolocation.getCurrentPosition(
  //   successCallback,
  //   errorCallback,
  //   options
  // );
  // console.log(first.current);

  // console.log(loc);
  //let firstWeather;
  // const fetchUserWeather = async () => {
  //   console.log(
  //     `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  //   );
  //   try {
  //     const response = await axios.get(
  //       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
  //     );
  //     console.log(response.data);
  //     setWeathers(response.data);
  //     setCity("osun");
  //     firstWeather = response.data;
  //     return response.data;
  //   } catch (error) {
  //     return error;
  //   }
  // };

  function AdjustWeather([city, country]: string[]) {
    let ParsedLocation = { city: city, country: country };
    setlocation(ParsedLocation);
  }

  // function getStateLocation(userState) {
  //   setHeroAddedState(userState);
  // }
  // const successCallback = (position: any) => {
  //   let lat = position.coords.latitude;
  //   let lon = position.coords.longitude;
  //   setUserLocation([...UserLocation, lat, lon]);
  //   return { lat, lon };
  // };

  // const errorCallback = (error: any) => {
  //   console.log(error);
  // };
  // navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

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
