import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Flash Funds</h1>
      <ul>
        <li>
          <Link to="/dashboard/clients">Clients</Link>
        </li>
        <li>
          <Link to="/dashboard/application">Application</Link>
        </li>
        <li>
          <Link to="/transaction">Transaction History</Link>
        </li>
        <li>
          <Link to="/dashboard/lend">Lender</Link>
        </li>
        <li>
          <Link to="/dashboard/borrow">Borrower</Link>
        </li>
        <li>
          <Link to="/dashboard/loan">Loan</Link>
        </li>
        <li>
          <Link to="/dashboard/help">Help</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
