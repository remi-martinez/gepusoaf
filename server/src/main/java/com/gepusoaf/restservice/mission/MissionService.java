package com.gepusoaf.restservice.mission;

import com.sun.istack.NotNull;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MissionService {
    private final MissionRepository missionRepository;

    public MissionService(MissionRepository missionRepository) {
        this.missionRepository = missionRepository;
    }

    public List<Mission> findAll() {
        return missionRepository.findAll();
    }

    public Optional<Mission> findById(@NotNull int id) {
        return missionRepository.findById(id);
    }

    public Mission createMission(@NotNull Mission mission) {
        return missionRepository.save(mission);
    }

    public int deleteMission(int id) {
        missionRepository.deleteById(id);
        return id;
    }

    public Mission updateMission(int id, Mission mInput) {
        missionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Mission id %d introuvable.", id)));

        Mission m = Mission.builder()
                .numMission(id)
                .libelle(mInput.getLibelle())
                .numStage(mInput.getNumStage())
                .build();

        return missionRepository.save(m);
    }
}
