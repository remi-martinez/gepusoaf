package com.gepusoaf.restservice.etudiant;

import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EtudiantInput {
    private Integer numEtudiant;
    private String nomEtudiant;
    private String prenomEtudiant;
    private LocalDate anneeObtention;
    private String login;
    private String mdp;
    private Boolean enActivite = false;
    private Integer numClasse;
}
