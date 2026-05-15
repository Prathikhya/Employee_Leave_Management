package com.demo.demo.entity;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Table(name = "leave_requests")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class LeaveRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String leaveType;

    private String reason;

    private LocalDate startDate;

    private LocalDate endDate;

    private String status = "PENDING";

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}