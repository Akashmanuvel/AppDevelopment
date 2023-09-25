import React from 'react';
import Sidebar from './Sidebar';
import "../css/Dashboard.css";

const AdminDashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <header>
          <h1>Dashboard</h1>
        </header>
        <div className="dashboard-block">
          <h2>Total Loan</h2>
          <p>$1,000,000</p>
        </div>
        <div className="dashboard-block">
          <h2>Account Balance</h2>
          <p>$500,000</p>
        </div>
        <div className="dashboard-block">
          <h2>Account Status</h2>
          <p>Active</p>
        </div>
        <div className="dashboard-block">
          <h2>Pending Payment</h2>
          <p>$10,000</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
