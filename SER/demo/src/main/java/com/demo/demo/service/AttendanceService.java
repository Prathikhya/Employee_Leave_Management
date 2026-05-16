package com.demo.demo.service;

import com.demo.demo.entity.Attendance;

import java.util.List;

public interface AttendanceService {

    Attendance markAttendance(Long employeeId);

    Attendance checkOut(Long employeeId);

    List<Attendance> getEmployeeAttendance(Long employeeId);

    List<Attendance> getAllAttendance();
}
