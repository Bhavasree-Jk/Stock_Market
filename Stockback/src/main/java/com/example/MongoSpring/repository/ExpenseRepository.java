 


package com.example.MongoSpring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.MongoSpring.model.Expense;

public interface ExpenseRepository extends MongoRepository<Expense, String> {
}
