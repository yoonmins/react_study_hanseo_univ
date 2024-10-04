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
          <li><Link to="/#">2024.00.00 Task</Link></li>
          <li><Link to="/#">2024.00.00 Task</Link></li>
          <li><Link to="/#">2024.00.00 Task</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;