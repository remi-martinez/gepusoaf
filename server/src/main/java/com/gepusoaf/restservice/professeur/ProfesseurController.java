package com.gepusoaf.restservice.professeur;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class ProfesseurController {
    private final ProfesseurRepository professeurRepository;

    ProfesseurController(ProfesseurRepository professeurRepository) {
        this.professeurRepository = professeurRepository;
    }

    @GetMapping("/professeurs")
    List<Professeur> all() {
        return professeurRepository.findAll();
    }
}
