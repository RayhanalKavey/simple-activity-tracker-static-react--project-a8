import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import my_img from "../../img/rayhan-al-kavey.png";
import "./ActivityCart.css";
const ActivityCart = () => {
  return (
    <div>
      <div className="flex gap-5 items-center m-6">
        <img className="w-16" src={my_img} alt="" />
        <div>
          <h1>Rayhan Al Kavey</h1>
          <p className="font-[200] text-slate-400">
            <FontAwesomeIcon icon={faLocation} /> South Keraniganj, Dhaka
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCart;
