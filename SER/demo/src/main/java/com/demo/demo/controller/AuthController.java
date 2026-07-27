package com.demo.demo.controller;

import com.demo.demo.dto.LoginRequest;
import com.demo.demo.dto.RegisterRequest;
import com.demo.demo.entity.User;
import com.demo.demo.repository.UserRepository;
import com.demo.demo.security.JwtUtil;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import com.demo.demo.dto.ForgotPassword;
import com.demo.demo.service.AdminService;


import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
// @CrossOrigin("*")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private AdminService adminService;

    @PostMapping("/register")
    public ResponseEntity<?> register(
          @Valid @RequestBody RegisterRequest request){

        if (request.getRole() == null) {
            return ResponseEntity.badRequest()
                    .body(Map.of("message", "Role is required"));
        }

        if(userRepository.existsByEmail(request.getEmail())){

            return ResponseEntity.badRequest()
                    .body("Email already exists");
        }

        User user = new User();

        user.setName(request.getName());
        user.setEmail(request.getEmail());

        user.setPassword(
                passwordEncoder.encode(request.getPassword())
        );

        user.setRole(request.getRole());

        userRepository.save(user);

        return ResponseEntity.ok("User Registered");
    }

    // ✅ Fixed login method
@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody LoginRequest request) {

    // Fix 1 — throw BadCredentialsException instead of RuntimeException
    User user = userRepository.findByEmail(request.getEmail())
            .orElseThrow(() ->
                    new BadCredentialsException("Invalid credentials"));

    boolean match = passwordEncoder.matches(
            request.getPassword(),
            user.getPassword()
    );

    // Fix 2 — throw BadCredentialsException instead of returning 400
    if (!match) {
        throw new BadCredentialsException("Invalid credentials");
    }

    

    String token = jwtUtil.generateToken(user.getEmail());

    Map<String, Object> response = new HashMap<>();
    response.put("token", token);
    response.put("name", user.getName());
    response.put("role", user.getRole().name());
    response.put("email", user.getEmail());

    return ResponseEntity.ok(response);
}



@PostMapping("/forgot-password")
public ResponseEntity<?> forgotPassword(
        @RequestBody ForgotPassword request) {

    // ← add this check
    if (!userRepository.existsByEmail(request.getEmail())) {
        return ResponseEntity.status(404)
                .body(Map.of("message", "No account found with this email address."));
    }

    adminService.forgotPassword(request.getEmail());

    return ResponseEntity.ok("Reset link sent to email");
}

}
