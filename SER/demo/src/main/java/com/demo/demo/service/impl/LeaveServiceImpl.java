package com.demo.demo.service.impl;

import com.demo.demo.dto.LeaveRequestDTO;
import com.demo.demo.entity.LeaveRequest;
import com.demo.demo.entity.User;
import com.demo.demo.enums.LeaveStatus;
import com.demo.demo.exception.ResourceNotFoundException;
import com.demo.demo.repository.LeaveRepository;
import com.demo.demo.repository.UserRepository;
import com.demo.demo.service.LeaveService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LeaveServiceImpl implements LeaveService {

    private final LeaveRepository leaveRepository;
    private final UserRepository userRepository;

    @Override
    public LeaveRequest applyLeave(
            Long employeeId,
            LeaveRequestDTO dto) {

        User employee = userRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Employee not found"));

        LeaveRequest leaveRequest = LeaveRequest.builder()
                .startDate(dto.getStartDate())
                .endDate(dto.getEndDate())
                .reason(dto.getReason())
                .leaveType(dto.getLeaveType())
                .status(LeaveStatus.PENDING)
                .employee(employee)
                .build();

        return leaveRepository.save(leaveRequest);
    }

    @Override
    public List<LeaveRequest> getEmployeeLeaves(Long employeeId) {

        User employee = userRepository.findById(employeeId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Employee not found"));

        return leaveRepository.findByEmployee(employee);
    }

    @Override
    public List<LeaveRequest> getAllLeaves() {

        return leaveRepository.findAll();
    }

    @Override
    public LeaveRequest approveLeave(Long leaveId) {

        LeaveRequest leave = leaveRepository.findById(leaveId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Leave request not found"));

        leave.setStatus(LeaveStatus.APPROVED);

        return leaveRepository.save(leave);
    }

    @Override
    public LeaveRequest rejectLeave(Long leaveId) {

        LeaveRequest leave = leaveRepository.findById(leaveId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Leave request not found"));

        leave.setStatus(LeaveStatus.REJECTED);

        return leaveRepository.save(leave);
    }
}