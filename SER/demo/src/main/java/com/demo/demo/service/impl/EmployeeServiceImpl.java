package com.demo.demo.service.impl;

import com.demo.demo.entity.User;
import com.demo.demo.exception.ResourceNotFoundException;
import com.demo.demo.repository.UserRepository;
import com.demo.demo.service.EmployeeService;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private final UserRepository userRepository;

    @Override
    public User createEmployee(User user) {
        Objects.requireNonNull(user, "user must not be null");
        return userRepository.save(user);
    }

    @Override
    public List<User> getAllEmployees() {
        return userRepository.findAll();
    }

    @Override
    public User getEmployeeById(@NonNull Long id) {
        return userRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Employee not found"));
    }

    @Override
    public User updateEmployee( @NonNull Long id, User updatedUser) {

        User existing = getEmployeeById(id);

        existing.setName(updatedUser.getName());
        existing.setEmail(updatedUser.getEmail());

        return userRepository.save(existing);
    }

    @Override
    public void deleteEmployee( @NonNull Long id) {

        User user = getEmployeeById(id);
        Objects.requireNonNull(user, "user must not be null");

        userRepository.delete(user);
    }
}