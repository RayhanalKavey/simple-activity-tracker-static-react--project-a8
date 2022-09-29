import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import my_img from "../../img/rayhan-al-kavey.png";
import "./ActivityCart.css";
const ActivityCart = ({ cart }) => {
  const [breakTime, setBreakTime] = useState(0);
  let totalExerciseTime = 0;
  for (const activity of cart) {
    totalExerciseTime = totalExerciseTime + activity.req_time;
    console.log(activity.req_time);
    console.log(totalExerciseTime);
  }
  // Break btn
  const breakBtn = (time) => {
    setBreakTime(time);
  };
  // console.log(time);
  return (
    <div className="sticky top-0">
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
            25<span className="font-[200] text-slate-400">yrs</span>
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
      <button className="btn btn-primary w-[93%] lg:w-[88%] mx-6 mb-6">
        Activity Completed
      </button>
    </div>
  );
};

export default ActivityCart;
