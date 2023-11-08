import { FiSunrise, FiSunset } from "react-icons/fi";
import { WiCloudyGusts } from "react-icons/wi";
import { BsWater } from "react-icons/bs";
const IconInfo = ({ weathers }: { weathers: any }) => {
  //const { weathers } = useWeatherContext();
  //  if (!weathers) return undefined;
  let sunrise = weathers.sys.sunrise;
  let sunset = weathers.sys.sunset;

  let sunriseVal = new Date(sunrise * 1000)
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
    .toString();
  let sunsetVal = new Date(sunset * 1000)
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
    .toString();

  return (
    <section className="lg:col-span-1 md:col-span-3 col-span-3 mx-3 lg:mx-0 font-nunito">
      <div className="border border-orange-500 rounded-2xl my-5">
        <div className=" flex justify-around py-5 ">
          <div className=" w-3/6 ms-2">
            <div className=" mb-7 flex items-center gap-3">
              {" "}
              <WiCloudyGusts className="text-3xl text-orange-500" />{" "}
              <div>
                <p className="text-sm lg:text-md"> Humidity </p>
                <p className="font-bold lg:text-2xl text-xl  ">
                  {weathers.main.humidity}°
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {" "}
              <BsWater size={32} className="text-3xl text-orange-500 " />
              <div>
                <p className="text-sm lg:text-md"> Sea Level </p>
                <p className="font-bold lg:text-2xl text-xl ">
                  {weathers.main.sea_level
                    ? (weathers.main.sea_level / 1000).toFixed(1) + "km"
                    : "None"}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-3/6 w-4/6 justify-center border-l-2 border-orange-200">
            <div className="ms-5">
              <div className="mb-7 flex items-center gap-3">
                {" "}
                <FiSunrise className="text-3xl text-orange-500" />{" "}
                <div>
                  <p className="text-sm lg:text-md"> SunRise </p>
                  <p className="font-bold lg:text-xl text-lg ">{sunriseVal}</p>
                </div>
              </div>
              <div className=" flex items-center gap-3">
                {" "}
                <FiSunset className="text-3xl text-orange-500" />{" "}
                <div>
                  <p className="text-sm lg:text-md"> Sunset </p>
                  <p className="font-bold lg:text-xl text-lg ">{sunsetVal}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-orange-400 rounded-2xl text-white p-5 mt-5">
        <div className="flex justify-between mb-2">
          <p>Monthly Rainfall </p> <p>This year</p>
        </div>
        <div className="flex justify-between">
          <p>45mm</p>
          <p>+17%</p>
        </div>
      </div>
    </section>
  );
};

export default IconInfo;
