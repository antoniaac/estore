import MainComponent from "./MainComponent";
import { Route, Routes } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" Component={MainComponent}></Route>
      </Routes>
    </div>
  );
};

export default LandingPage;
