package com.example.MongoSpring.service;

import com.example.MongoSpring.model.Portfolio;
import com.example.MongoSpring.repository.PortfolioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PortfolioService {

    @Autowired
    private PortfolioRepository portfolioRepository;

    public List<Portfolio> getAllPortfolios() {
        return portfolioRepository.findAll();
    }

    public Optional<Portfolio> getPortfolioById(String id) {
        return portfolioRepository.findById(id);
    }

    public Portfolio addStock(Portfolio portfolio) {
        return portfolioRepository.save(portfolio);
    }

    public Portfolio updateStock(String id, Portfolio updatedPortfolio) {
        return portfolioRepository.findById(id).map(portfolio -> {
            portfolio.setStockSymbol(updatedPortfolio.getStockSymbol());
            portfolio.setQuantity(updatedPortfolio.getQuantity());
            portfolio.setPurchasePrice(updatedPortfolio.getPurchasePrice());
            return portfolioRepository.save(portfolio);
        }).orElseGet(() -> {
            updatedPortfolio.setId(id);
            return portfolioRepository.save(updatedPortfolio);
        });
    }

    public void deleteStock(String id) {
        portfolioRepository.deleteById(id);
    }
}