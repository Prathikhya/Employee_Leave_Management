package com.demo.demo.service.impl;

import com.demo.demo.dto.SalaryDTO;
import com.demo.demo.entity.Salary;
import com.demo.demo.entity.User;
import com.demo.demo.exception.ResourceNotFoundException;
import com.demo.demo.repository.SalaryRepository;
import com.demo.demo.repository.UserRepository;
import com.demo.demo.service.SalaryService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class SalaryServiceImpl
        implements SalaryService {

    private final SalaryRepository salaryRepository;
    private final UserRepository userRepository;

    @Override
    public Salary generateSalary(
            Long employeeId,
            SalaryDTO dto) {

        User employee = userRepository.findById(Objects.requireNonNull(employeeId, "Employee id must not be null"))
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Employee not found"));

        Double netSalary =
                dto.getBasicSalary()
                + dto.getBonus()
                - dto.getDeduction();

        Salary salary = Salary.builder()
                .basicSalary(dto.getBasicSalary())
                .bonus(dto.getBonus())
                .deduction(dto.getDeduction())
                .netSalary(netSalary)
                .salaryDate(LocalDate.now())
                .paymentStatus("PAID")
                .employee(employee)
                .build();

        return Objects.requireNonNull(salaryRepository.save(salary));
    }

    @Override
    public List<Salary> getEmployeeSalary(Long employeeId) {

        User employee = userRepository.findById(Objects.requireNonNull(employeeId, "Employee id must not be null"))
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Employee not found"));

        return salaryRepository.findByEmployee(employee);
    }

    @Override
    public List<Salary> getAllSalaries() {

        return salaryRepository.findAll();
    }

    @Override
    public Salary updateSalary(
            Long salaryId,
            SalaryDTO dto) {

        Salary salary = salaryRepository.findById(salaryId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Salary record not found"));

        Double netSalary =
                dto.getBasicSalary()
                + dto.getBonus()
                - dto.getDeduction();

        salary.setBasicSalary(dto.getBasicSalary());
        salary.setBonus(dto.getBonus());
        salary.setDeduction(dto.getDeduction());
        salary.setNetSalary(netSalary);

        return salaryRepository.save(salary);
    }

    @Override
    public void deleteSalary(Long salaryId) {

        Salary salary = salaryRepository.findById(salaryId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Salary record not found"));

        salaryRepository.delete(salary);
    }
}