package com.gepusoaf.restservice.mission;

import com.gepusoaf.restservice.stage.Stage;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Mission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_mission", nullable = false)
    private Integer numMission;

    @Column(name = "libelle", nullable = false, length = 128)
    private String libelle;

    @ManyToOne(optional = false)
    @JoinColumn(name = "num_stage", nullable = false)
    private Stage numStage;

}
