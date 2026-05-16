package com.demo.demo.service.impl;

import com.demo.demo.dto.ReportDTO;
import com.demo.demo.entity.User;
import com.demo.demo.repository.AttendanceRepository;
import com.demo.demo.repository.LeaveRepository;
import com.demo.demo.repository.SalaryRepository;
import com.demo.demo.repository.UserRepository;
import com.demo.demo.service.ReportService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReportServiceImpl
        implements ReportService {

    private final UserRepository userRepository;

    private final LeaveRepository leaveRepository;

    private final AttendanceRepository attendanceRepository;

    private final SalaryRepository salaryRepository;

    @Override
    public List<ReportDTO> generateEmployeeReport() {

        List<User> employees = userRepository.findAll();

        List<ReportDTO> reports = new ArrayList<>();

        for (User employee : employees) {

            ReportDTO dto = ReportDTO.builder()
                    .employeeName(employee.getEmail())
                    .department(employee.getDepartment())
                    .totalLeaves(
                            (long) leaveRepository
                                    .findByEmployee(employee)
                                    .size())
                    .totalAttendance(
                            (long) attendanceRepository
                                    .findByEmployee(employee)
                                    .size())
                    .totalSalary(
                            salaryRepository
                                    .findByEmployee(employee)
                                    .stream()
                                    .mapToDouble(
                                            s -> s.getNetSalary())
                                    .sum())
                    .build();

            reports.add(dto);
        }

        return reports;
    }
}