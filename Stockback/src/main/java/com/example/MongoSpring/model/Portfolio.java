package com.example.MongoSpring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "portfolios")
public class Portfolio {

    @Id
    private String id;
    private String stockSymbol;
    private int quantity;
    private double purchasePrice;

    public double getTotalValue(double currentPrice) {
        return quantity * currentPrice;
    }

    public double getGainLoss(double currentPrice) {
        return (currentPrice - purchasePrice) * quantity;
    }

    // Getters & Setters
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getStockSymbol() {
        return stockSymbol;
    }

    public void setStockSymbol(String stockSymbol) {
        this.stockSymbol = stockSymbol;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public double getPurchasePrice() {
        return purchasePrice;
    }

    public void setPurchasePrice(double purchasePrice) {
        this.purchasePrice = purchasePrice;
    }
}
