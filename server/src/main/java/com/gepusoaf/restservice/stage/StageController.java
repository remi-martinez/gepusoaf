package com.gepusoaf.restservice.stage;

import com.gepusoaf.restservice.entreprise.Entreprise;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/stages")
public class StageController {
    private final StageService stageService;

    StageController(StageService stageService) {
        this.stageService = stageService;
    }

    @GetMapping("/")
    List<Stage> findAll() {
        return stageService.findAll();
    }

    @GetMapping("/{id}")
    Optional<Stage> findById(@PathVariable int id) {
        return stageService.findById(id);
    }
}
