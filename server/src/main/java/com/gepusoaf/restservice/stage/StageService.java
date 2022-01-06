package com.gepusoaf.restservice.stage;

import com.sun.istack.NotNull;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StageService {
    private final StageRepository stageRepository;

    public StageService(StageRepository stageRepository) {
        this.stageRepository = stageRepository;
    }

    public List<Stage> findAll() {
        return stageRepository.findAll();
    }

    public Optional<Stage> findById(@NotNull int id) {
        return stageRepository.findById(id);
    }
}
