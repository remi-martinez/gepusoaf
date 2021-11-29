package com.gepusoaf.restservice.specialite;

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
public class Specialite {
    @Id
    @Column(name = "num_entreprise", nullable = false)
    private int numEntreprise;
    @Column(name = "num_spec")
    private int numSpec;
}
