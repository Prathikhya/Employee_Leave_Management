package com.demo.demo.controller;

import com.demo.demo.entity.LeaveRequest;
import com.demo.demo.entity.User;

import com.demo.demo.repository.LeaveRepository;
import com.demo.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/employee")
@CrossOrigin("*")
public class EmployeeController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LeaveRepository leaveRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    // =========================
    // TEST API
    // =========================

    @GetMapping("/test")
    public String testEmployee() {

        return "Employee Access Success";
    }

    // =========================
    // GET EMPLOYEE PROFILE
    // =========================

    @GetMapping("/profile/{userId}")
    public ResponseEntity<?> getProfile(
            @PathVariable Long userId){

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new RuntimeException("User Not Found"));

        return ResponseEntity.ok(user);
    }

    // =========================
    // UPDATE EMPLOYEE PROFILE
    // =========================

    @PutMapping("/update/{userId}")
    public ResponseEntity<?> updateProfile(
            @PathVariable Long userId,
            @RequestBody User updatedUser){

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new RuntimeException("User Not Found"));

        user.setName(updatedUser.getName());

        user.setEmail(updatedUser.getEmail());

        user.setRole(updatedUser.getRole());

        userRepository.save(user);

        return ResponseEntity.ok("Profile Updated Successfully");
    }

    // =========================
    // GET EMPLOYEE LEAVES
    // =========================

    @GetMapping("/leaves/{userId}")
    public ResponseEntity<?> getEmployeeLeaves(
            @PathVariable Long userId){

        List<LeaveRequest> leaves =
                leaveRepository.findByEmployeeId(userId);

        return ResponseEntity.ok(leaves);
    }

    // =========================
    // EMPLOYEE DASHBOARD
    // =========================

    @GetMapping("/dashboard/{userId}")
    public ResponseEntity<?> employeeDashboard(
            @PathVariable Long userId){

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new RuntimeException("User Not Found"));

        List<LeaveRequest> leaves =
                leaveRepository.findByEmployeeId(userId);

        long approvedLeaves =
                leaves.stream()
                        .filter(leave ->
                                leave.getStatus()
                                        .equals("APPROVED"))
                        .count();

        long pendingLeaves =
                leaves.stream()
                        .filter(leave ->
                                leave.getStatus()
                                        .equals("PENDING"))
                        .count();

        Map<String, Object> dashboard =
                new HashMap<>();

        dashboard.put("employeeName", user.getName());

        dashboard.put("employeeEmail", user.getEmail());

        dashboard.put("employeeRole", user.getRole());

        dashboard.put("totalLeaves", leaves.size());

        dashboard.put("approvedLeaves", approvedLeaves);

        dashboard.put("pendingLeaves", pendingLeaves);

        return ResponseEntity.ok(dashboard);
    }

    // =========================
    // CHANGE PASSWORD
    // =========================

    @PutMapping("/change-password/{userId}")
    public ResponseEntity<?> changePassword(
            @PathVariable Long userId,
            @RequestBody Map<String, String> passwords){

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new RuntimeException("User Not Found"));

        String oldPassword =
                passwords.get("oldPassword");

        String newPassword =
                passwords.get("newPassword");

        boolean match =
                passwordEncoder.matches(
                        oldPassword,
                        user.getPassword()
                );

        if(!match){

            return ResponseEntity.badRequest()
                    .body("Old Password Incorrect");
        }

        user.setPassword(
                passwordEncoder.encode(newPassword)
        );

        userRepository.save(user);

        return ResponseEntity.ok("Password Changed Successfully");
    }
}