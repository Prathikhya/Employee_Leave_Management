package com.demo.demo.controller;

import com.demo.demo.entity.User;
import com.demo.demo.service.SuperAdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/super-admin")
public class SuperAdminController {

    @Autowired
    private SuperAdminService superAdminService;

    // Get all admins
    @GetMapping("/admins")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public ResponseEntity<List<User>> getAllAdmins() {
        return ResponseEntity.ok(superAdminService.getAllAdmins());
    }

    // Get all users
    @GetMapping("/users")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(superAdminService.getAllUsers());
    }

    // Promote to admin
    @PutMapping("/promote/{userId}")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public ResponseEntity<String> promoteToAdmin(@PathVariable Long userId) {
        return ResponseEntity.ok(superAdminService.promoteToAdmin(userId));
    }

    // Demote admin
    @PutMapping("/demote/{userId}")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public ResponseEntity<String> demoteAdmin(@PathVariable Long userId) {
        return ResponseEntity.ok(superAdminService.demoteAdmin(userId));
    }

    // Delete user
    @DeleteMapping("/delete/{userId}")
    @PreAuthorize("hasRole('SUPER_ADMIN')")
    public ResponseEntity<String> deleteUser(@PathVariable Long userId) {
        return ResponseEntity.ok(superAdminService.deleteUser(userId));
    }
}