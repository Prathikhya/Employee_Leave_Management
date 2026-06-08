package com.demo.demo.entity;

import com.demo.demo.enums.Role;
import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.*;

import lombok.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role;

    private Double salary;
    private String employeeCode;
    private String designation;
    private String department;
    private Double monthlySalary;
    private LocalDate joiningDate;

    @Column(name = "reset_token")
private String resetToken;

@Column(name = "token_expiry")
private LocalDateTime tokenExpiry;
}