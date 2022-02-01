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

    public Stage createStage(@NotNull Stage stage) {
        return stageRepository.save(stage);
    }

    public int deleteStage(int id) {
        stageRepository.deleteById(id);
        return id;
    }

    public Stage updateStage(int id, Stage sInput) {
        stageRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Stage id %d introuvable.", id)));

        Stage s = Stage.builder()
                .numStage(id)
                .debutStage(sInput.getDebutStage())
                .finStage(sInput.getFinStage())
                .typeStage(sInput.getTypeStage())
                .descProjet(sInput.getDescProjet())
                .observationStage(sInput.getObservationStage())
                .numEtudiant(sInput.getNumEtudiant())
                .numProf(sInput.getNumProf())
                .numEntreprise(sInput.getNumEntreprise())
                .build();

        return stageRepository.save(s);
    }
}
