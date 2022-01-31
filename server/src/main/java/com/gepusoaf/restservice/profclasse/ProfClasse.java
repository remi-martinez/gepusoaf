package com.gepusoaf.restservice.profclasse;

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
@Table(name = "prof_classe")
public class ProfClasse {
    @Id
    @Column(name = "num_prof", nullable = false)
    private Integer numProf;

    @Column(name = "num_classe", nullable = false)
    private Integer numClasse;

    @Column(name = "est_prof_principal", nullable = false)
    private Boolean estProfPrincipal = false;
}
