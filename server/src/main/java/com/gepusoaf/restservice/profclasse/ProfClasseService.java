package com.gepusoaf.restservice.profclasse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfClasseService {
    @Autowired
    private ProfClasseRepository profClasseRepository;

    public List<ProfClasse> getAllProfClasse() {
        return this.profClasseRepository.findAll();
    }

    public List<ProfClasse> getAllProfPrincipalClasse() {
        return this.profClasseRepository.findAllProfClasseByEstProfPrincipal(true);
    }

    public ProfClasse getProfClasseFromNumProf(Integer numProf) {
        return this.profClasseRepository.findById(numProf).orElseThrow();
    }

    public ProfClasse getProfClasseFromNumClasseAndPPVrai(Integer numClasse) {
        return this.profClasseRepository.findByNumClasseAndEstProfPrincipal(numClasse, true);
    }
}
