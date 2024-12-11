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
import Study1112 from './pages/Study1112';
import Study1119 from './pages/Study1119';
import LocalStoragePage from './pages/LocalStoragePage';
import SessionStoragePage from './pages/SessionStoragePage';
import CookiePage from './pages/CookiePage';
import UserPage from './pages/UserPage';
import './App.css';
import Study1126 from './pages/Study1126';
import Task1126 from './pages/Task1126';
import FinalTermTest from './pages/FinalTermTest';

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
              <Route path="/user/:id" element={<UserPage />} />
              <Route path="/Study1112" element={<Study1112 />} />
              <Route path="/Study1119" element={<Study1119 />} />
              <Route path="/Study1126" element={<Study1126 />} />
              <Route path="/Task1126" element={<Task1126 />} />
              <Route path="/local" element={<LocalStoragePage />} />
              <Route path="/session" element={<SessionStoragePage />} />
              <Route path="/cookie" element={<CookiePage />} />
              <Route path="/FinalTermTest" element={<FinalTermTest />} />
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
