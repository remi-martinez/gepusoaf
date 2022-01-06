package com.gepusoaf.restservice.classe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
