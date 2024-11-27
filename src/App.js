import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Tips from "./pages/Tips";
import Workouts from "./pages/Workouts";
import Diet from "./pages/Diet";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Tips" element={<Tips />} />
        <Route path='/Diet' element={<Diet />}/>
        <Route path="/Workouts" element={<Workouts />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
