import React from 'react';
import '../assets/css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <p>&copy; {new Date().getFullYear()} FlashFunds Inc.</p>
      </div>
      <div className='footer_contents'>
        <p>Terms and Conditions</p>
        <br/>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;