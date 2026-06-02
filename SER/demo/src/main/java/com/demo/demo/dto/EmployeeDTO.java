package com.demo.demo.dto;

import com.demo.demo.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDTO {

    private Long id;

    @NotBlank(message = "Name is required")
    private String name;
    
  @NotBlank(message = "Email is required")
    @Email(message = "Email should be valid")
    private String email;

    @NotBlank(message = "Department is required")
    private String department;

    @NotBlank(message = "Designation is required")
    private String designation;


    @NotNull(message = "Salary is required")
    @Min(value = 0, message = "Salary cannot be negative")
    private Double salary;

    @NotBlank(message = "Role is required")
    private Role role;

    private boolean active;
}