package com.demo.demo.controller;

import com.demo.demo.entity.LeaveRequest;
import com.demo.demo.entity.User;
import com.demo.demo.enums.LeaveStatus;

import com.demo.demo.repository.LeaveRepository;
import com.demo.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.demo.demo.exception.ResourceNotFoundException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LeaveRepository leaveRepository;

    @PreAuthorize("hasRole('ADMIN')")

    // GET ALL USERS

    @GetMapping("/users")
    public List<User> getAllUsers(){

        return userRepository.findAll();
    }

    // GET ALL LEAVES

    @GetMapping("/leaves")
    public List<LeaveRequest> getAllLeaves(){

        return leaveRepository.findAll();
    }

    // APPROVE LEAVE

    @PutMapping("/approve/{leaveId}")
    public LeaveRequest approveLeave(
            @PathVariable long leaveId){

        LeaveRequest leave =
                leaveRepository.findById(leaveId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException("Leave Not Found"));

        leave.setStatus(LeaveStatus.APPROVED);

        return leaveRepository.save(leave);
    }

    // REJECT LEAVE

    @PutMapping("/reject/{leaveId}")
    public LeaveRequest rejectLeave(
            @PathVariable long leaveId){

        LeaveRequest leave =
                leaveRepository.findById(leaveId)
                        .orElseThrow(() ->
                                new ResourceNotFoundException("Leave Not Found"));

        leave.setStatus(LeaveStatus.REJECTED);

        return leaveRepository.save(leave);
    }

    // DELETE USER

    @DeleteMapping("/delete-user/{userId}")
    public String deleteUser(
            @PathVariable long userId){

        userRepository.deleteById(userId);

        return "User Deleted Successfully";
    }

    // DASHBOARD STATS

    @GetMapping("/dashboard")
    public Map<String, Long> dashboardStats(){

        long totalUsers =
                userRepository.count();

        long totalLeaves =
                leaveRepository.count();

        long approvedLeaves =
                leaveRepository.findAll()
                        .stream()
                        .filter(leave ->
                                leave.getStatus()
                                        .equals(LeaveStatus.APPROVED))
                        .count();

        long pendingLeaves =
                leaveRepository.findAll()
                        .stream()
                        .filter(leave ->
                                leave.getStatus()
                                        .equals(LeaveStatus.PENDING))
                        .count();

        Map<String, Long> stats =
                new HashMap<>();

        stats.put("totalUsers", totalUsers);
        stats.put("totalLeaves", totalLeaves);
        stats.put("approvedLeaves", approvedLeaves);
        stats.put("pendingLeaves", pendingLeaves);

        return stats;
    }
}