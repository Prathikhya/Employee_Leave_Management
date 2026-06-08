package com.demo.demo.service;

public interface EmailService {
    void sendResetMail(String to, String resetLink);
}