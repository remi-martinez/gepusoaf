package com.gepusoaf.restservice.mission;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.gepusoaf.restservice.stage.Stage;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Mission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_mission", nullable = false)
    private Integer numMission;

    @Column(name = "libelle", nullable = false, length = 128)
    private String libelle;

    @JsonBackReference
    @ManyToOne(optional = false)
    @JoinColumn(name = "num_stage", nullable = false)
    private Stage numStage;
}
