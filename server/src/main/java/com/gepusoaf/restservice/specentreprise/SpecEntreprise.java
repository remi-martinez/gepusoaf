package com.gepusoaf.restservice.specentreprise;

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
@Table(name = "spec_entreprise")
public class SpecEntreprise {
    @Id
    @Column(name = "num_entreprise", nullable = false)
    private Integer numEntreprise;
    @Column(name = "num_spec", nullable = false)
    private Integer numSpec;

}
