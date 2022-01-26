package com.gepusoaf.restservice.classe;

import lombok.*;

import javax.persistence.*;

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

}
