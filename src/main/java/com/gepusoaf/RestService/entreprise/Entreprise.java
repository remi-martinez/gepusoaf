package com.gepusoaf.RestService.entreprise;

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
public class Entreprise {
    @Id
    @Column(name = "num_classe", nullable = false)
    private int num_entreprise;
    @Column(name="raison_sociale")
    private String raisonSociale;
    @Column(name="nom_contact")
    private String nomContact;
    @Column(name="nom_resp")
    private String nomResp;
    @Column(name="rue_entreprise")
    private String rueEntreprise;
    @Column(name="cp_entreprise")
    private int cpEntreprise;
    @Column(name="ville_entreprise")
    private String villeEntreprise;
    @Column(name="tel_entreprise")
    private String telEntreprise;
    @Column(name="fax_entreprise")
    private String faxEntreprise;
    private String email;
    private String observation;
    @Column(name="site_entreprise")
    private String siteEntreprise;
    private String niveau;
    @Column(name="en_activite")
    private boolean enActivite;
}
