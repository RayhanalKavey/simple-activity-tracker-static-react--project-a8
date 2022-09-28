import React, { useEffect, useState } from "react";
import myLogo from "../../my_logo.png";
import Activity from "../Activity.js/Activity";
import "./ActivityArea.css";
const ActivityArea = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  // console.log(activities);
  return (
    <div className="grid grid-cols-4">
      {/* Left side activities section */}
      <div className="bg-[#f4ead3da] col-span-3  p-16">
        <div className="flex gap-5 items-center">
          <img className="w-14  " src={myLogo} alt="" />
          <h1 className="text-3xl py-5">Activity Tracker</h1>
        </div>
        <p className="pl-[50px] text-2xl m-5 ">Select todays activity</p>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center gap-9  pb-6">
          {activities.map((activity) => (
            <Activity activity={activity} key={activity.id}></Activity>
          ))}
        </div>
      </div>
      {/* Left side activities cart  */}
      <div className="bg-blue-200 col-span-1">activities cart</div>
    </div>
  );
};

export default ActivityArea;
