package com.gepusoaf.restservice.mission;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @GetMapping("/")
    List<Mission> findAll() {
        return missionService.findAll();
    }

    @GetMapping("/{id}")
    Optional<Mission> findById(@PathVariable int id) {
        return missionService.findById(id);
    }
}
