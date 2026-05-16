package com.demo.demo.repository;

import com.demo.demo.entity.Salary;
import com.demo.demo.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SalaryRepository
        extends JpaRepository<Salary, Long> {

    List<Salary> findByEmployee(User employee);

    @Query("SELECT SUM(s.netSalary) FROM Salary s")
Double getTotalSalaryPaid();
}