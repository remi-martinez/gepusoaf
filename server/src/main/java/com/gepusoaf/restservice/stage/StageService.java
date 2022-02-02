package com.gepusoaf.restservice.stage;

import com.gepusoaf.restservice.entreprise.Entreprise;
import com.gepusoaf.restservice.entreprise.EntrepriseRepository;
import com.gepusoaf.restservice.etudiant.Etudiant;
import com.gepusoaf.restservice.etudiant.EtudiantRepository;
import com.gepusoaf.restservice.professeur.Professeur;
import com.gepusoaf.restservice.professeur.ProfesseurRepository;
import com.sun.istack.NotNull;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class StageService {
    private final StageRepository stageRepository;
    private final EtudiantRepository etudiantRepository;
    private final ProfesseurRepository professeurRepository;
    private final EntrepriseRepository entrepriseRepository;

    public StageService(StageRepository stageRepository, EtudiantRepository etudiantRepository, ProfesseurRepository professeurRepository, EntrepriseRepository entrepriseRepository) {
        this.stageRepository = stageRepository;
        this.etudiantRepository = etudiantRepository;
        this.professeurRepository = professeurRepository;
        this.entrepriseRepository = entrepriseRepository;
    }

    public List<Stage> findAll() {
        return stageRepository.findAll();
    }

    public Optional<Stage> findById(@NotNull int id) {
        return stageRepository.findById(id);
    }

    public Stage createStage(@NotNull StageInput stageInput) {
        Etudiant etu = etudiantRepository.findById(stageInput.getNumEtudiant())
                .orElseThrow(() -> new RuntimeException("Etudiant id " + stageInput.getNumEtudiant() + " introuvable."));
        Professeur prof = professeurRepository.findById(stageInput.getNumProf())
                .orElseThrow(() -> new RuntimeException("Professeur id " + stageInput.getNumProf() + " introuvable."));
        Entreprise ent = entrepriseRepository.findById(stageInput.getNumEntreprise())
                .orElseThrow(() -> new RuntimeException("Entreprise id " + stageInput.getNumEntreprise() + " introuvable."));

        Stage stage = Stage.builder()
                .debutStage(stageInput.getDebutStage())
                .finStage(stageInput.getFinStage())
                .typeStage(stageInput.getTypeStage())
                .descProjet(stageInput.getDescProjet())
                .observationStage(stageInput.getObservationStage())
                .numEtudiant(etu)
                .numProf(prof)
                .numEntreprise(ent)
                .missions(Collections.emptyList())
                .build();

        return stageRepository.save(stage);
    }

    public int deleteStage(int id) {
        stageRepository.deleteById(id);
        return id;
    }

    public Stage updateStage(int id, StageInput sInput) {
        stageRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(String.format("Stage id %d introuvable.", id)));

        Professeur prof = professeurRepository.findById(sInput.getNumProf())
                .orElseThrow(() -> new RuntimeException("Professeur id " + sInput.getNumProf() + "introuvable."));
        Etudiant etu = etudiantRepository.findById(sInput.getNumEtudiant())
                .orElseThrow(() -> new RuntimeException("Etudiant id " + sInput.getNumEtudiant() + "introuvable."));
        Entreprise ent = entrepriseRepository.findById(sInput.getNumEntreprise())
                .orElseThrow(() -> new RuntimeException("Entreprise id " + sInput.getNumEntreprise() + "introuvable."));

        Stage s = Stage.builder()
                .numStage(id)
                .debutStage(sInput.getDebutStage())
                .finStage(sInput.getFinStage())
                .typeStage(sInput.getTypeStage())
                .descProjet(sInput.getDescProjet())
                .observationStage(sInput.getObservationStage())
                .numEtudiant(etu)
                .numProf(prof)
                .numEntreprise(ent)
                .missions(Collections.emptyList())
                .build();

        return stageRepository.save(s);
    }
}
