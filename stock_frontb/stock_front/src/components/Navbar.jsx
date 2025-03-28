import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "../style/navbar.css";  
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        toast.success("Logged out successfully!", { autoClose: 2000 });
    
        setTimeout(() => {
            navigate("/login");
        }, 2500);
    };

    return (
        <header className="navbar">
            <div className="logo">StockView</div>
            <ToastContainer position="top-right" autoClose={3000} />
            <nav>
                <ul className="nav-links">
                    <li><a href="#Dashboard">Dashboard</a></li>
                    <li><a href="#Market">Market</a></li>
                    <li><Link to="/budget">Budget</Link></li>

                    {isLoggedIn && ( 
                        <li><Link to="/portfolio">Portfolio</Link></li>
                    )}
                    <li><Link to="/learn">Learn</Link></li> {/* ✅ Fixed Link */}
                </ul>
            </nav>

            <div className="nav-buttons">
                {isLoggedIn ? (
                    <button className="nav-btn logout" onClick={handleLogout}>Logout</button>
                ) : (
                    <>
                        <button className="nav-btn" onClick={() => navigate("/register")}>Register</button>
                        <button className="nav-btn" onClick={() => navigate("/login")}>Login</button>
                    </>
                )}
            </div>
        </header>
    );
};

export default Navbar;
