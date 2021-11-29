package com.gepusoaf.restservice.etudiant;

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
public class Etudiant {
    @Id
    @Column(name = "num_etudiant", nullable = false)
    private int numEtudiant;
    @Column(name = "nom_etudiant")
    private String nomEtudiant;
    @Column(name = "prenom_etudiant")
    private String prenomEtudiant;
    @Column(name = "annee_obtention")
    private int anneeObtention;
    private String login;
    private String mdp;
    @Column(name = "num_classe")
    private int numClasse;
    @Column(name = "en_activite")
    private boolean enActivite;
}
