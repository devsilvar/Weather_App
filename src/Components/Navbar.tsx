import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaCloudBolt } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const Navbar = ({ AdjustWeather }: { weathers: any; AdjustWeather: any }) => {
  const [Input, setInput] = useState<string[] | any>([""]);
  const [checkInput, setcheckInput] = useState(false);
  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    //tyrn the input to an array containing both the city name and country Code
    setInput(Input.split(","));
    AdjustWeather(Input.split(","));

    if (TextInput(Input) != true) {
      return toast.error(
        "For Better Results - Type:\n  'Alabama,US' or 'Moscow,RU'",
        {
          duration: 5000,
        }
      );
    }
  }

  function TextInput(location: string) {
    let check = /[a-zA-Z][,][a-zA-Z]/.test(location);
    return check;
  }
  function checkbox() {
    if (TextInput(Input) && TextInput(Input) != undefined) {
      return true;
    } else if (TextInput(Input) == false && TextInput(Input) != undefined) {
      return false;
    }
  }

  //  console.log(weathers);
  return (
    <form
      onSubmit={submitSearch}
      className=" flex justify-between lg:w-full w-11/12 z-20 lg:mx-0 mx-auto py-5 lg:py-8 "
    >
      <Toaster />
      <div className="text-orange-400 font-bold text-2xl">
        <div className="flex gap-3">
          <FaCloudBolt className="h-auto text-orange-400" />
          <h3 className="font-nunito"> Weather </h3>
        </div>
      </div>

      <div className="relative  inline-block">
        <input
          type="text"
          placeholder="'City name, Country Code'"
          className={` ${
            checkbox() && "border-green-400"
          }   border-orange-400  border-2 lg:text-base text-xs outline-none lg:w-full w-4/5 float-right rounded-lg ps-4 pe-10 py-2`}
          value={Input}
          onFocus={checkbox}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-transparent w-fit" type="submit">
          <FiSearch type="submit" className="absolute right-3 top-3" />
        </button>
        <p className="text-xs text-right pt-5"> E.g. 'Alabama,US'</p>
      </div>
    </form>
  );
};
export default Navbar;
