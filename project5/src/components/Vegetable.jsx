import { vegetables } from "../utils/data";
import { useState } from "react";

const Vegetable = () => {
  const [show,setshow] = useState(false);
  return (
    <div>
      <h1>Green Vegetable App </h1>
      {vegetables.map((vegetables) => (
        <div
          style={{
             backgroundColor:
            show && vegetables.pickDate === "2023-03-30" ? "lightgreen" : "none",
          }}
          key={vegetables.id}>
          <h1> Name : {vegetables.name}</h1>
          <h1> PickDate : {vegetables.pickDate}</h1>
        </div>
      ))}
      <button
        onClick={() => setshow(!show)}> Highlight Fresh Vegetables
         </button>
    </div>
  );
};
export default Vegetable;