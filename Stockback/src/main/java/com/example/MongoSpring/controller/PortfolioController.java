package com.example.MongoSpring.controller;

import com.example.MongoSpring.model.Portfolio;
import com.example.MongoSpring.service.PortfolioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/portfolio")
@CrossOrigin(origins = "*")
public class PortfolioController {

    @Autowired
    private PortfolioService portfolioService;

    @GetMapping("/all")
    public List<Portfolio> getAllPortfolios() {
        return portfolioService.getAllPortfolios();
    }

    @GetMapping("/{id}")
    public Optional<Portfolio> getPortfolioById(@PathVariable String id) {
        return portfolioService.getPortfolioById(id);
    }

    @PostMapping("/add")
    public Portfolio addStock(@RequestBody Portfolio portfolio) {
        return portfolioService.addStock(portfolio);
    }

    @PutMapping("/update/{id}")
    public Portfolio updateStock(@PathVariable String id, @RequestBody Portfolio updatedPortfolio) {
        return portfolioService.updateStock(id, updatedPortfolio);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteStock(@PathVariable String id) {
        portfolioService.deleteStock(id);
    }
}
