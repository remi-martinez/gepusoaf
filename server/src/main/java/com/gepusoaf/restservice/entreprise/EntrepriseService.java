package com.gepusoaf.restservice.entreprise;

import com.gepusoaf.restservice.specialite.Specialite;
import com.gepusoaf.restservice.specialite.SpecialiteRepository;
import com.sun.istack.NotNull;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class EntrepriseService {

    private final EntrepriseRepository entrepriseRepository;
    private final SpecialiteRepository specialiteRepository;

    public EntrepriseService(EntrepriseRepository entrepriseRepository, SpecialiteRepository specialiteRepository) {
        this.entrepriseRepository = entrepriseRepository;
        this.specialiteRepository = specialiteRepository;
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

    public Entreprise createEntreprise(EntrepriseInput eInput) {
        Set<Specialite> specialites = new HashSet<>();

        eInput.getSpecialites().forEach((Integer s) ->
                specialites.add(specialiteRepository.findById(s)
                        .orElseThrow(() -> new RuntimeException("Spécialité id " + s + " introuvable.")))
        );

        Entreprise e = Entreprise.builder()
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
                .specialites(specialites)
                .stages(Collections.emptySet())
                .build();

        return entrepriseRepository.save(e);
    }

    public Entreprise updateEntreprise(int id, EntrepriseInput eInput) {
        Entreprise old = entrepriseRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Entreprise id " + id + " introuvable."));

        Set<Specialite> specialites = new HashSet<>();

        eInput.getSpecialites().forEach((Integer s) ->
                specialites.add(specialiteRepository.findById(s)
                        .orElseThrow(() -> new RuntimeException("Spécialité id " + s + " introuvable.")))
        );

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
                .specialites(specialites)
                .stages(old.getStages())
                .build();

        return entrepriseRepository.save(e);
    }
}
