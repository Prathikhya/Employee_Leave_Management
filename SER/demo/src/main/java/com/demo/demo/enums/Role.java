package com.demo.demo.enums;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.Arrays;

public enum Role {

    SUPER_ADMIN,
    ADMIN,
    MANAGER,
    EMPLOYEE;

    @JsonCreator
    public static Role fromString(String value) {
        if (value == null || value.trim().isEmpty()) {
            return null;
        }

        return Arrays.stream(values())
                .filter(role -> role.name().equalsIgnoreCase(value.trim()))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Invalid role: " + value));
    }

    @JsonValue
    public String toJson() {
        return this.name();
    }
}