package com.gepusoaf.restservice.entreprise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/entreprises")
public class EntrepriseController {
    private final EntrepriseService entrepriseService;

    @Autowired
    EntrepriseController(EntrepriseService entrepriseService) {
        this.entrepriseService = entrepriseService;
    }

    @GetMapping
    List<Entreprise> findAll() {
       return entrepriseService.findAll();
    }

    @GetMapping("/{id}")
    Optional<Entreprise> findById(@PathVariable int id) {
        return entrepriseService.findById(id);
    }

    @PostMapping
    Entreprise createEntreprise(@Validated @RequestBody EntrepriseInput entrepriseInput) {
        return entrepriseService.createEntreprise(entrepriseInput);
    }

    @PutMapping("/{id}")
    Entreprise updateEntreprise(@PathVariable int id, @Validated @RequestBody EntrepriseInput entrepriseInput) {
        return entrepriseService.updateEntreprise(id, entrepriseInput);
    }

    @DeleteMapping("/{id}")
    int delete(@PathVariable int id) {
        return entrepriseService.deleteEntreprise(id);
    }

}
