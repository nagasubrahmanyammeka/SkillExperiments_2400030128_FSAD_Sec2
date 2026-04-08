package com.klu.service;


import com.klu.model.User;
import com.klu.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User register(User user) {
        return repo.save(user);
    }

    public User login(String username, String password) {
        Optional<User> user = repo.findByUsernameAndPassword(username, password);
        return user.orElse(null);
    }

    public User getUserById(Long id) {
        return repo.findById(id).orElse(null);
    }
}