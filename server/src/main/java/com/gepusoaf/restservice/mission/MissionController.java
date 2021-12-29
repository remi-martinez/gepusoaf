package com.gepusoaf.restservice.mission;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class MissionController {
    private final MissionRepository missionRepository;

    MissionController(MissionRepository missionRepository) {
        this.missionRepository = missionRepository;
    }

    @GetMapping("/missions")
    List<Mission> all() {
        return missionRepository.findAll();
    }
}
