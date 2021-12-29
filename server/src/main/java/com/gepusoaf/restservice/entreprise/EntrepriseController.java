package com.gepusoaf.restservice.entreprise;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class EntrepriseController {
    private final EntrepriseRepository entrepriseRepository;

    EntrepriseController(EntrepriseRepository entrepriseRepository) {
        this.entrepriseRepository = entrepriseRepository;
    }

    @GetMapping("/entreprises")
    List<Entreprise> all() {
        return entrepriseRepository.findAll();
    }
}
