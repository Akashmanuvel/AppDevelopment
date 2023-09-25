import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>BlueFunds</h1>
      <ul>
        <li>
          <Link to="/transaction">Transaction History</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
