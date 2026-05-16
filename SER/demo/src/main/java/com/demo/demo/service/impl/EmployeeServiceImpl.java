package com.demo.demo.service.impl;

import com.demo.demo.entity.User;
import com.demo.demo.exception.ResourceNotFoundException;
import com.demo.demo.repository.UserRepository;
import com.demo.demo.service.EmployeeService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final UserRepository userRepository;

    @Override
    public User createEmployee(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllEmployees() {
        return userRepository.findAll();
    }

    @Override
    public User getEmployeeById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee not found"));
    }

    @Override
    public User updateEmployee(Long id, User updatedUser) {

        User existing = getEmployeeById(id);

        existing.setName(updatedUser.getName());
        existing.setEmail(updatedUser.getEmail());

        return userRepository.save(existing);
    }

    @Override
    public void deleteEmployee(Long id) {

        User user = getEmployeeById(id);

        userRepository.delete(user);
    }
}