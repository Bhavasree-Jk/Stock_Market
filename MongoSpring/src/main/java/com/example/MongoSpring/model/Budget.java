package com.example.MongoSpring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "budgets")
public class Budget {
    @Id
    private String id;
    private double budgetAmount;

    public Budget() {}

    public Budget(double budgetAmount) {
        this.budgetAmount = budgetAmount;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public double getBudgetAmount() { return budgetAmount; }
    public void setBudgetAmount(double budgetAmount) { this.budgetAmount = budgetAmount; }
}
