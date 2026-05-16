package com.demo.demo.controller;

import com.demo.demo.entity.Attendance;
import com.demo.demo.service.AttendanceService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/attendance")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AttendanceController {

    private final AttendanceService attendanceService;

    // MARK ATTENDANCE
    @PostMapping("/check-in/{employeeId}")
    public ResponseEntity<Attendance> markAttendance(
            @PathVariable Long employeeId) {

        return ResponseEntity.ok(
                attendanceService.markAttendance(employeeId));
    }

    // CHECK OUT
    @PutMapping("/check-out/{employeeId}")
    public ResponseEntity<Attendance> checkOut(
            @PathVariable Long employeeId) {

        return ResponseEntity.ok(
                attendanceService.checkOut(employeeId));
    }

    // GET EMPLOYEE ATTENDANCE
    @GetMapping("/employee/{employeeId}")
    public ResponseEntity<List<Attendance>>
    getEmployeeAttendance(@PathVariable Long employeeId) {

        return ResponseEntity.ok(
                attendanceService.getEmployeeAttendance(employeeId));
    }

    // GET ALL ATTENDANCE
    @GetMapping
    public ResponseEntity<List<Attendance>>
    getAllAttendance() {

        return ResponseEntity.ok(
                attendanceService.getAllAttendance());
    }
}