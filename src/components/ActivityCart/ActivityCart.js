import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import my_img from "../../img/rayhan-al-kavey.png";
import "./ActivityCart.css";
import {
  addToLocalStorage,
  getLocalStorageValue,
} from "../../utilities/fakeBd";
//toast impost
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ActivityCart = ({ cart, activities }) => {
  const notify = () =>
    toast("Congratulations! You are done with your activity.", {
      position: toast.POSITION.TOP_CENTER,
    });
  const [breakTime, setBreakTime] = useState(0);
  ///get from local storage
  useEffect(() => {
    const getLastValue = JSON.parse(getLocalStorageValue());
    if (getLastValue) {
      setBreakTime(getLastValue);
    }
  }, [activities]);
  let totalExerciseTime = 0;
  for (const activity of cart) {
    totalExerciseTime = totalExerciseTime + activity.req_time;
  }
  // Break btn
  const breakBtn = (time) => {
    setBreakTime(time);
    addToLocalStorage(time);
  };

  return (
    <div className="sticky top-0 pt-2 mb-6">
      <div className="flex gap-5 items-center m-6">
        <img className="w-16" src={my_img} alt="" />
        <div>
          <h1>Rayhan Al Kavey</h1>
          <p className="font-[200] text-slate-400">
            <FontAwesomeIcon icon={faLocationDot} /> South Keraniganj, Dhaka
          </p>
        </div>
      </div>
      <div className="flex items-center gap-9 justify-center bg-[#f4ead3da] m-6 py-2 rounded-lg	text-center">
        <div>
          <div>
            75<span className="font-[200] text-slate-400">kg</span>
          </div>
          <div>Weight</div>
        </div>

        <div>
          <div>
            167<span className="font-[200] text-slate-400">cm</span>
          </div>
          <div>Height</div>
        </div>
        <div>
          <div>
            30<span className="font-[200] text-slate-400">yrs</span>
          </div>
          <div>Age</div>
        </div>
      </div>
      <div className="ml-7 mt-[50px]">Add Breaks in Activity</div>
      <div className="add-break flex items-center gap-6 justify-center bg-[#f4ead3da] m-6 py-4 rounded-lg	text-center ">
        <button onClick={() => breakBtn(10)}>10s</button>
        <button onClick={() => breakBtn(20)}>20s</button>
        <button onClick={() => breakBtn(30)}>30s</button>
        <button onClick={() => breakBtn(40)}>40s</button>
        <button onClick={() => breakBtn(50)}>50s</button>
      </div>
      <div className="ml-7 mt-[70px]">Activity Details</div>
      <div className="add-break flex items-center gap-6 justify-between bg-[#f4ead3da] m-6 p-4 rounded-lg	text-center">
        <div>Exercise Time: </div>
        <div className=" text-slate-400">{totalExerciseTime}s</div>
      </div>
      <div className="add-break flex items-center gap-6 justify-between bg-[#f4ead3da] m-6 p-4 rounded-lg	text-center">
        <div>Break Time:</div>
        <div className=" text-slate-400">{breakTime}s</div>
      </div>
      <div className=" mx-6 ">
        {" "}
        <button onClick={notify} className="btn btn-primary w-full ">
          Activity Completed
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ActivityCart;
