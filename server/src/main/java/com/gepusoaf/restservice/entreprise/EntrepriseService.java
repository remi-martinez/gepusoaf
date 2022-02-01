package com.gepusoaf.restservice.entreprise;

import com.sun.istack.NotNull;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EntrepriseService {

    private final EntrepriseRepository entrepriseRepository;

    public EntrepriseService(EntrepriseRepository entrepriseRepository) {
        this.entrepriseRepository = entrepriseRepository;
    }

    public List<Entreprise> findAll() {
        return entrepriseRepository.findAll();
    }

    public Optional<Entreprise> findById(@NotNull int id) {
        return entrepriseRepository.findById(id);
    }

    public int deleteEntreprise(int id) {
        entrepriseRepository.deleteById(id);
        return id;
    }

    public Entreprise createEntreprise(Entreprise entreprise) {
        return entrepriseRepository.save(entreprise);
    }

    public Entreprise updateEntreprise(int id, Entreprise eInput) {
        entrepriseRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Entreprise id " + id + " introuvable."));

        Entreprise e = Entreprise.builder()
                .numEntreprise(id)
                .raisonSociale(eInput.getRaisonSociale())
                .nomContact(eInput.getNomContact())
                .nomResp(eInput.getNomResp())
                .rueEntreprise(eInput.getRueEntreprise())
                .cpEntreprise(eInput.getCpEntreprise())
                .villeEntreprise(eInput.getVilleEntreprise())
                .telEntreprise(eInput.getTelEntreprise())
                .email(eInput.getEmail())
                .observation(eInput.getObservation())
                .siteEntreprise(eInput.getSiteEntreprise())
                .niveau(eInput.getNiveau())
                .enActivite(eInput.getEnActivite())
                .specialites(eInput.getSpecialites())
                .build();

        return entrepriseRepository.save(e);
    }
}
