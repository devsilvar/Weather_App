import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { FaCloudBolt } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";

const Navbar = ({
  weathers,
  AdjustWeather,
}: {
  weathers: any;
  AdjustWeather: any;
}) => {
  const [Input, setInput] = useState<string[] | any>([""]);
  function submitSearch(e: React.FormEvent) {
    e.preventDefault();
    //tyrn the input to an array containing both the city name and country Code
    setInput(Input.split(","));
    AdjustWeather(Input.split(","));
    if (TextInput(Input) != true) {
      return toast(
        "For Better Results Type in the City with the Country Code like this = 'Alabama,US' or 'Moscos,RU' ",
        {
          duration: 8000,
        }
      );
    }

    console.log(Input);
  }
  

  function TextInput(location: string) {
    let check = /[a-zA-Z][,][a-zA-Z]/.test(location);
    return check;
  }

  // if (!regex) return <Toaster />;

  console.log(weathers);
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
          placeholder="Type 'City name, Country Name'"
          className="border-orange-400 outline-none lg:w-full w-5/5 float-right rounded-lg border  px-3 py-2"
          value={Input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="bg-transparent w-fit" type="submit">
          <FiSearch type="submit" className="absolute right-3 top-3" />
        </button>
      </div>
    </form>
  );
};
export default Navbar;
