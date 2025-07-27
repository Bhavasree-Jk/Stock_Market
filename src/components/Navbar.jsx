import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../style/navbar.css";
import { ToastContainer, toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [dropdown, setDropdown] = useState(false);

  // Check authentication state on component mount and when localStorage changes
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing user data:", error);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    toast.success("Logged out successfully!", { autoClose: 2000 });
    setTimeout(() => navigate("/login"), 2500);
  };

  return (
    <header className="navbar">
      <div className="logo">StockView</div>

      <nav>
        <ul className="nav-links">
          <li><Link to="/catlog">Market</Link></li>
          <li><Link to="/learn">Learn</Link></li>
           <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/budget">Budget</Link></li>
          {user && (
            <>


              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/budget">Budget</Link></li>
            </>
          )}
        </ul>
      </nav>

      <div className="nav-buttons">
        {user ? (
          <div className="profile-section" onClick={() => setDropdown(!dropdown)}>
            <FaUserCircle size={28} />
            <span className="user-name">{user.name}</span>
            {dropdown && (
              <div className="profile-dropdown">
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button className="nav-btn" onClick={() => navigate("/register")}>Register</button>
            <button className="nav-btn" onClick={() => navigate("/login")}>Login</button>
          </>
        )}
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </header>
  );
};

export default Navbar;