package com.demo.demo.service.impl;

import com.demo.demo.dto.LeaveRequestDTO;
import com.demo.demo.entity.LeaveRequest;
import com.demo.demo.entity.User;
import com.demo.demo.enums.LeaveStatus;
import com.demo.demo.exception.ResourceNotFoundException;
import com.demo.demo.repository.LeaveRepository;
import com.demo.demo.repository.UserRepository;
import com.demo.demo.service.LeaveService;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;
import java.util.Objects;
import java.util.List;

@SuppressWarnings("null")
@Service
@RequiredArgsConstructor
public class LeaveServiceImpl implements LeaveService {

    private final LeaveRepository leaveRepository;
    private final UserRepository userRepository;

    @Override
    public LeaveRequest applyLeave( @NonNull
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

        return Objects.requireNonNull(
                leaveRepository.save(leaveRequest),
                "Failed to save leave request"
        );
    }

    @Override
    public List<LeaveRequest> getEmployeeLeaves(@NonNull Long employeeId) {

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
    public LeaveRequest approveLeave(@NonNull Long leaveId) {

        LeaveRequest leave = leaveRepository.findById(leaveId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Leave request not found"));

        leave.setStatus(LeaveStatus.APPROVED);

        return leaveRepository.save(leave);
    }

    @Override
    public LeaveRequest rejectLeave(@NonNull Long leaveId) {

        LeaveRequest leave = leaveRepository.findById(leaveId)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Leave request not found"));

        leave.setStatus(LeaveStatus.REJECTED);

        return leaveRepository.save(leave);
    }
}