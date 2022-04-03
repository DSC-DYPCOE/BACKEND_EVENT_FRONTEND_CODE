import "./App.css";
// react-router imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components imports
import Topbar from "./components/topbar/Topbar";
import Bottombar from "./components/bottombar/Bottombar";

// pages imports
import Home from "./pages/home/Home";

// context imports

function App() {
  return (
    <div className="app">
      <Router>
        <Topbar />
        <div className="appWrapper">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Bottombar />
      </Router>
    </div>
  );
}

export default App;
