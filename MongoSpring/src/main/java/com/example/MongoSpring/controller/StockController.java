package com.example.MongoSpring.controller;

import com.example.MongoSpring.model.Stock;
import com.example.MongoSpring.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/stocks")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend access
public class StockController {

    @Autowired
    private StockService stockService;

    @GetMapping
    public List<Stock> getAllStocks() {
        return stockService.getAllStocks();
    }

    @GetMapping("/{symbol}")
    public Optional<Stock> getStockBySymbol(@PathVariable String symbol) {
        return stockService.getStockBySymbol(symbol);
    }

    @PostMapping
    public Stock addStock(@RequestBody Stock stock) {
        return stockService.addStock(stock);
    }

    @DeleteMapping("/{id}")
    public void deleteStock(@PathVariable String id) {
        stockService.deleteStock(id);
    }
}
