
import './App.css';
import Navbar from './components/Navbar';
import * as ReactDOM from "react-dom";

import { Routes, Route, Link } from "react-router-dom";
import OP from './components/Navbar/OP';
import Sidebar from './components/Sidebar';
import Home from './pages';

function App() {
  return (
    <div className="App">
   <Home/>
    <Routes>
 
     <Route path="/dolla" element={<OP/>} />
    
    </Routes>
    </div>
  );
}

export default App;
