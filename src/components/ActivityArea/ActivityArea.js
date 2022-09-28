import React, { useEffect, useState } from "react";
import myLogo from "../../my_logo.png";
import "./ActivityArea.css";
const ActivityArea = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  console.log(activities);
  return (
    <div className="grid grid-cols-4">
      {/* Left side activities section */}
      <div className="bg-orange-200 col-span-3">
        <div className="flex gap-5 items-center">
          <img className="w-14  " src={myLogo} alt="" />
          <h1 className="text-3xl">Activity Tracker</h1>
        </div>
      </div>
      {/* Left side activities cart  */}
      <div className="bg-blue-200 col-span-1">activities cart</div>
    </div>
  );
};

export default ActivityArea;
