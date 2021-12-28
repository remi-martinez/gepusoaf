package com.gepusoaf.restservice.entreprise;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Entreprise {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "num_entreprise", nullable = false)
    private Integer id;

    @Column(name = "raison_sociale", nullable = false, length = 128)
    private String raisonSociale;

    @Column(name = "nom_contact", length = 128)
    private String nomContact;

    @Column(name = "nom_resp", length = 128)
    private String nomResp;

    @Column(name = "rue_entreprise", length = 128)
    private String rueEntreprise;

    @Column(name = "cp_entreprise")
    private Integer cpEntreprise;

    @Column(name = "ville_entreprise", nullable = false, length = 128)
    private String villeEntreprise;

    @Column(name = "tel_entreprise", length = 32)
    private String telEntreprise;

    @Column(name = "fax_entreprise", length = 32)
    private String faxEntreprise;

    @Column(name = "email", length = 128)
    private String email;

    @Type(type = "text")
    @Column(name = "observation")
    private String observation;

    @Column(name = "site_entreprise", length = 128)
    private String siteEntreprise;

    @Column(name = "niveau", nullable = false, length = 32)
    private String niveau;

    @Column(name = "en_activite", nullable = false)
    private Boolean enActivite = false;

}
