import LeftLayout from "./Components/LeftLayout/LeftLayout";
import RightLayout from "./Components/RightLayout/RightLayout";

function App() {
  return (
    <>
      <div className="flex flex-row">
        <LeftLayout />
        <RightLayout />
      </div>
    </>
  );
}

export default App;
