package com.example.MongoSpring.repository;

import com.example.MongoSpring.model.Stock;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

public interface StockRepository extends MongoRepository<Stock, String> {
    Optional<Stock> findByStockSymbol(String stockSymbol);
}