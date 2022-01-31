package com.gepusoaf.restservice.classe;

import com.gepusoaf.restservice.professeur.Professeur;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Classe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_classe", nullable = false)
    private Integer numClasse;

    @Column(name = "nom_classe", nullable = false, length = 128)
    private String nomClasse;

    @ManyToMany
    @JoinTable(name = "prof_classe",
            joinColumns = @JoinColumn(name = "num_classe"),
            inverseJoinColumns = @JoinColumn(name = "num_prof"))
    private Set<Professeur> classes = new HashSet<>();

}
