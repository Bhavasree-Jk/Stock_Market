import React, { useState } from 'react';
import '../style/Login.css';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../api/api.js'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await loginUser({ email, password });
            localStorage.setItem('token', response.token);
            toast.success("Login Successful! Redirecting to Dashboard...", { autoClose: 2000 });

            setTimeout(() => {
                navigate("/");
            }, 2500);
        } catch (err) {
            toast.error("Invalid credentials, please try again.");
            setError("Invalid credentials, please try again.");
        }
    };

    return (
        <div className="login-bg-image" >
            <div className="login-container">
                <div className="logo-container">
                <ToastContainer position="top-right" autoClose={3000} />

                    {/* <img src="logo.png" alt="FinSight Logo" className="logo" /> */}
                    <span className="app-name">StockView</span>
                </div>
                <h2 className="text-xl font-semibold mb-4">Sign In</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <img src="/email.png" alt="Email Icon" />
                        <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="input-group">
                        <img src="/lock.png" alt="Lock Icon" />
                        <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
                {error && <p className="error-text">{error}</p>}
                <p className="register-text">Don’t have an account? <a href="/register">Register</a></p>
            </div>
        </div>
    );
};

export default LoginPage;
