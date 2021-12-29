package com.gepusoaf.restservice.etudiant;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class EtudiantController {
    private final EtudiantRepository etudiantRepository;

    EtudiantController(EtudiantRepository etudiantRepository) {
        this.etudiantRepository = etudiantRepository;
    }

    @GetMapping("/etudiants")
    List<Etudiant> all() {
        return etudiantRepository.findAll();
    }
}
