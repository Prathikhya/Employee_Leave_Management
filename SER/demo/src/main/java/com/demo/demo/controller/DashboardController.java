package com.demo.demo.controller;

import com.demo.demo.dto.DashboardDTO;
import com.demo.demo.service.DashboardService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/dashboard")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class DashboardController {

    private final DashboardService dashboardService;

    @GetMapping
    public ResponseEntity<DashboardDTO>
    getDashboardData() {

        return ResponseEntity.ok(
                dashboardService.getDashboardData());
    }
}