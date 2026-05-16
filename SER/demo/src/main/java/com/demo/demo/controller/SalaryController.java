package com.demo.demo.controller;

import com.demo.demo.dto.SalaryDTO;
import com.demo.demo.entity.Salary;
import com.demo.demo.service.SalaryService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/salary")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class SalaryController {

    private final SalaryService salaryService;

    // GENERATE SALARY
    @PostMapping("/generate/{employeeId}")
    public ResponseEntity<Salary> generateSalary(
            @PathVariable Long employeeId,
            @RequestBody SalaryDTO dto) {

        return ResponseEntity.ok(
                salaryService.generateSalary(employeeId, dto));
    }

    // GET EMPLOYEE SALARY
    @GetMapping("/employee/{employeeId}")
    public ResponseEntity<List<Salary>>
    getEmployeeSalary(@PathVariable Long employeeId) {

        return ResponseEntity.ok(
                salaryService.getEmployeeSalary(employeeId));
    }

    // GET ALL SALARIES
    @GetMapping
    public ResponseEntity<List<Salary>>
    getAllSalaries() {

        return ResponseEntity.ok(
                salaryService.getAllSalaries());
    }

    // UPDATE SALARY
    @PutMapping("/{salaryId}")
    public ResponseEntity<Salary> updateSalary(
            @PathVariable Long salaryId,
            @RequestBody SalaryDTO dto) {

        return ResponseEntity.ok(
                salaryService.updateSalary(salaryId, dto));
    }

    // DELETE SALARY
    @DeleteMapping("/{salaryId}")
    public ResponseEntity<String> deleteSalary(
            @PathVariable Long salaryId) {

        salaryService.deleteSalary(salaryId);

        return ResponseEntity.ok(
                "Salary deleted successfully");
    }
}