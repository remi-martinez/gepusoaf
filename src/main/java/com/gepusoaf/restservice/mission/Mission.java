package com.gepusoaf.restservice.mission;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Mission {
    @Id
    @Column(name = "num_mission", nullable = false)
    private int numMission;
    private String libelle;
    @Column(name = "num_stage")
    private int numStage;
}
