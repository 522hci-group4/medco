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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Upload" element={<Upload />} />     
        <Route path="/Tips" element={<Tips />} />
        <Route path='/Diet' element={<Diet />}/>
        <Route path="/Workouts" element={<Workouts />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/MedTerms" element={<Medterm/>} />
        <Route path="/Visualization" element={<Visualization/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
