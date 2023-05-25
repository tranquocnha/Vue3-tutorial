package com.example.demo.model.dto;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
public class AddUserDTO {
    private String userName;
    private String password;
    private String fullName;
}
