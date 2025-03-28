package com.example.MongoSpring.controller;

import com.example.MongoSpring.model.Budget;
import com.example.MongoSpring.service.BudgetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/budgets")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend access
public class BudgetController {

    @Autowired
    private BudgetService budgetService;

    @GetMapping
    public List<Budget> getAllBudgets() {
        return budgetService.getAllBudgets();
    }

    @GetMapping("/{id}")
    public Optional<Budget> getBudgetById(@PathVariable String id) {
        return budgetService.getBudgetById(id);
    }

    @PostMapping
    public Budget addBudget(@RequestBody Budget budget) {
        return budgetService.addBudget(budget);
    }

    @PutMapping("/{id}")
public Budget updateBudget(@PathVariable String id, @RequestBody Budget updatedBudget) {
    return budgetService.updateBudget(id, updatedBudget);
}

    @DeleteMapping("/{id}")
    public void deleteBudget(@PathVariable String id) {
        budgetService.deleteBudget(id);
    }
}
