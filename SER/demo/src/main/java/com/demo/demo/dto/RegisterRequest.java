package com.demo.demo.dto;

import lombok.Data;
import com.demo.demo.enums.Role;

@Data
public class RegisterRequest {

    private String name;
    private String email;
    private String password;
    private Role role;
}
// more have to be added in the future like validation, confirm password, etc