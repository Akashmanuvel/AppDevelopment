import React from "react";
import { Link } from 'react-router-dom';
import '../assets/css/LoginSignup.css';
import email_icon from '../assets/images/email.png';
import password_icon from '../assets/images/password.png';

const Login = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email Id" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
                <h5 className="no_acc"><Link to="/signup">Don't have an account?</Link></h5>
            </div>
            <div className="submit-container">
                
                <div className="submit">Login</div>
            </div>
        </div>
    );
};

export default Login; 