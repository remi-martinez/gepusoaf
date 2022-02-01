package com.gepusoaf.restservice.etudiant;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.gepusoaf.restservice.classe.Classe;
import com.gepusoaf.restservice.stage.Stage;
import lombok.*;
import org.hibernate.annotations.Formula;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
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

    @JsonManagedReference
    @OneToMany(mappedBy = "numEtudiant")
    private List<Stage> stages;
}
