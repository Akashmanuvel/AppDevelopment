import React from 'react';
import '../assets/css/TransactionHistory.css';
import { Link } from 'react-router-dom';

const TransactionHistory = () => {
    const transactionHistoryData = [
        { date: '2023-01-15', description: 'Purchase 1', amount: '$100.00' },
        { date: '2023-02-20', description: 'Payment Received 1', amount: '$200.00' },
        { date: '2023-03-10', description: 'Purchase 2', amount: '$50.00' },
        { date: '2023-04-05', description: 'Payment Received 2', amount: '$150.00' },
        { date: '2023-05-18', description: 'Purchase 3', amount: '$75.00' },
        { date: '2023-06-22', description: 'Payment Received 3', amount: '$180.00' },
        { date: '2023-07-14', description: 'Purchase 4', amount: '$120.00' },
        { date: '2023-08-30', description: 'Payment Received 4', amount: '$220.00' },
        { date: '2023-09-05', description: 'Purchase 5', amount: '$90.00' },
        { date: '2023-10-12', description: 'Payment Received 5', amount: '$210.00' },
      ];

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const userEmail = localStorage.getItem('userEmail');
  const handleSearch = () => {
    console.log('Searching...');
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
  };

  return (
    <div>
      <div className="lender_cont">

        <div className="welcome_user">
          <h1>Transaction History</h1>


          <div className="transaction-history">
            <ul className="transaction-list">
              {transactionHistoryData.map((transaction, index) => (
                <li key={index} className="transaction-item">
                  <p className="transaction-date">{transaction.date}</p>
                  <p className="transaction-description">{transaction.description}</p>
                  <p className="transaction-amount">{transaction.amount}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
