package com.gepusoaf.restservice.etudiant;

import com.gepusoaf.restservice.login.Credentials;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.Nullable;
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

    @GetMapping
    List<Etudiant> findAll() {
        return etudiantService.findAll();
    }

    @GetMapping("/{id}")
    Optional<Etudiant> findById(@PathVariable int id) {
        return etudiantService.findById(id);
    }

    @GetMapping("/search")
    Optional<Etudiant> findByLogin(@Nullable @RequestParam String login) {
        if (login == null) return Optional.empty();
        return etudiantService.findByLogin(login);
    }

    @PostMapping("/connexion")
    boolean connectEtudiant(@Validated @RequestBody Credentials credentials) {
        return etudiantService.connect(credentials);
    }

    @PostMapping
    Etudiant createEtudiant(@Validated @RequestBody EtudiantInput etudiantInput) {
        return etudiantService.createEtudiant(etudiantInput);
    }

    @PutMapping("/{id}")
    Etudiant updateEtudiant(@PathVariable int id, @Validated @RequestBody EtudiantInput etudiantInput) {
        return etudiantService.updateEtudiant(id, etudiantInput);
    }

    @DeleteMapping("/{id}")
    int deleteEtudiant(@PathVariable int id) {
        return etudiantService.deleteEtudiant(id);
    }
}
