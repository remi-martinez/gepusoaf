package com.gepusoaf.restservice.professeur;

import com.gepusoaf.restservice.login.Credentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/professeurs")
public class ProfesseurController {
    private final ProfesseurService professeurService;

    @Autowired
    ProfesseurController(ProfesseurService professeurService) {
        this.professeurService = professeurService;
    }

    @GetMapping("/")
    List<Professeur> all() {
        return professeurService.findAll();
    }

    @GetMapping("/{id}")
    Optional<Professeur> findById(@PathVariable int id) {
        return professeurService.findById(id);
    }

    @PostMapping("/connexion")
    boolean connect(@Validated @RequestBody Credentials credentials) {
        return professeurService.connect(credentials);
    }
}
