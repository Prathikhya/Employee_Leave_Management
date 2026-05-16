package com.demo.demo.repository;

import com.demo.demo.entity.Attendance;
import com.demo.demo.entity.User;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface AttendanceRepository
        extends JpaRepository<Attendance, Long> {

    List<Attendance> findByEmployee(User employee);

    Optional<Attendance> findByEmployeeAndDate(
            User employee,
            LocalDate date
    );
}