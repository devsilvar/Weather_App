import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import IconInfo from "./Components/IconInfo";
import RightInfo from "./Components/RightInfo";
import { useWeatherContext } from "./Utils";
import Modals from "./Utils/Modals";
import { Toaster } from "react-hot-toast";
function App() {
  //get the Days, weather values form the Context API after loading from the rest API :weatheropn.com
  const { Days, weathers, AdjustWeather } = useWeatherContext();

  //if weathers or days are not abvailble or still fetching show the modal
  if (!weathers || !Days) {
    return (
      <div>
        <Modals />
      </div>
    );
  }
  //the {Days, weather, and Adjust weather} values from thecontext APi are being passed into each componenets as required below
  return (
    <>
      <section className="lg:w-4/5 w-full mx-auto">
        <Toaster position="top-center" />
        <Navbar weathers={weathers} AdjustWeather={AdjustWeather} />
        <Hero Days={Days} weathers={weathers} />
        <div className=" grid grid-cols-3 gap-5 ">
          <IconInfo weathers={weathers} />
          <RightInfo Days={Days} weathers={weathers} />
        </div>
      </section>
    </>
  );
}
export default App;
