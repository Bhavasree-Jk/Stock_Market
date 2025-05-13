package com.example.MongoSpring.service;

import com.example.MongoSpring.model.Budget;
import com.example.MongoSpring.repository.BudgetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BudgetService {

    @Autowired
    private BudgetRepository budgetRepository;

    public List<Budget> getAllBudgets() {
        return budgetRepository.findAll();
    }

    public Optional<Budget> getBudgetById(String id) {
        return budgetRepository.findById(id);
    }

    public Budget addBudget(Budget budget) {
        return budgetRepository.save(budget);
    }

    public Budget updateBudget(String id, Budget updatedBudget) {
        Optional<Budget> existingBudget = budgetRepository.findById(id);
        if (existingBudget.isPresent()) {
            Budget budget = existingBudget.get();
            budget.setBudgetAmount(updatedBudget.getBudgetAmount());
            return budgetRepository.save(budget);  // Save the updated budget to DB
        }
        throw new RuntimeException("Budget not found");
    }
    

    public void deleteBudget(String id) {
        budgetRepository.deleteById(id);
    }
}
