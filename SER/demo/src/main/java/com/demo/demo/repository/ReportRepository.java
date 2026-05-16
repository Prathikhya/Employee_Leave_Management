package com.demo.demo.repository;

import com.demo.demo.entity.Report;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReportRepository
        extends JpaRepository<Report, Long> {
}