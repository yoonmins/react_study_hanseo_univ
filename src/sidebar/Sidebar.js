import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? 'sidebar open' : 'sidebar'}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      <nav className='sidebarMenuList'>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/Task0924">2024.09.24 Task</Link></li>
          <li><Link to="/Study1008" className='study-text'>2024.10.08 Study</Link></li>
          <li><Link to="/Task1008">2024.10.08 Task</Link></li>
          <li><Link to="/Study1015" className='study-text'>2024.10.15 Study</Link></li>
          <li><Link to="/MiddleTermTest" className='study-text'>2024 MiddleTermTest</Link></li>
          <li><Link to="/#">2024.00.00 Task</Link></li>
          <li><Link to="/Study1105" className='study-text'>2024.11.05 Study</Link></li>
          <li><Link to="/Study1112" className='study-text'>2024.11.12 Study</Link></li>
          <li><Link to="/user/1" className='study-text'>Check to User</Link></li>
          <li><Link to="/#">2024.00.00 Task</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;