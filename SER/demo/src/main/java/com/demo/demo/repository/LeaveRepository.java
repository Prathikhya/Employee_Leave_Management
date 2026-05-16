package com.demo.demo.repository;

import com.demo.demo.entity.LeaveRequest;
import com.demo.demo.entity.User;
import com.demo.demo.enums.LeaveStatus;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LeaveRepository
        extends JpaRepository<LeaveRequest, Long> {

    List<LeaveRequest> findByEmployeeId(Long employeeId);

    List<LeaveRequest> findByEmployee(User employee);

    List<LeaveRequest> findByStatus(LeaveStatus status);

    Long countByStatus(LeaveStatus status);
}