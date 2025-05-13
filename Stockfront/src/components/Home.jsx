import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Home.css';
import Navbar from './Navbar';
import DematAccount from './DematAccount';

// Stock statistics data (mockup)
const stockData = [
    { name: "AAPL", change: "+1.45%" },
    { name: "TSLA", price: "$235.78", change: "-0.75%" },
    { name: "GOOGL", price: "$134.89", change: "+2.10%" },
];

const Home = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem("token");


    return (
        <div className="home-container" 
            style={{
                backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/024/813/388/original/stock-market-graph-wallpaper-for-investment-business-concept-successful-financial-graphic-on-blue-background-trading-digital-graphs-in-futuristic-technology-style-vector.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
                minHeight: "100vh",
                color: "#fff",
            }}
        >
            {/* Gradient Overlay */}
            <div className="overlay"></div>
            
            <Navbar />

            <main className="hero">
                <div className="hero-content">
                    <h1>Master the Stock Market with <span className="highlight">StockView</span></h1>
                    <p>Track trends, analyze stocks, and make smarter investments.</p>
                    <button className="cta-btn" onClick={() => navigate("/demataccount")}>
                        Explore Stocks
                    </button>
                </div>
            </main>

            {/* Stock Statistics Section */}
            <section className="stock-section">
                <h2>Trending Stocks</h2>
                <div className="stock-container">
                    {stockData.map((stock, index) => (
                        <div key={index} className="stock-card">
                            <h3>{stock.name}</h3>
                            <p>{stock.price}</p>
                            <span className={stock.change.includes("-") ? "negative" : "positive"}>
                                {stock.change}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="footer">
                <p>&copy; 2025 StockView. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
