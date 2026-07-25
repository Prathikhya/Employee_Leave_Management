package com.demo.demo.service;

import com.demo.demo.entity.User;
import com.demo.demo.enums.Role;
import com.demo.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SuperAdminService {

    @Autowired
    private UserRepository userRepository;

    // Get all admins
    public List<User> getAllAdmins() {
        return userRepository.findByRole(Role.ADMIN);
    }

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Promote user to admin
    public String promoteToAdmin(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        
        // Check max 3 admins
        long adminCount = userRepository.countByRole(Role.ADMIN);
        if (adminCount >= 3) {
            return "Maximum 3 admins allowed";
        }

        user.setRole(Role.ADMIN);
        userRepository.save(user);
        return "User promoted to Admin";
    }

    // Demote admin to employee
    public String demoteAdmin(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        user.setRole(Role.EMPLOYEE);
        userRepository.save(user);
        return "Admin demoted to Employee";
    }

    // Delete any user
    public String deleteUser(Long userId) {
        userRepository.deleteById(userId);
        return "User deleted";
    }
}