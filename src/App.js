import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Dashboard from './pages/Dashboard';
import Task0924 from './pages/Task0924';
import Study1008 from './pages/Study1008';
import Task1008 from './pages/Task1008';
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
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
