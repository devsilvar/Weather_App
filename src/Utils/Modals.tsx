import { ThreeDots } from "react-loader-spinner";
import { useEffect, useState } from "react";
const Modals = () => {
  const [ShowButton, setShowButton] = useState(false);
  useEffect(() => {
    document.body.classList.add("visibility");
    return () => {
      document.body.classList.remove("visibility");
      document.body.classList.add("show");
    };
  }, []);
  const reload = () => {
    location.reload();
  };

  setTimeout(() => {
    setShowButton(true);
  }, 10000);

  return (
    <div className="modal-bg flex items-start z-30  h-[200%] w-5/6 lg:w-[100vw] mx-auto bg-white absolute text-center">
      <div className="z-40 mx-auto mt-[30vh] ">
        <ThreeDots
          height="220"
          width="220"
          radius="9"
          color="orange"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
        {ShowButton && (
          <>
            <p className="font-nunito pb-3 -mt-10 text-lg">
              Your network Is porbabaly Slow...
            </p>
            <button
              onClick={reload}
              className="mx-auto z-40  items-center flex bg-orange-500 text-lg text-white w-fit rounded-3xl px-3 py-2"
            >
              Reoload the Page
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modals;
