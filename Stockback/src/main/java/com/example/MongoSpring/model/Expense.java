package com.example.MongoSpring.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;

@Document(collection = "expenses")
public class Expense {
    @Id
    private String id;
    private String name;
    private double amount;
    private Date date;

    public Expense() {}

    public Expense(String name, double amount, Date date) {
        this.name = name;
        this.amount = amount;
        this.date = date;
    }

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public double getAmount() { return amount; }
    public void setAmount(double amount) { this.amount = amount; }

    public Date getDate() { return date; }
    public void setDate(Date date) { this.date = date; }
}
