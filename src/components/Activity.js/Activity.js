import { Declaration } from "postcss";
import React from "react";
import "./Activity.css";
const Activity = ({ activity }) => {
  // console.log(activity);
  const { id, name, description, img, req_time } = activity;
  return (
    <div className="card w-full md:w-[80%] lg:w-72 bg-base-100 shadow-2xl">
      <div className="card-body p-4">
        <h2 className="card-title">{name}</h2>
        <p>
          {Declaration.length <= 20 ? description : description.slice(0, 20)}
        </p>
        <p>
          <span className=" font-bold">Required Time: </span>
          {req_time}s
        </p>
        <button className="btn btn-primary">Add to list</button>
      </div>
      <figure>
        <img className="h-62 lg:h-44 w-full" src={img} alt="activity" />
      </figure>
    </div>
  );
};

export default Activity;
