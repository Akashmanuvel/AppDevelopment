import Logo from '../images/logo.png';
import '../css/Landing.css';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom';
import Start from "../gifs/rocket.gif"
import Invest from "../gifs/investment.gif"
import Repaid from "../gifs/money.gif"
import Repeat from "../gifs/repeat.gif"
import EMail from "../gifs/email.gif"
import Video from "../videos/background.mp4"
function Landing() {
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState({
    email: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleLogin = () => {
    const { email } = formData;

    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;

    if (!email) {
      toast.error('Email is required.');
    } else if (!emailRegex.test(email)) {
      toast.error('Invalid email address.');
    } 
    else {
      toast.success('Subscribed Successfully', email);
    }
  };
  return (
    <div classname="land">
      <nav className="navbar">
      <img src={Logo} alt='User' />
        <ul className='Navbar-list'>
          <button><NavLink to="/login" activeClassName="active">Login</NavLink></button>
        </ul>
      </nav>
      <div class="landing-content">
      <video autoPlay muted loop id="background-video" src={Video} type="video/mp4">
</video>
  <div class="overlay"></div>
  <div class="text-section">
    <h2>Unlocking Financial Freedom, One Loan at a Time – Embrace the Future</h2>
    <p>Start your financial journey with us.</p>
    <button><NavLink to="/signup" activeClassName="active">Get Started Today</NavLink></button>
  </div>
</div>
      <div className='Landing-steps'>
        <h1>How it Works?</h1>
        <div className="image-grid">
          <div className="image-item">
            <img src={Start} alt="Image 1" />
            <h1>Get Started</h1>
            <p>Choose a borrower who inspires you or choose a cause you support.</p>
          </div>
          <div className="image-item">
            <img src={Invest} alt="Image 2" />
            <h1>Invest</h1>
            <p>Lend manually or automatically.</p>
          </div>
          <div className="image-item">
            <img src={Repaid} alt="Image 3" />
            <h1>Get Repaid</h1>
            <p>Borrowers have a 96% repayment rate</p>
          </div>
          <div className="image-item">
            <img src={Repeat} alt="Image 4" />
            <h1>Repeat</h1>
            <p>Change more lives by relending your money over and over again.</p>
          </div>
        </div>
      </div>
  <div className='newsletter'>
  <div className="newsletter-content">
    <div className="left-content">
      <h2>Subscribe for the NewsLetter</h2>
      <h4>Sign up for the latest updates and offers</h4>
      <div className="email-form">
        <input
          type="text"
          name="email"
          placeholder='Enter Your Email'
          value={formData.email}
          onChange={handleChange}
          className="form-control"
        />
        <button type="button" onClick={handleLogin} className="button">
          Subscribe
        </button>
        <ToastContainer position="top-right"/>
      </div>
    </div>
    <div className="right-content">
      <img src={EMail} alt="Image 1" className='img-news'/>
    </div>
  </div>
</div>
<footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h3>bluefunds</h3>
            <p>&copy; {new Date().getFullYear()} bluefunds. All rights reserved.</p>
          </div>
          <div className="footer-center">
            <ul>
              <li><NavLink to="/terms">Terms and Conditions</NavLink></li>
              <li><NavLink to="/privacy">Privacy Policy</NavLink></li>
              <li><NavLink to="/help">Help</NavLink></li>
            </ul>
          </div>
          <div className="footer-right">
  <ul className="social-icons">
    <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
    <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
    <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
  </ul>
</div>
</div>
      </footer>
    </div>
  );
}

export default Landing;
