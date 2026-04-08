package com.klu.controller;


import com.klu.dto.LoginDTO;
import com.klu.model.User;
import com.klu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService service;

    // REGISTER
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return service.register(user);
    }

    // LOGIN
    @PostMapping("/login")
    public Object login(@RequestBody LoginDTO dto) {
        User user = service.login(dto.getUsername(), dto.getPassword());

        if (user == null) {
            return "Invalid Credentials";
        }
        return user;
    }

    // GET PROFILE
    @GetMapping("/user/{id}")
    public User getUser(@PathVariable Long id) {
        return service.getUserById(id);
    }
}