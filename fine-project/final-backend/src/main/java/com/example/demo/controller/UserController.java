package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.model.dto.AddUserDTO;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/v1/user")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/{userName}&{password}")
    public ResponseEntity<Boolean> getUserByPasswordAndUserName(@PathVariable(value = "password") String password,
                                                                @PathVariable(value = "userName") String userName) {
        boolean checkPass = false;
        User user = userRepository.findUserByPasswordAndUserName(password, userName);
        if (user != null) {
            checkPass = true;
        }
        return ResponseEntity.ok().body(checkPass);
    }

    @PostMapping()
    public ResponseEntity<User> addUserBody(@RequestBody AddUserDTO addUserDTO) {
        User checkUser = userRepository.findUserByUserName(addUserDTO.getUserName());

        if (checkUser == null) {
            User user = new User();
            user.setUserName(addUserDTO.getUserName());
            user.setPassword(addUserDTO.getPassword());
            user.setFullName(addUserDTO.getFullName());
            userRepository.save(user);
            try {
                return ResponseEntity.status(HttpStatus.CREATED).body(userRepository.save(user));
            } catch (Exception e) {
                // If an error occurs, return a response with status 400 and an error message
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(user);
            }
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }

    }
}
