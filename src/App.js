import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setActivities(data));
  }, []);
  console.log(activities);
  return (
    <div>
      <h1>hi</h1>
      {/* <button className="btn btn-primary">button</button> */}
      {activities.map((activity) => (
        <div>
          {/* <p>{activity.name}</p> */}
          <p>img:</p>
          <img src={activity.img} alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;
