package com.gepusoaf.restservice.stage;

import com.gepusoaf.restservice.entreprise.Entreprise;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/")
    Stage createStage(@Validated @RequestBody Stage stage) {
        return stageService.createStage(stage);
    }

    @PutMapping("/{id}")
    Stage updateStage(@PathVariable int id, @Validated @RequestBody Stage stageDetails) {
        return stageService.updateStage(id, stageDetails);
    }

    @DeleteMapping("/{id}")
    int deleteStage(@PathVariable int id) {
        return stageService.deleteStage(id);
    }
}
