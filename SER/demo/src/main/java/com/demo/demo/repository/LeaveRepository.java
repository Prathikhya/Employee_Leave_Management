package com.demo.demo.repository;

import com.demo.demo.entity.LeaveRequest;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LeaveRepository
        extends JpaRepository<LeaveRequest, Long> {

    List<LeaveRequest> findByUserId(Long userId);
}