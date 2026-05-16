package com.demo.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class DashboardDTO {

    private Long totalEmployees;

    private Long totalLeaves;

    private Long approvedLeaves;

    private Long pendingLeaves;

    private Long rejectedLeaves;

    private Long totalAttendance;

    private Double totalSalaryPaid;
}