import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../assets/css/Lender.css';
import { Link } from 'react-router-dom';

function Lender() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="Lender-Container">
      <div className="Lender-Navbar">
        <div className="logo_site">
          <img src={require('../assets/images/logo_3.png')} alt="Your Logo" />
        </div>

        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>
        </div>

        <ul className='lenders-Navbar-list'>
          <li><NavLink exact to="/about" activeClassName="active"><Link to="/about">About</Link></NavLink></li>
          <li><NavLink exact to="/services" activeClassName="active"><Link to="/dashboard">Dashboard</Link></NavLink></li>
          <li><NavLink exact to="/contact" activeClassName="active"><Link to="/signup">Logout</Link></NavLink></li>
        </ul>
      </div>
      <div className="message">
        <p>Welcome Back, {username}!</p>
      </div>

      <div className="image-container">
        <img src={require('../assets/images/iconic.jpg')} alt="Image 1" />
      </div>

     
      <p>This is a sample message below the images.</p>
    </div>
  )
}

export default Lender;
