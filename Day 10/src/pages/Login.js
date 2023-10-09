import React, { useState } from 'react';
import '../assets/css/Login.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { setUserName } from "../Redux/Actions/userActions"; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const user = useSelector(state => state.user); 
  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(setUserName(username));
      toast.success('Login successful!');

      navigate('/lender');
    } else {
      toast.error('Please fill in both username and password fields.');
    }

    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter your username"
            required
            autoFocus
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="button-center">
        <p>
          Don't have an account?{' '}
          <span
            className="signup-link"
            onClick={handleSignupClick}
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
          >
            Sign up
          </span>
        </p>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default Login;