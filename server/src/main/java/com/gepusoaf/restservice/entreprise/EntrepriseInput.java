package com.gepusoaf.restservice.entreprise;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EntrepriseInput {
    private Integer numEntreprise;
    private String raisonSociale;
    private String nomContact;
    private String nomResp;
    private String rueEntreprise;
    private Integer cpEntreprise;
    private String villeEntreprise;
    private String telEntreprise;
    private String faxEntreprise;
    private String email;
    private String observation;
    private String siteEntreprise;
    private String niveau;
    private Boolean enActivite = true;
    private List<Integer> specialites = new ArrayList<>();
}
