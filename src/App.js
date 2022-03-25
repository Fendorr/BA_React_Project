import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from './components/NavBar';
import GridExample from "./pages/GridExample"
import Bindings from "./pages/Bindings"
import Forms from "./pages/Forms"

import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<GridExample />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/bindings" element={<Bindings />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
