package com.gepusoaf.restservice.professeur;

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
public class Professeur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_prof", nullable = false)
    private Integer id;

    @Column(name = "nom_prof", nullable = false, length = 64)
    private String nomProf;

    @Column(name = "prenom_prof", nullable = false, length = 64)
    private String prenomProf;

    @Column(name = "login", nullable = false, length = 8)
    private String login;

    @Column(name = "mdp", nullable = false, length = 8)
    private String mdp;

    @Column(name = "email", nullable = false, length = 100)
    private String email;



}
