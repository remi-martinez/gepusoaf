package com.gepusoaf.RestService.classe;

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
public class Classe {
    @Id
    @Column(name = "num_classe", nullable = false)
    private int numClasse;

    @Column(name="nom_classe")
    private String nomClasse;
}
