package com.demo.demo.service.impl;

import com.demo.demo.entity.Attendance;
import com.demo.demo.entity.User;
import com.demo.demo.exception.ResourceNotFoundException;
import com.demo.demo.repository.AttendanceRepository;
import com.demo.demo.repository.UserRepository;
import com.demo.demo.service.AttendanceService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AttendanceServiceImpl
        implements AttendanceService {

    private final AttendanceRepository attendanceRepository;
    private final UserRepository userRepository;

    @Override
    public Attendance markAttendance(Long employeeId) {

        User employee = userRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Employee not found"));

        LocalDate today = LocalDate.now();

        attendanceRepository
                .findByEmployeeAndDate(employee, today)
                .ifPresent(attendance -> {
                    throw new RuntimeException(
                            "Attendance already marked today");
                });

        Attendance attendance = Attendance.builder()
                .date(today)
                .present(true)
                .checkInTime(LocalTime.now().toString())
                .employee(employee)
                .build();

        return attendanceRepository.save(attendance);
    }

    @Override
    public Attendance checkOut(Long employeeId) {

        User employee = userRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Employee not found"));

        Attendance attendance = attendanceRepository
                .findByEmployeeAndDate(employee, LocalDate.now())
                .orElseThrow(() ->
                        new RuntimeException(
                                "Attendance not found for today"));

        attendance.setCheckOutTime(
                LocalTime.now().toString());

        return attendanceRepository.save(attendance);
    }

    @Override
    public List<Attendance> getEmployeeAttendance(
            Long employeeId) {

        User employee = userRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Employee not found"));

        return attendanceRepository.findByEmployee(employee);
    }

    @Override
    public List<Attendance> getAllAttendance() {

        return attendanceRepository.findAll();
    }
}