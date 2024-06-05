import { cartoons } from "../utils/data";

/** Use the cartoons data from above question (2) and build a React component that takes the superpower ”Intelligence”, as prop and display the details of the character having that superpower. Show details on DOM in the format “name - superpower - magnitude”. */
const Cartoon = ({ superpower }) => {
  const filteredCartoons = cartoons.filter(
    (cartoon) => cartoon.superpower === superpower
  );
  return (
    <div>
      <h1>Cartoon CHaracter App</h1>
      {filteredCartoons.length > 0 ? (
        filteredCartoons.map((cartoon) => (
          <p
            key={cartoon.id}
          >{`${cartoon.name} - ${cartoon.superpower} - ${cartoon.magnitude}`}</p>
        ))
      ) : (
        <p>No character found with the superpower {"superpower"}.</p>
      )}
    </div>
  );
};

export default Cartoon;
