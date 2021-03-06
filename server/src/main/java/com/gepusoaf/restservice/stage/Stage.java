package com.gepusoaf.restservice.stage;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.gepusoaf.restservice.entreprise.Entreprise;
import com.gepusoaf.restservice.etudiant.Etudiant;
import com.gepusoaf.restservice.mission.Mission;
import com.gepusoaf.restservice.professeur.Professeur;
import lombok.*;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.Instant;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Stage {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_stage", nullable = false)
    private Integer numStage;

    @Column(name = "debut_stage", nullable = false)
    private Instant debutStage;

    @Column(name = "fin_stage", nullable = false)
    private Instant finStage;

    @Column(name = "type_stage", length = 128)
    private String typeStage;

    @Type(type = "text")
    @Column(name = "desc_projet")
    private String descProjet;

    @Type(type = "text")
    @Column(name = "observation_stage")
    private String observationStage;

    @JsonIgnoreProperties({"stages"})
    @ManyToOne(optional = false)
    @JoinColumn(name = "num_etudiant", nullable = false)
    private Etudiant numEtudiant;

    @ManyToOne(optional = false)
    @JoinColumn(name = "num_prof", nullable = false)
    private Professeur numProf;

    @JsonIgnoreProperties({"stages"})
    @ManyToOne(optional = false)
    @JoinColumn(name = "num_entreprise", nullable = false)
    private Entreprise numEntreprise;

    @OneToMany(mappedBy = "numStage")
    private List<Mission> missions;
}
