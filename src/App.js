
import './App.css';
import Navbar from './components/Navbar';
import * as ReactDOM from "react-dom";

import { Routes, Route, Link } from "react-router-dom";
import OP from './components/Navbar/OP';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Sidebar/>
    <Routes>
 
     <Route path="/dolla" element={<OP/>} />
    
    </Routes>
    </div>
  );
}

export default App;
