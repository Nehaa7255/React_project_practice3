import {cartoons} from "../utils/data"
const Cartoons = ({ cartoons }) => {
    const Cartoon = cartoons.filter(
        (cartoon) => cartoon.magnitude % 2 == 0
      );
  return (
    <>
    <div>
    <h1>Cartoons Names</h1>
    {Cartoon.map((cartoon) => (
        <h1 key={cartoon.id}>{cartoon.name}</h1>
    ))}
    
    </div>
    </>
  )
}

export default Cartoons