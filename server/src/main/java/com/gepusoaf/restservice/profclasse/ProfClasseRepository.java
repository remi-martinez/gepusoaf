package com.gepusoaf.restservice.profclasse;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProfClasseRepository extends JpaRepository<ProfClasse, Integer> {

    ProfClasse findByNumClasseAndEstProfPrincipal(Integer numClasse, Boolean estPP);

    List<ProfClasse> findAllProfClasseByEstProfPrincipal(Boolean estPP);
}