package com.example.MongoSpring.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "stocks") // MongoDB collection name
public class Stock {
    
    @Id
    private String id;
    private String stockSymbol;
    private int quantity;
    private double purchasePrice;
    private double currentPrice;

    public Stock() {}

    public Stock(String stockSymbol, int quantity, double purchasePrice, double currentPrice) {
        this.stockSymbol = stockSymbol;
        this.quantity = quantity;
        this.purchasePrice = purchasePrice;
        this.currentPrice = currentPrice;
    }

    public double getTotalValue() {
        return quantity * currentPrice;
    }

    public double getGainLoss() {
        return (currentPrice - purchasePrice) * quantity;
    }

    // Getters and Setters
    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getStockSymbol() { return stockSymbol; }
    public void setStockSymbol(String stockSymbol) { this.stockSymbol = stockSymbol; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    public double getPurchasePrice() { return purchasePrice; }
    public void setPurchasePrice(double purchasePrice) { this.purchasePrice = purchasePrice; }

    public double getCurrentPrice() { return currentPrice; }
    public void setCurrentPrice(double currentPrice) { this.currentPrice = currentPrice; }
}
