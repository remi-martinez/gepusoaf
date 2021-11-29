package com.gepusoaf.restservice.stage;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Stage {
    @Id
    @Column(name = "num_stage", nullable = false)
    private int numStage;
    @Column(name = "debut_stage")
    private LocalDate debutStage;
    @Column(name = "fin_stage")
    private LocalDate finStage;
    @Column(name = "type_stage")
    private String typeStage;
    @Column(name = "desc_projet")
    private String descProjet;
    @Column(name = "observation_stage")
    private String observationStage;
    @Column(name = "num_etudiant")
    private int numEtudiant;
    @Column(name = "num_prof")
    private int numProf;
    @Column(name = "num_entreprise")
    private int numEntreprise;
}
