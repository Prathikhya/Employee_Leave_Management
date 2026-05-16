package com.demo.demo.service;

import com.demo.demo.dto.ReportDTO;

import java.util.List;

public interface ReportService {

    List<ReportDTO> generateEmployeeReport();
}