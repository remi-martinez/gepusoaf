package com.gepusoaf.restservice.specentreprise;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SpecEntrepriseService {
    @Autowired
    private SpecEntrepriseRepository specEntrepriseRepository;

    List<SpecEntreprise> getAllSpecEntreprises() {
        return this.specEntrepriseRepository.findAll();
    }

    List<SpecEntreprise> getSpecEntreprisesFromNumEntreprise(Integer numEntreprise) {
        return this.specEntrepriseRepository.findAllByNumEntreprise(numEntreprise);
    }

    SpecEntreprise createSpecEntreprise(SpecEntreprise specEntreprise) {
        return this.specEntrepriseRepository.save(specEntreprise);
    }

    public SpecEntreprise modify(SpecEntreprise newSpecEntreprise, Integer id) {
        return this.specEntrepriseRepository.findById(id).map(
                specEntreprise -> {
                    specEntreprise.setNumSpec(newSpecEntreprise.getNumSpec());
                    return this.specEntrepriseRepository.save(specEntreprise);
                }
        ).orElseThrow();
    }
}
