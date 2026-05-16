package com.demo.demo.dto;

import com.demo.demo.enums.LeaveType;

import lombok.Data;

import java.time.LocalDate;

@Data
public class LeaveRequestDTO {

    private LocalDate startDate;

    private LocalDate endDate;

    private String reason;

    private LeaveType leaveType;
}