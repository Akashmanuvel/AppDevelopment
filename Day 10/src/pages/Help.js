import React from 'react';
import '../assets/css/Help.css';

const Help = () => {
  return (
    <div className="help-page">
      <h1>Help Center</h1>
      <div className="content">
        <section className="section">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>How do I apply for a loan?</li>
            <li>What are the interest rates?</li>
            <li>How do I repay my loan?</li>
          </ul>
        </section>
        <section className="section">
          <h2>Contact Us</h2>
          <p>If you have any questions or need assistance, please don't hesitate to contact our support team:</p>
          <p>Email: support@lendingplatform.com</p>
          <p>Phone: 123-456-7890</p>
        </section>
      </div>
    </div>
  );
};

export default Help;
