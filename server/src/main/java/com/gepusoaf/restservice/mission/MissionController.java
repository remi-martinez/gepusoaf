package com.gepusoaf.restservice.mission;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/missions")
public class MissionController {
    private final MissionService missionService;

    @Autowired
    MissionController(MissionService missionService) {
        this.missionService = missionService;
    }

    @GetMapping
    List<Mission> findAll() {
        return missionService.findAll();
    }

    @GetMapping("/{id}")
    Optional<Mission> findById(@PathVariable int id) {
        return missionService.findById(id);
    }

    @PostMapping
    Mission createMission(@Validated @RequestBody Mission mission) {
        return missionService.createMission(mission);
    }

    @PutMapping("/{id}")
    Mission updateMission(@PathVariable int id, @Validated @RequestBody Mission missionDetails) {
        return missionService.updateMission(id, missionDetails);
    }

    @DeleteMapping("/{id}")
    int deleteMission(@PathVariable int id) {
        return missionService.deleteMission(id);
    }
}
