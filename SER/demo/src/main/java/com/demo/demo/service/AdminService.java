package com.demo.demo.service;

import com.demo.demo.entity.User;
import com.demo.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // CREATE EMPLOYEE
    public User createEmployee(User user) {

        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        user.setPassword(
                passwordEncoder.encode(user.getPassword())
        );

        return userRepository.save(user);
    }

    // GET ALL EMPLOYEES
    public List<User> getAllEmployees() {

        return userRepository.findAll();
    }

    // GET EMPLOYEE BY ID
    public User getEmployeeById(Long id) {

        return userRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Employee Not Found"));
    }

    // UPDATE EMPLOYEE
    public User updateEmployee(Long id, User updatedUser) {

        User user = userRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Employee Not Found"));

        user.setName(updatedUser.getName());
        user.setEmail(updatedUser.getEmail());
        user.setDepartment(updatedUser.getDepartment());
        user.setDesignation(updatedUser.getDesignation());
        user.setSalary(updatedUser.getSalary());
        user.setRole(updatedUser.getRole());

        return userRepository.save(user);
    }

    // DELETE EMPLOYEE
    public void deleteEmployee(Long id) {

        User user = userRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Employee Not Found"));

        userRepository.delete(user);
    }
}