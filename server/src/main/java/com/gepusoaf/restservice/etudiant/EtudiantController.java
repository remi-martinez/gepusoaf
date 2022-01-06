package com.gepusoaf.restservice.etudiant;

import com.gepusoaf.restservice.login.Credentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/etudiants")
public class EtudiantController {
    private final EtudiantService etudiantService;

    @Autowired
    EtudiantController(EtudiantService etudiantService) {
        this.etudiantService = etudiantService;
    }

    @GetMapping("/")
    List<Etudiant> findAll() {
        return etudiantService.findAll();
    }

    @GetMapping("/{id}")
    Optional<Etudiant> findById(@PathVariable int id) {
        return etudiantService.findById(id);
    }

    @PostMapping("/connexion")
    boolean connect(@Validated @RequestBody Credentials credentials) {
        return etudiantService.connect(credentials);
    }
}
