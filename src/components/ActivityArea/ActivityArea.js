import React, { useEffect, useState } from "react";
import myLogo from "../../my_logo.png";
import Activity from "../Activity.js/Activity";
import ActivityCart from "../ActivityCart/ActivityCart";
import Qna from "../Qna/Qna";

import "./ActivityArea.css";
const ActivityArea = () => {
  const [activities, setActivities] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  // Activity button handler

  const activityHandleBtn = (selectedActivity) => {
    let selectedActivityList;
    selectedActivityList = [...cart, selectedActivity];
    setCart(selectedActivityList);
  };
  return (
    <div className="grid lg:grid-cols-3 xl:grid-cols-4">
      {/* Left side activities section */}
      <div className="bg-[#f4ead3da] lg:col-span-2 xl:col-span-3  p-16">
        <div className="flex gap-5 items-center">
          <img className="w-14  " src={myLogo} alt="" />
          <h1 className="text-3xl py-5">Activity Tracker</h1>
        </div>
        <p className="pl-[50px] text-2xl m-5 ">Select todays activity</p>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-9  pb-6">
          {activities.map((activity) => (
            <Activity
              activity={activity}
              key={activity.id}
              activityHandleBtn={activityHandleBtn}
            ></Activity>
          ))}
        </div>
        {/* blog */}
        <div className="lg:col-span-3 xl:col-span-4 mt-20 ">
          <Qna></Qna>
        </div>
      </div>
      {/* Left side activities cart  */}
      <div className="col-span-1 sticky top-0">
        <ActivityCart cart={cart} activities={activities}></ActivityCart>
      </div>
    </div>
  );
};

export default ActivityArea;
