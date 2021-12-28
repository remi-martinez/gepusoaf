package com.gepusoaf.restservice.classe;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class ClassController {
    private final ClasseRepository classeRepository;

    ClassController(ClasseRepository classeRepository) {
        this.classeRepository = classeRepository;
    }

    @GetMapping("/classes")
    List<Classe> all() {
        return classeRepository.findAll();
    }
}
