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
    <div className="modal-bg flex justify-center z-30 h-[200%] w-5/6 lg:w-[100%] mx-auto bg-white absolute text-center">
      <div className="z-40 mt-[25vh]  ">
        <ThreeDots
          height="220"
          width="220"
          radius="9"
          color="orange"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass="flex justify-center w-4/5 mx-auto"
          visible={true}
        />
        {ShowButton && (
          <>
            <p className="font-nunito pb-3 -mt-10 text-center text-lg">
              Kindly refresh if it's taking too long to load...
            </p>
            <button
              onClick={reload}
              className="mx-auto z-40  items-center flex bg-black text-lg text-orange-400 w-fit rounded-3xl px-4 py-2"
            >
              Reload the Page
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modals;
