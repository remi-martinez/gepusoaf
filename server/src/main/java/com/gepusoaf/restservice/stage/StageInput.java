package com.gepusoaf.restservice.stage;

import com.gepusoaf.restservice.entreprise.Entreprise;
import com.gepusoaf.restservice.etudiant.Etudiant;
import com.gepusoaf.restservice.mission.Mission;
import com.gepusoaf.restservice.professeur.Professeur;
import lombok.*;

import java.time.Instant;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class StageInput {
    private Instant debutStage;
    private Instant finStage;
    private String typeStage;
    private String descProjet;
    private String observationStage;
    private Integer numEtudiant;
    private Integer numProf;
    private Integer numEntreprise;
}
