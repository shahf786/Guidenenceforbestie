import "./App.css";
import Loginpage from "./Components/Loginpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import College from "./Components/College";
import Milk from "./Components/Milk";
import Food from "./Components/Food";
import Bestmessages from "./Components/Bestmessages";

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loginpage />} />
            <Route path="/college" element={<College />} />
            <Route path="/milk" element={<Milk />} />
            <Route path="/food" element={<Food />} />
            <Route path="/bestmessages" element={<Bestmessages />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
