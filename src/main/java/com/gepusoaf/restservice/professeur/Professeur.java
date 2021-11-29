package com.gepusoaf.restservice.professeur;

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
public class Professeur {
    @Id
    @Column(name = "num_prof", nullable = false)
    private int numProf;
    @Column(name = "num_classe")
    private int numClasse;
    @Column(name = "est_prof_principal")
    private boolean estProfPrincipal;
}
