const DaysCard = ({
  image,
  high,
  low,
  day,
}: {
  image: any;
  high: string;
  low: string;
  day: string;
}) => {
  return (
    <div className="bg-white rounded-2xl  py-4 group transition">
      <div className="w-[119px]  group-hover:scale-110 transition duration-300 ">
        <img src={image} alt="Clouds" className="w-[50%] mx-auto mb-2" />

        <p className="font-bold text-xl"> {day}</p>

        <p>
          High: <span>{high}</span>{" "}
        </p>
        <p>
          Low: <span>{low}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export default DaysCard;
