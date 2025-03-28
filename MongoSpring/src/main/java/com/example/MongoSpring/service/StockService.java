package com.example.MongoSpring.service;

import com.example.MongoSpring.model.Stock;
import com.example.MongoSpring.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class StockService {

    @Autowired
    private StockRepository stockRepository;

    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }

    public Optional<Stock> getStockBySymbol(String stockSymbol) {
        return stockRepository.findByStockSymbol(stockSymbol);
    }

    public Stock addStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public void deleteStock(String id) {
        stockRepository.deleteById(id);
    }
}
