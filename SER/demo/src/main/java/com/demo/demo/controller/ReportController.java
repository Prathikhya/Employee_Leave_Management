package com.demo.demo.controller;

import com.demo.demo.dto.ReportDTO;
import com.demo.demo.service.ReportService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reports")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ReportController {

    private final ReportService reportService;

    @GetMapping("/employees")
    public ResponseEntity<List<ReportDTO>>
    generateEmployeeReport() {

        return ResponseEntity.ok(
                reportService.generateEmployeeReport());
    }
}