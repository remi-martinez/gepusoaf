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
    boolean connectEtudiant(@Validated @RequestBody Credentials credentials) {
        return etudiantService.connect(credentials);
    }

    @PostMapping("/")
    Etudiant createEtudiant(@Validated @RequestBody Etudiant etudiant) {
        return etudiantService.createEtudiant(etudiant);
    }

    @PutMapping("/{id}")
    Etudiant updateEtudiant(@PathVariable int id, @Validated @RequestBody Etudiant etudiantDetails) {
        return etudiantService.updateEtudiant(id, etudiantDetails);
    }

    @DeleteMapping("/{id}")
    int deleteEtudiant(@PathVariable int id) {
        return etudiantService.deleteEtudiant(id);
    }
}
