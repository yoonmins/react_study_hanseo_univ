import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import axios from 'axios'
import Sidebar from './sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import Task0924 from './pages/Task0924';
import Study1008 from './pages/Study1008';
import Task1008 from './pages/Task1008';
import Study1015 from './pages/Study1015';
import MiddleTermTest from './pages/MiddleTermTest';
import Study1105 from './pages/Study1105';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/Task0924" element={<Task0924 />} />
              <Route path="/Study1008" element={<Study1008 />} />
              <Route path="/Task1008" element={<Task1008 />} />
              <Route path="/Study1015" element={<Study1015 />} />
              <Route path="/MiddleTermTest" element={<MiddleTermTest />} />
              <Route path="/Study1105" element={<Study1105 />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
