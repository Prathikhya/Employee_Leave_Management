package com.demo.demo.service;

import com.demo.demo.dto.SalaryDTO;
import com.demo.demo.entity.Salary;

import java.util.List;

public interface SalaryService {

    Salary generateSalary(
            Long employeeId,
            SalaryDTO salaryDTO
    );

    List<Salary> getEmployeeSalary(Long employeeId);

    List<Salary> getAllSalaries();

    Salary updateSalary(
            Long salaryId,
            SalaryDTO salaryDTO
    );

    void deleteSalary(Long salaryId);
}