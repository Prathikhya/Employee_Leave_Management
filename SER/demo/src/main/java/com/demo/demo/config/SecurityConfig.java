package com.demo.demo.config;

import com.demo.demo.security.JwtAuthFilter;
import com.demo.demo.security.JwtAuthenticationEntryPoint;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.config.http.SessionCreationPolicy;



import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

        @Autowired
private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

    private final JwtAuthFilter jwtAuthFilter;

    private final AuthenticationProvider authenticationProvider;

    

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {

        http
                .csrf(csrf -> csrf.disable())

                .sessionManagement(session ->
                        session.sessionCreationPolicy(
                                SessionCreationPolicy.STATELESS
                        )
                )

                .authorizeHttpRequests(auth -> auth

                        .requestMatchers("/auth/**")
                        .permitAll()

                        .requestMatchers("/admin/**")
                        .hasRole("ADMIN")

                        .requestMatchers("/manager/**")
                        .hasAnyRole("ADMIN", "MANAGER")

                        .requestMatchers("/employee/**")
                        .hasAnyRole(
                                "ADMIN",
                                "MANAGER",
                                "EMPLOYEE"
                        )

                        .anyRequest()
                        .authenticated()
                )

                .authenticationProvider(authenticationProvider)

                .addFilterBefore(
                        jwtAuthFilter,
                        UsernamePasswordAuthenticationFilter.class
                )
                .exceptionHandling(ex -> ex
    .authenticationEntryPoint(jwtAuthenticationEntryPoint)
    .accessDeniedHandler((request, response, accessDeniedException) -> {
        response.setStatus(403);
        response.setContentType("application/json");
        response.getWriter().write("{\"message\": \"Access Denied\"}");
    })

);

        return http.build();
    }
}