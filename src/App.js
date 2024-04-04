import logo from "./logo.svg";
import "./App.css";
import TopNav from "./Components/TopNav";
import CatNav from "./Components/CatNav";
import MainComponent from "./Components/MainComponent";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components";

function App() {
  return (
    <div className="App">
      <TopNav />
      <CatNav />
      <Routes>
        <Route path="/" Component={LandingPage}></Route>
      </Routes>
    </div>
  );
}

export default App;
