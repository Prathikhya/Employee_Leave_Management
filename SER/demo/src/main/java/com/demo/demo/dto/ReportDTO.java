package com.demo.demo.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ReportDTO {

    private String employeeName;

    private String department;

    private Long totalLeaves;

    private Long totalAttendance;

    private Double totalSalary;
}