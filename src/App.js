import './App.css';
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Tips from "./pages/Tips";
import Workouts from "./pages/Workouts";
import Diet from "./pages/Diet";
import AboutUs from "./pages/About";
import Upload from "./pages/upload";
import Visualization from "./pages/Visualization";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Medterm from './pages/medterm';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><Navbar2 /><Home /></>} />
          <Route path="/SignIn" element={<><Navbar2 /><SignIn /></>} />
          <Route path="/Register" element={<><Navbar2 /><Register /></>} />
          <Route path="/Upload" element={<><Navbar2 /><Upload /></>} />
          <Route path="/Tips" element={<><Navbar /><Tips /></>} />
          <Route path="/Diet" element={<><Navbar /><Diet /></>} />
          <Route path="/Workouts" element={<><Navbar /><Workouts /></>} />
          <Route path="/about" element={<><Navbar2 /><AboutUs /></>} />
          <Route path="/MedTerms" element={<><Navbar /><Medterm /></>} />
          <Route path="/Visualization" element={<><Navbar /><Visualization /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
