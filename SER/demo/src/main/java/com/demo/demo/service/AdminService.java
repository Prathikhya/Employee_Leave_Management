package com.demo.demo.service;

import com.demo.demo.entity.User;
import com.demo.demo.repository.UserRepository;

import lombok.NonNull;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.UUID;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;

@Service
public class AdminService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @Autowired
    private EmailService emailService;



    // CREATE EMPLOYEE
    public User createEmployee(  User user) {

        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already exists");
        }

        user.setPassword(
                passwordEncoder.encode(user.getPassword())
        );

        return userRepository.save(user);
    }

    // GET ALL EMPLOYEES
    public List<User> getAllEmployees() {

        return userRepository.findAll();
    }

    // GET EMPLOYEE BY ID
    public User getEmployeeById(Long id) {

        return userRepository.findById(Objects.requireNonNull(id))
                .orElseThrow(() ->
                        new RuntimeException("Employee Not Found"));
    }

    // UPDATE EMPLOYEE
    public User updateEmployee( @NonNull Long id, User updatedUser) {

        User user = Objects.requireNonNull(
                userRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException("Employee Not Found"))
        );

        user.setName(updatedUser.getName());
        user.setEmail(updatedUser.getEmail());
        user.setDepartment(updatedUser.getDepartment());
        user.setDesignation(updatedUser.getDesignation());
        user.setSalary(updatedUser.getSalary());
        user.setRole(updatedUser.getRole());

        return userRepository.save(user);
    }

    // DELETE EMPLOYEE
    public void deleteEmployee( @NonNull Long id) {

        User user = userRepository.findById(id)
                        .orElseThrow(() ->
                                new RuntimeException("Employee Not Found"));

        userRepository.delete(Objects.requireNonNull(user));
    }


    // FORGOT PASSWORD
    public void forgotPassword(String email) {

    User user =
            userRepository.findByEmail(email)
            .orElseThrow(() ->
                new RuntimeException("Email not found"));

    String token =
            UUID.randomUUID().toString();

    user.setResetToken(token);

    user.setTokenExpiry(
            LocalDateTime.now().plusMinutes(30)
    );

    userRepository.save(user);

    String link =
            "http://localhost:5173/reset-password?token="
                    + token;

    emailService.sendResetMail(
            user.getEmail(),
            link
    );
}

// RESET PASSWORD
public void resetPassword(
        String token,
        String newPassword) {

    User user =
            userRepository.findByResetToken(token)
            .orElseThrow(() ->
                    new RuntimeException("Invalid Token"));

    if(user.getTokenExpiry()
            .isBefore(LocalDateTime.now())) {

        throw new RuntimeException(
                "Token Expired");
    }

    user.setPassword(
            passwordEncoder.encode(newPassword)
    );

    user.setResetToken(null);
    user.setTokenExpiry(null);

    userRepository.save(user);
}


}

