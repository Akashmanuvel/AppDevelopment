import React from 'react';
import "../css/About.css"

function AboutUs() {
  return (
    <div className="about-us-container">
      <header className="page-header">
        <h1>About Us</h1>
      </header>

      <div className="content">
        <p>
          Welcome to Flash Funds, your trusted online lending platform.
          We are dedicated to providing financial solutions that meet your needs.
        </p>

        <p>
          Our mission is to make lending simple, secure, and accessible to
          everyone. Whether you need a personal loan, business financing,
          or investment opportunities, we've got you covered.
        </p>

        <p>
          At Flash Funds, we prioritize transparency, customer
          satisfaction, and responsible lending practices. Our team of
          experts is committed to helping you achieve your financial goals.
          If you are new to FlashFunds, you can start by creating an account and exploring
          the available features on our platform.
        </p>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img
            src={require('../images/iconic.jpg')}
            alt="Team Member 1"
          />
          <h3>Sample</h3>
          <p>CEO & Co-Founder</p>
        </div>
        <div className="team-member">
          <img
            src={require('../images/iconic.jpg')}
            alt="Team Member 2"
          />
          <h3>Sample</h3>
          <p>COO & Co-Founder</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
