package com.gepusoaf.restservice.specialite;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class SpecialiteController {
    private final SpecialiteRepository specialiteRepository;

    SpecialiteController(SpecialiteRepository specialiteRepository) {
        this.specialiteRepository = specialiteRepository;
    }

    @GetMapping("/specialites")
    List<Specialite> all() {
        return specialiteRepository.findAll();
    }
}
