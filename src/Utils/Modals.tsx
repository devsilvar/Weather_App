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
  }, 15000);

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
              Kindly refresh Your page if it's taking too long to load...
            </p>
            <button
              onClick={reload}
              className="mx-auto z-40  items-center flex bg-black text-lg text-orange-400 w-fit rounded-xl px-2 py-1"
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
