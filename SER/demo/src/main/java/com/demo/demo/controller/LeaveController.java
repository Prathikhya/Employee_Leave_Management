package com.demo.demo.controller;

import com.demo.demo.entity.LeaveRequest;
import com.demo.demo.entity.User;

import com.demo.demo.repository.LeaveRepository;
import com.demo.demo.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/leave")
@CrossOrigin("*")
public class LeaveController {

    @Autowired
    private LeaveRepository leaveRepository;

    @Autowired
    private UserRepository userRepository;

    // =========================
    // APPLY LEAVE
    // =========================

    @PostMapping("/apply/{userId}")
    public ResponseEntity<?> applyLeave(
            @PathVariable Long userId,
            @RequestBody LeaveRequest leaveRequest){

        User user = userRepository.findById(userId)
                .orElseThrow(() ->
                        new RuntimeException("User Not Found"));

        leaveRequest.setEmployee(user);

        leaveRepository.save(leaveRequest);

        return ResponseEntity.ok("Leave Applied Successfully");
    }

    // =========================
    // GET USER LEAVES
    // =========================

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getUserLeaves(
            @PathVariable Long userId){

        List<LeaveRequest> leaves =
                leaveRepository.findByUserId(userId);

        return ResponseEntity.ok(leaves);
    }

    // =========================
    // CANCEL LEAVE
    // =========================

    @DeleteMapping("/cancel/{leaveId}")
    public ResponseEntity<?> cancelLeave(
            @PathVariable Long leaveId){

        leaveRepository.deleteById(leaveId);

        return ResponseEntity.ok("Leave Cancelled");
    }
}