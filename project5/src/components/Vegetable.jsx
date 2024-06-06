import { vegetables } from "../utils/data";
import { useState } from "react";

const Vegetable = () => {
  const [show,setshow] = useState(false);
  return (
    <div>
      <h1>Green Vegitable App </h1>
      {vegetables.map((veget) => (
        <div
          style={{
             backgroundColor:
            show && veget.pickDate === "2023-03-30" ? "lightgreen" : "none",
          }}
          key={veget.id}>
          <h1> Name : {veget.name}</h1>
          <h1> PickDate : {veget.pickDate}</h1>
        </div>
      ))}
      <button
        onClick={() => setshow(!show)}> Highlight Fresh Vegetables
         </button>
    </div>
  );
};
export default Vegetable;