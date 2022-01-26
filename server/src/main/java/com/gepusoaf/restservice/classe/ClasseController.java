package com.gepusoaf.restservice.classe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/classes")
public class ClasseController {
    private final ClasseService classeService;

    @Autowired
    ClasseController(ClasseService classeService) {
        this.classeService = classeService;
    }

    @GetMapping("/")
    List<Classe> findAll() {
        return classeService.findAll();
    }

    @GetMapping("/{id}")
    Optional<Classe> findById(@PathVariable int id) {
        return classeService.findById(id);
    }

    @PostMapping("/")
    Classe createClasse(@Validated @RequestBody Classe classe) {
        return classeService.createClasse(classe);
    }

    @PutMapping("/{id}")
    Classe updateClasse(@PathVariable int id, @Validated @RequestBody Classe classeDetails) {
        return classeService.updateClasse(id, classeDetails);
    }

    @DeleteMapping("/{id}")
    int delete(@PathVariable int id) {
        return classeService.deleteClasse(id);
    }
}
