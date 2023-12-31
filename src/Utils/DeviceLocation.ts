import { useEffect } from "react";
import axios from "axios";
import { userLocationLinkRight, userLocationLinkleft } from "./Fetch";
let localUserLocation: string[];
if (localStorage.localUserLocation) {
  //check if we have any students in the local storage
  //if we have, send the data in the locastorge into the student variable
  localStorage.getItem("localUserLocation");
} else {
  //if we do not have anything like student in out local storage/Database create a student array
  localUserLocation = [];
  // create a databse location called Students
  localStorage.setItem("products", JSON.stringify(localUserLocation));
}

let lat: number; //for the longitude
let lon: number; //for the latitude

export type Lst = {
  [x: string]: any;
  city: string;
  country: string;
};

//API fetch Call to get the initail location of the user device
const GetLocation = () => {
  const userLocation = (lat: number, lon: number) => {
    axios
      .get(userLocationLinkleft + `${lat},${lon}` + userLocationLinkRight)
      .then((response) => {
        console.log(response.data.results[0].locations[0]);
        let localUserLocationCity: string =
          response.data.results[0].locations[0].adminArea5;
        let localUserLocationCountry: string =
          response.data.results[0].locations[0].adminArea1;
        const city_country: Lst = {
          city: localUserLocationCity,
          country: localUserLocationCountry,
        };
        console.log(response.data.results[0]);
        localStorage.setItem("localUserLocation", JSON.stringify(city_country));
      });
  };

  useEffect(() => {
    setTimeout(() => {
      const successCallback = (position: any) => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        // console.log(lat, lon);
        userLocation(lat, lon);
        //return { lat, lon };
        return;
      };

      const options = {
        enableHighAccuracy: true,
      };

      const errorCallback = (error: any) => {
        console.log(error);
      };

      navigator.geolocation.getCurrentPosition(
        successCallback,
        errorCallback,
        options
      );
    }, 1000);
  }, []);
};

export default GetLocation;
