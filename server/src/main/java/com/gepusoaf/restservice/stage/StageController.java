package com.gepusoaf.restservice.stage;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class StageController {
    private final StageRepository stageRepository;

    StageController(StageRepository stageRepository) {
        this.stageRepository = stageRepository;
    }

    @GetMapping("/stages")
    List<Stage> all() {
        return stageRepository.findAll();
    }
}
