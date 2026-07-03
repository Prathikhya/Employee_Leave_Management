package com.demo.demo.controller;

import com.demo.demo.entity.User;
import com.demo.demo.repository.UserRepository;

import jakarta.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import com.demo.demo.exception.ResourceNotFoundException;
import com.demo.demo.exception.BadRequestException;
import com.demo.demo.dto.EmployeeDTO;
import java.util.List;
import java.util.Objects;

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
           @Valid @RequestBody EmployeeDTO request) {

        if (userRepository.existsByEmail(request.getEmail())) {
           throw new BadRequestException("Email already exists");
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode( user.getPassword()));
        user.setDepartment(request.getDepartment());
        user.setDesignation(request.getDesignation());
        user.setSalary(request.getSalary());
        user.setRole(request.getRole());


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
            @PathVariable long id) {

        User user = userRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee Not Found"));

        return ResponseEntity.ok(user);
    }
// ✅ Fixed updateEmployee
@PutMapping("/{id}")
public ResponseEntity<?> updateEmployee(
        @PathVariable long id,
        @RequestBody User updatedUser) {

    User user = Objects.requireNonNull(
            userRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Employee not found")),
            "Employee not found"
    );

    if (updatedUser.getName() != null)
        user.setName(updatedUser.getName());

    if (updatedUser.getEmail() != null &&
            !user.getEmail().equals(updatedUser.getEmail())) {

        if (userRepository.existsByEmail(updatedUser.getEmail()))
            throw new BadRequestException("Email already exists");

        user.setEmail(updatedUser.getEmail());
    }

    if (updatedUser.getDepartment() != null)
        user.setDepartment(updatedUser.getDepartment());

    if (updatedUser.getDesignation() != null)
        user.setDesignation(updatedUser.getDesignation());

    if (updatedUser.getSalary() != null) {
        if (updatedUser.getSalary() < 0) {
            throw new BadRequestException("Salary cannot be negative");
        }
        user.setSalary(updatedUser.getSalary());
    }

    if (updatedUser.getRole() != null)
        user.setRole(updatedUser.getRole());

    userRepository.save(user);

    return ResponseEntity.ok("Employee Updated Successfully");
}

    // DELETE EMPLOYEE
   @DeleteMapping("/{id}")
public ResponseEntity<?> deleteEmployee(
        @PathVariable long id) {

    User user = Objects.requireNonNull(
            userRepository.findById(id)
                    .orElseThrow(() -> new ResourceNotFoundException("Employee Not Found")),
            "Employee Not Found"
    );

    userRepository.delete(user);

    return ResponseEntity.ok("Employee Deleted Successfully");
}
}