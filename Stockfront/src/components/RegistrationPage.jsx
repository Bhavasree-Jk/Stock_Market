import React, { useState } from 'react';
import '../style/Register.css';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../api/api.js'; // Import the correct function
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegistrationPage = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        
     
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await registerUser(user);
            toast.success("Registration Successful! Redirecting to Login...", { autoClose: 2000 });
            setTimeout(() => {
                navigate("/login");
            }, 2500);
        } catch (err) {
            toast.error("Registration failed. Please try again.");
            setError("Registration failed. Please try again.");
        }
    };

    return (
        <div className="register-bg-image"  >
            <div className="register-container">
            <ToastContainer position="top-right" autoClose={3000} />
                <div className="logo-container">
                    {/* <img src="/logo.png" alt="FinSight Logo" className="logo" /> */}
                    <span className="app-name">Stock View</span>
                </div>
                <h2 className="text-xl font-semibold mb-4">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                {/* <div className="input-group">
                        <img src="/user.png" alt="User Icon" />
                        <input type="text" name="name" placeholder="Full Name" value={user.name} onChange={handleChange} required />
                    </div> */}

                    <div className="input-group">
                        <img src="/email.png" alt="Email Icon" />
                        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
                    </div>
                    <div className="input-group">
                        <img src="/lock.png" alt="Lock Icon" />
                        <input type="password" name="password" placeholder="Password" value={user.password} onChange={handleChange} required />
                    </div>          
                    <button type="submit" className="register-btn">Register</button>
                </form>
                {error && <p className="error-text">{error}</p>}
                <p className="login-text">Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default RegistrationPage;
