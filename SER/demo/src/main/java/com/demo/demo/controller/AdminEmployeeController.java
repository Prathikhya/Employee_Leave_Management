
package com.demo.demo.controller;

import com.demo.demo.entity.User;
import com.demo.demo.repository.UserRepository;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/employees")
@CrossOrigin("*")
public class AdminEmployeeController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // CREATE EMPLOYEE
    @PostMapping
    public ResponseEntity<?> createEmployee(
           @Valid @RequestBody User user) {

        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest()
                    .body("Email already exists");
        }

        user.setPassword(
                passwordEncoder.encode(user.getPassword())
        );

        User savedUser = userRepository.save(user);

        return ResponseEntity.ok(savedUser);
    }

    // GET ALL EMPLOYEES
    @GetMapping
    public ResponseEntity<List<User>> getAllEmployees() {

        return ResponseEntity.ok(
                userRepository.findAll()
        );
    }

    // GET EMPLOYEE BY ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getEmployeeById(
            @PathVariable Long id) {

        User user = userRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Employee Not Found"));

        return ResponseEntity.ok(user);
    }

    // UPDATE EMPLOYEE
    @PutMapping("/{id}")
    public ResponseEntity<?> updateEmployee(
            @PathVariable Long id,
            @RequestBody User updatedUser) {

        User user = userRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Employee Not Found"));

        user.setName(updatedUser.getName());
        user.setEmail(updatedUser.getEmail());
        user.setDepartment(updatedUser.getDepartment());
        user.setDesignation(updatedUser.getDesignation());
        user.setSalary(updatedUser.getSalary());
        user.setRole(updatedUser.getRole());

        userRepository.save(user);

        return ResponseEntity.ok("Employee Updated Successfully");
    }

    // DELETE EMPLOYEE
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEmployee(
            @PathVariable Long id) {

        User user = userRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Employee Not Found"));

        userRepository.delete(user);

        return ResponseEntity.ok("Employee Deleted Successfully");
    }
}