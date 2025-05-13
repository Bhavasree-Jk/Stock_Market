package com.example.MongoSpring.controller;

import java.util.List;
import java.util.Optional;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.MongoSpring.model.User;
import com.example.MongoSpring.repository.UserRepository;

@RestController
@RequestMapping("api/users")
public class UserController {
    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/register")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        Optional<User> existingUser = userRepository.findByEmail(user.getEmail());
        if (existingUser.isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists!");
        }
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/login")
public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {
    Optional<User> user = userRepository.findByEmail(loginRequest.getEmail());
    if (user.isPresent() && user.get().getPassword().equals(loginRequest.getPassword())) {
        // Return name & email to frontend
        return ResponseEntity.ok(user.get());
    }
    return ResponseEntity.badRequest().body("Invalid email or password");
}


    // @PostMapping("/login")
    // public ResponseEntity<?> loginUser(@RequestBody User loginRequest) {
    //     Optional<User> user = userRepository.findByEmail(loginRequest.getEmail());
    //     if (user.isPresent() && user.get().getPassword().equals(loginRequest.getPassword())) {
    //         return ResponseEntity.ok("Login successful!");
    //     }
    //     return ResponseEntity.badRequest().body("Invalid email or password");
    // }
}
