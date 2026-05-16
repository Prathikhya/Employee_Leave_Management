package com.demo.demo.service;

import com.demo.demo.dto.LeaveRequestDTO;
import com.demo.demo.entity.LeaveRequest;

import java.util.List;

public interface LeaveService {

    LeaveRequest applyLeave(
            Long employeeId,
            LeaveRequestDTO leaveRequestDTO
    );

    List<LeaveRequest> getEmployeeLeaves(Long employeeId);

    List<LeaveRequest> getAllLeaves();

    LeaveRequest approveLeave(Long leaveId);

    LeaveRequest rejectLeave(Long leaveId);
}