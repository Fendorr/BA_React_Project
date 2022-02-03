
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";

import Home from "./pages/Home"
import Spaceholder from "./pages/Spaceholder"

function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/spaceholder" element={<Spaceholder />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
