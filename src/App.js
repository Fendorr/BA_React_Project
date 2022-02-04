
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
