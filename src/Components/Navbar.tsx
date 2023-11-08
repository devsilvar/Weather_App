import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaCloudBolt } from "react-icons/fa6";

const Navbar = ({ AdjustWeather }: { weathers: any; AdjustWeather: any }) => {
  const [Input, setInput] = useState<string[] | any>([""]);
  const [InputedText, setInputedText] = useState(false);
  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    //tyrn the input to an array containing both the city name and country Code
    setInput(Input.split(","));
    AdjustWeather(Input.split(","));
  }

  function CheckInputedText(e: React.FormEvent | any) {
    e.preventDefault();
    setInput(e.target.value);
    if (TextInput(Input)) {
      setInputedText(true);
    } else {
      setInputedText(false);
    }
  }

  function TextInput(location: string) {
    let check = /[a-zA-Z][,][a-zA-Z]/.test(location);
    return check;
  }
  return (
    <form
      onSubmit={submitSearch}
      className=" flex justify-between lg:w-full w-11/12 z-20 lg:mx-0 mx-auto py-5 lg:py-8 "
    >
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
            InputedText ? "border-green-400" : "border-orange-400"
          }    border-2 lg:text-base text-xs outline-none lg:w-full w-4/5 float-right rounded-lg ps-4 pe-10 py-2`}
          value={Input}
          onChange={CheckInputedText}
        />
        <button className="bg-transparent w-fit" type="submit">
          <FiSearch type="submit" className="absolute right-3 top-3" />
        </button>
        <p className="text-xs text-right pt-5">
          Use Search Format 'Alabama,US'
        </p>
      </div>
    </form>
  );
};
export default Navbar;
