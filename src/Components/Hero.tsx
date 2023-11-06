import { useEffect, useState } from "react";
import { cold,  sunCold } from "../assets/Index";
import { monthNames, thisDay } from "../Utils";
import { checkWeather } from "../Utils/CheckWeather";

const Hero = ({ weathers, Days }: { weathers: any; Days: any }) => {
//  const [ChangeWeather, setChangeWeather] = useState<string>("");
  //const { weathers } = useContext(WeatherContext);
  //const [hotOrCold, sethotOrCold] = useState<boolean>(false);
  // const { Days, weathers } = useWeatherContext();
  // const timer = () => {
  //   return new Date().toLocaleTimeString();
  // };

  const [Timer, setTimer] = useState<string>("");
  console.log(weathers);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimer(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }),
    [];

  //if (!weathers) return undefined;
  const regionNames = new Intl.DisplayNames(["en"], {
    type: "region",
  });

  console.log(Days);
  // if (weathers.main.temp < 30) {
  //   sethotOrCold(false);
  // }

  return (
    <div className="relative ">
      <img
        src={weathers.main.temp < 31 ? cold : sunCold}
        alt="hero"
        className="lg:object-top  object-cover lg:rounded-3xl  h-[50vh] w-full"
      />

      <div className="absolute top-7 lg:top-20 w-full">
        <div className="flex  gap-9 lg:gap-0 lg:flex  justify-between lg:w-4/5 w-10/12 mx-auto">
          <div className="">
            <img
              src={checkWeather(weathers)}
              alt="sunny"
              className=" lg:w-36 w-20 rounded-full "
            />
            <div className="me-2 lg:me-0 lg:text-white text-white">
              <h2 className=" text-md lg:text-2xl  font-nunito lg:text-center">
                {weathers.weather[0]?.main}
              </h2>
              <h3 className=" text-md lg:text-2xl font-nunito lg:text-center">
                {weathers.weather[0]?.description}
              </h3>
            </div>
          </div>

          <div className="text-white  lg:text-xl text-md font-nunito ">
            <h2 className="lg:text-8xl text-7xl">
              {weathers.main.temp.toFixed(0)}°
            </h2>
            <h1 className="">{`${thisDay[1]} ${monthNames[thisDay[0] - 1]} ${
              thisDay[2]
            }`}</h1>
            <p>
              {weathers.name}, {regionNames.of(weathers.sys.country)}
            </p>
            {Timer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
