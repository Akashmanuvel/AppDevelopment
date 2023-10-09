import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../assets/css/Signup.css';
import user_icon from '../assets/images/person.png';
import email_icon from '../assets/images/email.png';
import password_icon from '../assets/images/password.png';

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ""
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (formData.name.trim() === "") {
            validationErrors.name = "Name is required";
        }

        if (formData.email.trim() === "") {
            validationErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            validationErrors.email = "Invalid email format";
        }

        if (formData.password.trim() === "") {
            validationErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            validationErrors.password = "Password must be at least 6 characters long";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Form data is valid:", formData);
        }
    };

    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        autoFocus
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && <div className="error">{errors.name}</div>}
                </div>
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Id"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="error">{errors.email}</div>}
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <div className="error">{errors.password}</div>}
                </div>
            </div>
            <div className="submit-container">
                <button onClick={handleSubmit}><Link to="/login">Sign Up</Link></button>
                <Link to="/login">Already have an account? Login</Link>
            </div>
        </div>
    );
};

export default Signup;
