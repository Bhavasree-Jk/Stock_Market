import React from "react";
import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid,
    BarChart, Bar, PieChart, Pie, Cell, Treemap, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from "recharts";
import Navbar from "./Navbar";
import "../style/Theme.css";
import "../style/Dashboard.css"

const Dashboard = () => {
    const portfolio = [
        { symbol: "AAPL", quantity: 10, buyPrice: 170, livePrice: 175.2, sector: "Technology" },
        { symbol: "MSFT", quantity: 5, buyPrice: 300, livePrice: 315.4, sector: "Technology" },
        { symbol: "TSLA", quantity: 8, buyPrice: 215, livePrice: 230.5, sector: "Automotive" },
        { symbol: "GOOGL", quantity: 3, buyPrice: 2820, livePrice: 2750.8, sector: "Technology" },
        { symbol: "AMZN", quantity: 4, buyPrice: 3400, livePrice: 3550.2, sector: "Retail" },
        { symbol: "JPM", quantity: 6, buyPrice: 150, livePrice: 145.3, sector: "Finance" },
        { symbol: "WMT", quantity: 12, buyPrice: 140, livePrice: 148.7, sector: "Retail" },
        { symbol: "PG", quantity: 7, buyPrice: 135, livePrice: 142.1, sector: "Consumer Goods" },
        { symbol: "XOM", quantity: 9, buyPrice: 80, livePrice: 85.4, sector: "Energy" },
        { symbol: "V", quantity: 5, buyPrice: 220, livePrice: 235.6, sector: "Finance" },
    ];
    const totalInvestment = portfolio.reduce((sum, stock) => sum + stock.quantity * stock.buyPrice, 0);
    const totalValue = portfolio.reduce((sum, stock) => sum + stock.quantity * stock.livePrice, 0);
    const gainLoss = totalValue - totalInvestment;
    const gainLossPercentage = (gainLoss / totalInvestment) * 100;
    
    const stockHistory = [
        { date: "Mar 18", AAPL: 172, MSFT: 302, TSLA: 215, GOOGL: 2820, AMZN: 3405, JPM: 152, WMT: 138, PG: 133, XOM: 79, V: 218 },
        { date: "Mar 19", AAPL: 173, MSFT: 305, TSLA: 220, GOOGL: 2815, AMZN: 3420, JPM: 151, WMT: 140, PG: 134, XOM: 80, V: 220 },
        { date: "Mar 20", AAPL: 171, MSFT: 308, TSLA: 225, GOOGL: 2800, AMZN: 3435, JPM: 149, WMT: 142, PG: 135, XOM: 81, V: 222 },
        { date: "Mar 21", AAPL: 174, MSFT: 310, TSLA: 228, GOOGL: 2790, AMZN: 3450, JPM: 148, WMT: 143, PG: 136, XOM: 82, V: 225 },
        { date: "Mar 22", AAPL: 175, MSFT: 312, TSLA: 230, GOOGL: 2780, AMZN: 3470, JPM: 146, WMT: 145, PG: 138, XOM: 83, V: 228 },
        { date: "Mar 23", AAPL: 176, MSFT: 315, TSLA: 232, GOOGL: 2765, AMZN: 3480, JPM: 145, WMT: 147, PG: 140, XOM: 84, V: 232 },
        { date: "Mar 24", AAPL: 175, MSFT: 316, TSLA: 231, GOOGL: 2755, AMZN: 3500, JPM: 144, WMT: 148, PG: 141, XOM: 85, V: 235 },
    ];

    const sectorBreakdown = [
        { name: "Technology", value: 60 },
        { name: "Automotive", value: 15 },
        { name: "Retail", value: 12 },
        { name: "Finance", value: 8 },
        { name: "Consumer Goods", value: 3 },
        { name: "Energy", value: 2 },
    ];

    const performanceData = portfolio.map(stock => ({
        name: stock.symbol,
        gainLoss: (stock.livePrice - stock.buyPrice) * stock.quantity,
        gainLossPercent: ((stock.livePrice - stock.buyPrice) / stock.buyPrice) * 100
    }));

    const treemapData = [
        { name: "Technology", value: 12000, color: '#0088FE' },
        { name: "Automotive", value: 3000, color: '#00C49F' },
        { name: "Retail", value: 2400, color: '#FFBB28' },
        { name: "Finance", value: 1600, color: '#FF8042' },
        { name: "Consumer Goods", value: 600, color: '#8884d8' },
        { name: "Energy", value: 400, color: '#82ca9d' },
    ];

    const riskData = [
        { subject: 'Volatility', A: 75, B: 65, fullMark: 100 },
        { subject: 'Liquidity', A: 85, B: 90, fullMark: 100 },
        { subject: 'Diversification', A: 65, B: 55, fullMark: 100 },
        { subject: 'Market Risk', A: 70, B: 60, fullMark: 100 },
        { subject: 'Sector Risk', A: 60, B: 70, fullMark: 100 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

    return (
        <div className="dashboard-page">
            <Navbar />
            <div className="container">
                <div className="dashboard-header">
                    <h1 className="page-title">Investment Dashboard</h1>
                    <div className="last-updated">
                        <span className="update-indicator"></span>
                        Last updated: {new Date().toLocaleTimeString()}
                    </div>
                </div>

                <div className="dashboard-metrics">
                    <div className="card metric-card">
                        <h3>Total Value</h3>
                        <p className="metric-value">${totalValue.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                        <div className="metric-trend positive">
                            <i className="fas fa-arrow-up"></i> 5.2% (1D)
                        </div>
                    </div>
                    <div className="card metric-card">
                        <h3>Total Investment</h3>
                        <p className="metric-value">${totalInvestment.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                    </div>
                    <div className="card metric-card">
                        <h3>Gain/Loss</h3>
                        <p className="metric-value" style={{ color: gainLoss >= 0 ? 'var(--success)' : 'var(--error)' }}>
                            ${gainLoss.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
                        </p>
                        <div className="metric-trend" style={{ color: gainLossPercentage >= 0 ? 'var(--success)' : 'var(--error)' }}>
                            {gainLossPercentage >= 0 ? '+' : ''}{gainLossPercentage.toFixed(2)}%
                        </div>
                    </div>
                </div>

                <div className="dashboard-grid">
                    <div className="card portfolio-card">
                        <div className="card-header">
                            <h2>Portfolio Holdings</h2>
                            <div className="card-actions">
                                <button className="btn btn-sm btn-outline">Export</button>
                            </div>
                        </div>
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Stock</th>
                                        <th>Quantity</th>
                                        <th>Buy Price</th>
                                        <th>Live Price</th>
                                        <th>Value</th>
                                        <th>Change</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {portfolio.map((stock, index) => {
                                        const change = stock.livePrice - stock.buyPrice;
                                        const changePercent = (change / stock.buyPrice) * 100;
                                        const value = stock.quantity * stock.livePrice;
                                        
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <div className="stock-info">
                                                        <span className="stock-symbol">{stock.symbol}</span>
                                                        <span className="stock-sector">{stock.sector}</span>
                                                    </div>
                                                </td>
                                                <td>{stock.quantity}</td>
                                                <td>${stock.buyPrice.toFixed(2)}</td>
                                                <td>${stock.livePrice.toFixed(2)}</td>
                                                <td>${value.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                                                <td style={{ color: change >= 0 ? 'var(--success)' : 'var(--error)' }}>
                                                    <div className="change-container">
                                                        <span>${change.toFixed(2)}</span>
                                                        <span>({changePercent >= 0 ? '+' : ''}{changePercent.toFixed(2)}%)</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="card chart-card">
                        <div className="card-header">
                            <h2>Stock Price Trends</h2>
                            <div className="chart-legend">
                                <span className="legend-item"><span className="legend-color" style={{backgroundColor: '#8884d8'}}></span>AAPL</span>
                                <span className="legend-item"><span className="legend-color" style={{backgroundColor: '#82ca9d'}}></span>MSFT</span>
                                <span className="legend-item"><span className="legend-color" style={{backgroundColor: '#ffc658'}}></span>TSLA</span>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={stockHistory}>
                                <XAxis dataKey="date" />
                                <YAxis />
                                <Tooltip 
                                    formatter={(value) => [`$${value}`, 'Price']}
                                    labelFormatter={(label) => `Date: ${label}`}
                                />
                                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                                <Line type="monotone" dataKey="AAPL" stroke="#8884d8" strokeWidth={2} dot={false} />
                                <Line type="monotone" dataKey="MSFT" stroke="#82ca9d" strokeWidth={2} dot={false} />
                                <Line type="monotone" dataKey="TSLA" stroke="#ffc658" strokeWidth={2} dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="card chart-card">
                        <div className="card-header">
                            <h2>Sector Allocation</h2>
                        </div>
                        <div className="chart-container">
                            <ResponsiveContainer width="50%" height={250}>
                                <PieChart>
                                    <Pie 
                                        data={sectorBreakdown} 
                                        dataKey="value" 
                                        nameKey="name" 
                                        cx="50%" 
                                        cy="50%" 
                                        outerRadius={80} 
                                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                                    >
                                        {sectorBreakdown.map((entry, index) => (
                                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value) => [`$${(value * totalValue / 100).toLocaleString('en-US')}`, 'Value']} />
                                </PieChart>
                            </ResponsiveContainer>
                            <div className="sector-details">
                                {sectorBreakdown.map((sector, index) => (
                                    <div key={index} className="sector-item">
                                        <span className="sector-color" style={{backgroundColor: COLORS[index % COLORS.length]}}></span>
                                        <span className="sector-name">{sector.name}</span>
                                        <span className="sector-value">${(sector.value * totalValue / 100).toLocaleString('en-US')}</span>
                                        <span className="sector-percent">{sector.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="card chart-card">
                        <div className="card-header">
                            <h2>Performance Analysis</h2>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={performanceData.sort((a, b) => b.gainLoss - a.gainLoss)}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip 
                                    formatter={(value) => [`$${value.toLocaleString('en-US')}`, 'Profit/Loss']}
                                    labelFormatter={(label) => `Stock: ${label}`}
                                />
                                <Bar 
                                    dataKey="gainLoss" 
                                    name="Profit/Loss" 
                                    fill="#8884d8" 
                                    radius={[4, 4, 0, 0]}
                                    label={{ position: 'top', formatter: (value) => `$${value.toLocaleString('en-US')}` }}
                                >
                                    {performanceData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.gainLoss >= 0 ? '#4CAF50' : '#F44336'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="card chart-card">
                        <div className="card-header">
                            <h2>Portfolio Breakdown</h2>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <Treemap 
                                data={treemapData} 
                                dataKey="value" 
                                nameKey="name" 
                                stroke="#fff" 
                                aspectRatio={4/3}
                                content={<CustomizedContent colors={COLORS} />}
                            />
                        </ResponsiveContainer>
                    </div>

                    <div className="card chart-card">
                        <div className="card-header">
                            <h2>Risk Analysis</h2>
                        </div>
                        <ResponsiveContainer width="100%" height={300}>
                            <RadarChart outerRadius="80%" data={riskData}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                                <Radar name="Your Portfolio" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                                <Radar name="Market Average" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
                                <Legend />
                                <Tooltip />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CustomizedContent = ({ root, depth, x, y, width, height, index, colors, name, value }) => {
    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: colors[index % colors.length],
                    stroke: '#fff',
                    strokeWidth: 2 / (depth + 1e-10),
                    strokeOpacity: 1 / (depth + 1e-10),
                }}
            />
            {depth === 1 && (
                <text
                    x={x + width / 2}
                    y={y + height / 2 + 7}
                    textAnchor="middle"
                    fill="#fff"
                    fontSize={14}
                >
                    {name}
                </text>
            )}
            {depth === 1 && (
                <text
                    x={x + width / 2}
                    y={y + height / 2 - 7}
                    textAnchor="middle"
                    fill="#fff"
                    fontSize={14}
                    fontWeight="bold"
                >
                    ${(value / 1000).toFixed(1)}k
                </text>
            )}
        </g>
    );
};

export default Dashboard;