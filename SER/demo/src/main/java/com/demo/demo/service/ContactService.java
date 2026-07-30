package com.demo.demo.service;

import com.demo.demo.dto.ContactRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String companyEmail;

    public void sendContactEmail(ContactRequest request) {
        SimpleMailMessage message = new SimpleMailMessage();

        // Send to your company email
        message.setTo(companyEmail);

        // Subject
        message.setSubject("New Contact Form: " + request.getSubject());

        // Body
        message.setText(
            "You received a new message from the contact form.\n\n" +
            "Name    : " + request.getName() + "\n" +
            "Email   : " + request.getEmail() + "\n" +
            "Subject : " + request.getSubject() + "\n\n" +
            "Message :\n" + request.getMessage()
        );

        mailSender.send(message);
    }
}