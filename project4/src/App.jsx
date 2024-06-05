import Cartoon from "./Component/Cartoon";
import  {cartoons}  from "./utils/data";

const App = () => {
  return (
    <div>
      <Cartoon superpower={"magnitude"} />
    </div>
  );
};

export default App;