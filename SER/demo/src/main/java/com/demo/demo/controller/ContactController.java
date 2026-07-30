package com.demo.demo.controller;

import com.demo.demo.dto.ContactRequest;
import com.demo.demo.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    @PostMapping("/send")
    public ResponseEntity<?> sendMessage(
            @RequestBody ContactRequest request) {
        try {
            contactService.sendContactEmail(request);
            return ResponseEntity.ok(
                Map.of("message", "Message sent successfully")
            );
        } catch (Exception e) {
            return ResponseEntity.status(500)
                .body(Map.of("message", "Failed to send message"));
        }
    }
}