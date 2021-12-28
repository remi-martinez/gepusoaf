package com.gepusoaf.restservice.specialite;

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
public class Specialite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_spec", nullable = false)
    private Integer id;

    @Column(name = "libelle", nullable = false, length = 128)
    private String libelle;

}
