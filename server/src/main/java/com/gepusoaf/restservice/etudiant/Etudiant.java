package com.gepusoaf.restservice.etudiant;

import com.gepusoaf.restservice.classe.Classe;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Etudiant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_etudiant", nullable = false)
    private Integer numEtudiant;

    @Column(name = "nom_etudiant", nullable = false, length = 64)
    private String nomEtudiant;

    @Column(name = "prenom_etudiant", nullable = false, length = 64)
    private String prenomEtudiant;

    @Column(name = "annee_obtention")
    private LocalDate anneeObtention;

    @Column(name = "login", nullable = false, length = 8)
    private String login;

    @Column(name = "mdp", nullable = false, length = 30)
    private String mdp;

    @ManyToOne(optional = false)
    @JoinColumn(name = "num_classe", nullable = false)
    private Classe numClasse;

    @Column(name = "en_activite", nullable = false)
    private Boolean enActivite = false;

}
