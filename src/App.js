
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import NavBar from './components/NavBar';
import Home from "./pages/Home"
import Spaceholder from "./pages/Spaceholder"

import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path="/spaceholder" element={<Spaceholder />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
