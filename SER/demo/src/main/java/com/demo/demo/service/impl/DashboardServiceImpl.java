package com.demo.demo.service.impl;

import com.demo.demo.dto.DashboardDTO;
import com.demo.demo.enums.LeaveStatus;
import com.demo.demo.repository.AttendanceRepository;
import com.demo.demo.repository.LeaveRepository;
import com.demo.demo.repository.SalaryRepository;
import com.demo.demo.repository.UserRepository;
import com.demo.demo.service.DashboardService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DashboardServiceImpl
        implements DashboardService {

    private final UserRepository userRepository;

    private final LeaveRepository leaveRepository;

    private final AttendanceRepository attendanceRepository;

    private final SalaryRepository salaryRepository;

    @Override
    public DashboardDTO getDashboardData() {

        return DashboardDTO.builder()
                .totalEmployees(userRepository.count())
                .totalLeaves(leaveRepository.count())
                .approvedLeaves(
                        leaveRepository.countByStatus(
                                LeaveStatus.APPROVED))
                .pendingLeaves(
                        leaveRepository.countByStatus(
                                LeaveStatus.PENDING))
                .rejectedLeaves(
                        leaveRepository.countByStatus(
                                LeaveStatus.REJECTED))
                .totalAttendance(
                        attendanceRepository.count())
                .totalSalaryPaid(
                        salaryRepository.getTotalSalaryPaid())
                .build();
    }
}