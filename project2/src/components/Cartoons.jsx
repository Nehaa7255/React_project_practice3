import {cartoons} from "../utils/data";
import "./Cartoon.css";
const Cartoon = () => {
  const filterCartoon = cartoons.filter((cartton) => cartton.magnitude >= 5);
  return (
    <>   
     <div>
      <h1>Cartoon Character</h1>
  {filterCartoon.map((cartoon) => (
          <div key={cartoon}>
          <div>
          <h2  className="name">{cartoon.name}</h2>
          <p>id: {cartoon.id}</p>
            <p>Superpower: {cartoon.superpower}</p>
            <p>Magnitude: {cartoon.magnitude}</p>
            </div>
          </div>
        ))}
      </div>
    </>

  );
};

export default Cartoon;