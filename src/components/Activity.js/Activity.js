import React from "react";
import { Declaration } from "postcss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Activity.css";
const Activity = ({ activity, activityHandleBtn }) => {
  const { name, description, img, req_time } = activity;
  return (
    <div className="card w-full md:w-[80%] xl:w-72 bg-base-100 shadow-2xl">
      <div className="card-body p-4">
        <h2 className="card-title">{name}</h2>
        <p>
          {Declaration.length <= 20 ? description : description.slice(0, 20)}
        </p>
        <p>
          <span className=" font-bold">Required Time: </span>
          {req_time}s
        </p>
        <button
          onClick={() => activityHandleBtn(activity)}
          className="btn btn-primary"
        >
          Add to list <FontAwesomeIcon className="ml-3" icon={faShoppingCart} />
        </button>
      </div>
      <figure>
        <img className="h-62 lg:h-44 w-full" src={img} alt="activity" />
      </figure>
    </div>
  );
};

export default Activity;
