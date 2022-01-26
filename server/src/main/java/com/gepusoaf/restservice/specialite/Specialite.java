package com.gepusoaf.restservice.specialite;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Specialite {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_spec", nullable = false)
    private Integer numSpec;

    @Column(name = "libelle", nullable = false, length = 128)
    private String libelle;

}
