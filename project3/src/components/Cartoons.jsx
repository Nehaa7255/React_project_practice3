import {cartoons} from "../utils/data";

const Cartoon = () => {
  const filterCartoon = cartoons.filter((cartoon) => cartoon.magnitude % 2==0);
  return (
    <>   
     <div>
      <h1>Cartoon Character Names</h1>
  {filterCartoon.map((cartoon) => (
          <div key={cartoon}>
          <div>
          <h1  className="name">{cartoon.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </>

  );
};

export default Cartoon;