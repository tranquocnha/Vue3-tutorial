package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table( name = "login")
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String userName;
    private String password;
    private String fullName;
}
