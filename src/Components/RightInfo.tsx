import { Thermometer, Wind } from "@phosphor-icons/react";
import DaysCard from "./DaysCard";
import { BsSpeedometer2 } from "react-icons/bs";
import { DaysInfo, TempBoxes } from "../Utils";
import TempCardL from "./TempCardsL";
const RightInfo = ({ Days, weathers }: { Days: any; weathers: any }) => {
  // const { weathers, Days } = useContext(WeatherContext);

 
  //  console.log(TempBoxes(weathers));
  return (
    <section className="lg:col-span-2 col-span-3 font-nunito">
      <div className="border border-orange-500  rounded-2xl lg:my-5 mb-5 lg:px-0 px-1  mx-auto lg:w-full w-11/12 lg:mx-0 ">
        <div className="">
          <div className="lg:flex md:flex ">
            <div className="">
              {/* <p className="text-center pt-4">Main Information</p> */}
              <div className="temperature lg:justify-normal justify-center flex flex-wrap lg:p-5 py-5 gap-7 lg:gap-6 text-center">
                {TempBoxes(weathers)?.map((item, index: number) => {
                  return (
                    <TempCardL
                      key={index}
                      icon={item.icon}
                      type={item.type}
                      degree={item.degree}
                    />
                  );
                })}
              </div>
            </div>

            <div className="">
              {/* <p className="text-center pt-4">Wind Infomation</p> */}
              <div className="flex gap-2 lg:justify-normal justify-center p-5 text-center items-center">
                <div className="lg:border-l-2 border-l-0 border-orange-500 md:border-l-2 md:ps-4 lg:ps-8 ">
                  <BsSpeedometer2
                    size={32}
                    className="text-orange-400 mx-auto"
                  />{" "}
                  <p> Speed</p>
                  <h2 className="text-lg lg:text-2xl font-bold">
                    {weathers.wind.speed}m/s
                  </h2>
                </div>

                <div>
                  <Thermometer size={32} className="text-orange-400 mx-auto" />{" "}
                  <p>WindDirection</p>
                  <h2 className="text-lg lg:text-2xl font-bold">
                    {weathers.wind.deg}°
                  </h2>
                </div>

                <div>
                  <Wind size={32} className="text-orange-400 mx-auto" />{" "}
                  <p> Gust</p>
                  <h2 className="lg:text-2xl text-lg font-bold">
                    {weathers.wind.gust}°m/s
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-400 lg:mx-0 mx-3 rounded-xl p-3 lg:p-5 mb-5">
        <div className="overflow-x-auto flex lg:gap-5 gap-3  text-center w-full ">
          {DaysInfo(Days)?.map((item, index: number) => {
            return (
              <DaysCard
                key={index}
                day={item.day}
                image={item.src}
                high={item.high}
                low={item.low}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightInfo;
