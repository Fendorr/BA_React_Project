
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";

import Layout from './components/Layout';
import Home from "./pages/Home"
import Spaceholder from "./pages/Spaceholder"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/spaceholder" element={<Spaceholder />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
