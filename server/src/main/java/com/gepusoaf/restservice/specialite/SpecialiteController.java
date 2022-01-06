package com.gepusoaf.restservice.specialite;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/specialites")
public class SpecialiteController {
    private final SpecialiteService specialiteService;

    @Autowired
    SpecialiteController(SpecialiteService specialiteService) {
        this.specialiteService = specialiteService;
    }

    @GetMapping("/")
    List<Specialite> findAll() {
        return specialiteService.findAll();
    }

    @GetMapping("/{id}")
    Optional<Specialite> findById(@PathVariable int id) {
        return specialiteService.findById(id);
    }
}
