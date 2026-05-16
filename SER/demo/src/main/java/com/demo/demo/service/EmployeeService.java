package com.demo.demo.service;

import com.demo.demo.entity.User;

import java.util.List;

public interface EmployeeService {

    User createEmployee(User user);

    List<User> getAllEmployees();

    User getEmployeeById(Long id);

    User updateEmployee(Long id, User updatedUser);

    void deleteEmployee(Long id);
}