import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "../style/Theme.css";
import "../style/portfolio.css";

const Portfolio = () => {
  const navigate = useNavigate();
  const [stocks, setStocks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [newStock, setNewStock] = useState({
    stockSymbol: "",
    quantity: "",
    purchasePrice: "",
  });
  const [sellConfirmation, setSellConfirmation] = useState({
    show: false,
    stock: null,
    stockId: null,
  });

  const handleRefresh = () => {
    setRefreshing(true);
    // Replace with actual API call
    console.log("Refresh prices clicked");
    setTimeout(() => setRefreshing(false), 1000);
  };

  const handleChange = (e) => {
    setNewStock({ ...newStock, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = {
      ...newStock,
      quantity: parseInt(newStock.quantity, 10),
      purchasePrice: parseFloat(newStock.purchasePrice),
      currentPrice: parseFloat(newStock.purchasePrice), // Dummy value
    };
    setStocks([...stocks, newEntry]);
    setShowForm(false);
    setNewStock({ stockSymbol: "", quantity: "", purchasePrice: "" });
  };

  const handleSell = (stock) => {
    const index = stocks.indexOf(stock);
    if (index !== -1) {
      setSellConfirmation({
        show: true,
        stock,
        stockId: index,
      });
    }
  };

  const confirmSell = () => {
    setStocks((prev) => prev.filter((_, i) => i !== sellConfirmation.stockId));
    setSellConfirmation({ show: false, stock: null, stockId: null });
  };

  const cancelSell = () => {
    setSellConfirmation({ show: false, stock: null, stockId: null });
  };

  return (
    <div className="portfolio-page">
      <Navbar />
      <div className="container-portfolio">
        <div className="portfolio-header">
          <h1 className="page-title">My Portfolio</h1>
          <div className="portfolio-actions">
            <button className="btn btn-secondary" onClick={handleRefresh} disabled={refreshing}>
              {refreshing ? "Refreshing..." : "Refresh Prices"}
            </button>
            <button className="btn btn-primary" onClick={() => setShowForm(true)}>
              Add Stock
            </button>
            <button className="btn btn-success" onClick={() => navigate("/catlog")}>
              Buy Stocks
            </button>
          </div>
        </div>

        {stocks.length === 0 ? (
          <div className="empty-portfolio">
            <p>Your portfolio is empty</p>
            <button className="btn btn-primary" onClick={() => setShowForm(true)}>
              Add Your First Stock
            </button>
          </div>
        ) : (
          <div className="portfolio-table-responsive">
            <table className="portfolio-table">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Quantity</th>
                  <th>Avg Cost</th>
                  <th>Current Price</th>
                  <th>Invested</th>
                  <th>Current Value</th>
                  <th>Gain/Loss</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {stocks.map((stock, index) => {
                  const invested = stock.quantity * stock.purchasePrice;
                  const currentValue = stock.quantity * stock.currentPrice;
                  const gainLoss = currentValue - invested;
                  const gainLossPercent = (gainLoss / invested) * 100;

                  return (
                    <tr key={index}>
                      <td>{stock.stockSymbol}</td>
                      <td>{stock.quantity}</td>
                      <td>${stock.purchasePrice.toFixed(2)}</td>
                      <td>${stock.currentPrice.toFixed(2)}</td>
                      <td>${invested.toFixed(2)}</td>
                      <td>${currentValue.toFixed(2)}</td>
                      <td style={{ color: gainLoss >= 0 ? "var(--success)" : "var(--error)" }}>
                        ${gainLoss.toFixed(2)} ({gainLossPercent.toFixed(2)}%)
                      </td>
                      <td>
                        <button className="btn btn-error sell-btn" onClick={() => handleSell(stock)}>
                          Sell
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {showForm && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Add New Stock</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="stockSymbol"
                  className="form-control"
                  placeholder="Stock Symbol"
                  value={newStock.stockSymbol}
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  name="quantity"
                  className="form-control"
                  placeholder="Quantity"
                  value={newStock.quantity}
                  onChange={handleChange}
                  required
                  min="1"
                />
                <input
                  type="number"
                  name="purchasePrice"
                  className="form-control"
                  placeholder="Purchase Price"
                  value={newStock.purchasePrice}
                  onChange={handleChange}
                  required
                  min="0.01"
                  step="0.01"
                />
                <div className="form-actions">
                  <button type="submit" className="btn btn-primary">
                    Add Stock
                  </button>
                  <button type="button" className="btn btn-error" onClick={() => setShowForm(false)}>
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {sellConfirmation.show && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h3>Confirm Sale</h3>
              <p>Are you sure you want to sell all shares of {sellConfirmation.stock?.stockSymbol}?</p>
              <div className="modal-actions">
                <button className="btn btn-error" onClick={cancelSell}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={confirmSell}>
                  Confirm Sale
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
