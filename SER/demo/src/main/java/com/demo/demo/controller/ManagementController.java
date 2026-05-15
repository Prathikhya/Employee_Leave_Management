package com.demo.demo.controller;

import com.demo.demo.entity.LeaveRequest;
import com.demo.demo.entity.User;

import com.demo.demo.repository.LeaveRepository;
import com.demo.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/manager")
@CrossOrigin(origins = "http://localhost:5173")
public class ManagementController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LeaveRepository leaveRepository;

    // =========================
    // VIEW ALL STAFF
    // =========================

    @GetMapping("/employees")
    public ResponseEntity<?> getEmployees(){

        List<User> users = userRepository.findAll();

        return ResponseEntity.ok(users);
    }

    // =========================
    // VIEW ALL LEAVES
    // =========================

    @GetMapping("/leaves")
    public ResponseEntity<?> getAllLeaves(){

        List<LeaveRequest> leaves =
                leaveRepository.findAll();

        return ResponseEntity.ok(leaves);
    }

    // =========================
    // APPROVE LEAVE
    // =========================

    @PutMapping("/approve/{leaveId}")
    public ResponseEntity<?> approveLeave(
            @PathVariable Long leaveId){

        LeaveRequest leave =
                leaveRepository.findById(leaveId)
                        .orElseThrow(() ->
                                new RuntimeException("Leave Not Found"));

        leave.setStatus("APPROVED");

        leaveRepository.save(leave);

        return ResponseEntity.ok("Leave Approved");
    }

    // =========================
    // REJECT LEAVE
    // =========================

    @PutMapping("/reject/{leaveId}")
    public ResponseEntity<?> rejectLeave(
            @PathVariable Long leaveId){

        LeaveRequest leave =
                leaveRepository.findById(leaveId)
                        .orElseThrow(() ->
                                new RuntimeException("Leave Not Found"));

        leave.setStatus("REJECTED");

        leaveRepository.save(leave);

        return ResponseEntity.ok("Leave Rejected");
    }

    // =========================
    // MANAGER DASHBOARD
    // =========================

    @GetMapping("/dashboard")
    public ResponseEntity<?> managerDashboard(){

        long totalEmployees =
                userRepository.count();

        long totalLeaves =
                leaveRepository.count();

        Map<String, Long> dashboard =
                new HashMap<>();

        dashboard.put("totalEmployees",
                totalEmployees);

        dashboard.put("totalLeaves",
                totalLeaves);

        return ResponseEntity.ok(dashboard);
    }
}