package com.example.MongoSpring.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.example.MongoSpring.model.Portfolio;

public interface PortfolioRepository extends MongoRepository<Portfolio, String> {}
